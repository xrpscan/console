export NODE_ENV=production
pnpm build && rsync -av .next/static/ /opt/xrpscan/console/_next/static/
pm2 restart console
