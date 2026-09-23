import {createHash} from 'node:crypto';
import {readFile,writeFile} from 'node:fs/promises';

const htmlFiles=['index.html','politica-de-privacidade.html'];
const unique=values => [...new Set(values)];
const hash=value => `'sha256-${createHash('sha256').update(value,'utf8').digest('base64')}'`;
const scriptHashes=[];
const styleHashes=[];

for(const file of htmlFiles){
  const html=await readFile(file,'utf8');
  for(const match of html.matchAll(/<script\b(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/gi)){
    scriptHashes.push(hash(match[1]));
  }
  for(const match of html.matchAll(/<style\b[^>]*>([\s\S]*?)<\/style>/gi)){
    styleHashes.push(hash(match[1]));
  }
}

const csp=[
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  `script-src 'self' https://www.googletagmanager.com https://tagmanager.google.com https://spar-hazel.vercel.app https://www.clarity.ms https://scripts.clarity.ms ${unique(scriptHashes).join(' ')}`,
  "script-src-attr 'none'",
  `style-src 'self' https://tagmanager.google.com https://fonts.googleapis.com ${unique(styleHashes).join(' ')}`,
  "style-src-attr 'unsafe-inline'",
  "connect-src 'self' https://www.googletagmanager.com https://*.google-analytics.com https://*.google.com https://*.google.com.br https://www.googleadservices.com https://googleads.g.doubleclick.net https://pagead2.googlesyndication.com https://spar-hazel.vercel.app https://tagassistant.google.com https://www.clarity.ms https://b.clarity.ms",
  "img-src 'self' data: https://www.googletagmanager.com https://*.google-analytics.com https://*.google.com https://*.google.com.br https://*.g.doubleclick.net https://www.googleadservices.com https://pagead2.googlesyndication.com https://ssl.gstatic.com https://www.gstatic.com https://spar-hazel.vercel.app https://c.clarity.ms",
  "frame-src https://www.google.com https://www.googletagmanager.com https://tagassistant.google.com https://*.doubleclick.net",
  "font-src 'self' data: https://fonts.gstatic.com",
  "media-src 'self'",
  "manifest-src 'self'",
  "worker-src 'self' blob:",
  'upgrade-insecure-requests'
].join('; ')+';';

const htaccessPath='.htaccess';
const current=await readFile(htaccessPath,'utf8');
const replacement=`# CSP-GENERATED-BEGIN\n  Header always set Content-Security-Policy "${csp}"\n# CSP-GENERATED-END`;
const next=current.replace(/# CSP-GENERATED-BEGIN[\s\S]*?# CSP-GENERATED-END/,replacement);

if(next===current && current.includes('GENERATE_WITH_NODE')){
  throw new Error('Não foi possível localizar o bloco CSP em .htaccess.');
}

if(process.argv.includes('--check')){
  if(next!==current){
    console.error('Os hashes CSP estão desatualizados. Execute: node scripts/update-csp.mjs');
    process.exit(1);
  }
  console.log('Hashes CSP atualizados.');
}else{
  await writeFile(htaccessPath,next);
  console.log(`CSP atualizada com ${unique(scriptHashes).length} hash(es) de script e ${unique(styleHashes).length} hash(es) de estilo.`);
}
