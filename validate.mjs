import { existsSync, readFileSync } from 'node:fs';
if (!existsSync('dist/index.html')) throw new Error('dist/index.html missing');
const html=readFileSync('dist/index.html','utf8');
for (const s of ['TRACE PEN','ABOUT ME','CONTACT','PROJECTS']) if (!html.includes(s)) throw new Error(`Missing ${s}`);
console.log('Seunghyuk portfolio clone validated.');
