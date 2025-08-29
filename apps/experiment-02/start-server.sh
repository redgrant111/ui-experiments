#!/bin/bash
cd /home/user/webapp/apps/experiment-02
export PATH="$HOME/.local/share/pnpm:$PATH"
exec pnpm dev --port 3002