export default {
  apps: [
    {
      name: 'experiment-02-dev',
      script: 'pnpm',
      args: 'dev --port 3002',
      cwd: '/home/user/webapp/apps/experiment-02',
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