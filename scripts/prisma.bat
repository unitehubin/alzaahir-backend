@echo off
setlocal enabledelayedexpansion

:: Get current directory
set "CURRENTDIR=%cd%"

:: Check environment parameter
if "%1"=="" (
    echo Error: Specify ENV file
    exit /b 1
)

:: Set environment file path
set "ENV_FILE=.\env\%1.env"
echo !ENV_FILE!

:: Check if environment file exists
if not exist %ENV_FILE% (
    echo Environment file %ENV_FILE% not found.
    exit /b 1
)

:: Read and set environment variables
for /f "usebackq delims=" %%G in ("%ENV_FILE%") do (
    set "LINE=%%G"
    :: Skip empty lines and comments
    if not "!LINE!"=="" if not "!LINE:~0,1!"=="#" (
        for /f "tokens=1* delims==" %%a in ("!LINE!") do (
            set "NAME=%%a"
            set "VALUE=%%b"
            set "!NAME!=!VALUE!"
            echo !NAME!=!VALUE!
        )
    )
)

:: Set database URL
set "DATABASE_URL=postgresql://!MYSQL_USER!:!MYSQL_PASSWORD!@!DB_HOST!/!DB_NAME!?sslmode=require"
set "DATABASE_URL=!DATABASE_URL!"
echo !DATABASE_URL!

:: Run Prisma commands
npx prisma db push --schema prisma\alzaahir-dev\schema.prisma
npx prisma db pull --schema prisma\alzaahir-dev\schema.prisma
echo pull complete
npx prisma generate --schema prisma\alzaahir-dev\schema.prisma
echo generate complete

endlocal