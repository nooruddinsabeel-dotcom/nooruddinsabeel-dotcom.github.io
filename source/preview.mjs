import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root = path.join(path.dirname(fileURLToPath(import.meta.url)), 'out');
if (!fs.existsSync(path.join(root, 'index.html'))) {
  console.error('The ready-to-view website folder "out" is missing. Run npm run build:github first.');
  process.exit(1);
}
const mime = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.svg':'image/svg+xml','.webp':'image/webp','.png':'image/png','.pdf':'application/pdf','.txt':'text/plain; charset=utf-8','.json':'application/json','.woff2':'font/woff2'};
const server = http.createServer((req, res) => {
  if (!['GET','HEAD'].includes(req.method)) {res.writeHead(405);res.end();return;}
  let requestPath;
  try { requestPath=decodeURIComponent(new URL(req.url,'http://localhost').pathname); } catch {res.writeHead(400);res.end('Bad request');return;}
  let file=path.resolve(root,'.'+requestPath);
  if (!file.startsWith(root+path.sep) && file!==root) {res.writeHead(403);res.end('Forbidden');return;}
  if (fs.existsSync(file) && fs.statSync(file).isDirectory()) file=path.join(file,'index.html');
  if (!fs.existsSync(file) || !fs.statSync(file).isFile()) {res.writeHead(404);res.end('Page not found');return;}
  res.writeHead(200,{'Content-Type':mime[path.extname(file)] || 'application/octet-stream','Content-Length':fs.statSync(file).size,'X-Content-Type-Options':'nosniff'});
  if (req.method==='HEAD') res.end(); else fs.createReadStream(file).pipe(res);
});
server.on('error',err=>{console.error(err.code==='EADDRINUSE' ? 'Port 3000 is already in use. Close the other preview and try again.' : err.message);process.exit(1);});
server.listen(3000,'127.0.0.1',()=>console.log('\nYour portfolio is ready: http://localhost:3000\nKeep this terminal open. Press Ctrl+C to stop.\n'));
