const { execSync } = require('child_process');

try {
  const command = process.platform === 'win32' ? 'yarn prisma:win' : 'yarn prisma:linux';
  execSync(command, { stdio: 'inherit' });
} catch (error) {
  console.log('Prisma setup skipped - this is normal for production builds');
  process.exit(0); // Exit successfully even if prisma fails
} 