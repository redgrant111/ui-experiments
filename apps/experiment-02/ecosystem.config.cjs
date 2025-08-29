module.exports = {
  apps: [
    {
      name: 'experiment-02-dev',
      cwd: '/home/user/webapp/apps/experiment-02',
      script: '/home/user/.local/share/pnpm/pnpm',
      args: ['dev', '--port', '3002'],
      env: {
        NODE_ENV: 'development',
        PNPM_HOME: '/home/user/.local/share/pnpm',
        PATH: '/home/user/.local/share/pnpm:' + process.env.PATH
      },
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      log_file: './logs/app.log',
      out_file: './logs/out.log',
      error_file: './logs/error.log',
      time: true
    }
  ]
};