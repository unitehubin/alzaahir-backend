@echo off
setlocal enabledelayedexpansion
SET "CURRENTDIR=%cd%"
cd /d "!CURRENTDIR!"

REM Set the filename of the environment file based on the environment
if "%~1" neq "" (
  set "ENV_FILE=.\env\%~1.env"
  echo Using ENV file: !ENV_FILE!
) else (
  echo Error: Specify ENV file
  exit /b 1
)

REM Check if the environment file exists
if not exist "%ENV_FILE%" (
  echo Environment file %ENV_FILE% not found.
  exit /b 1
)

REM Read and set each line from the environment file
for /f "usebackq delims=" %%i in ("%ENV_FILE%") do (
  set "LINE=%%i"
  for /f "tokens=1,* delims==" %%a in ("!LINE!") do (
    set "NAME=%%a"
    set "VALUE=%%b"
    set "!NAME!=!VALUE!"
    echo !NAME!=!VALUE!
  )
)

REM Ensure DATABASE_URL is properly set
set "DATABASE_URL=postgresql://!MYSQL_USER!:!MYSQL_PASSWORD!@!DB_HOST!/!DB_NAME!?sslmode=require"
echo DATABASE_URL=!DATABASE_URL!

REM Export DATABASE_URL for Prisma
set DATABASE_URL

REM Run Prisma commands in the same environment
cmd /c "npx prisma db push --schema prisma/alzaahir-dev/schema.prisma"
echo Push complete

cmd /c "npx prisma db pull --schema prisma/alzaahir-dev/schema.prisma"
echo Pull complete

cmd /c "npx prisma generate --schema prisma/alzaahir-dev/schema.prisma"
echo Generate complete

endlocal
