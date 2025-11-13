/* Minify docs/styles.css into docs/styles.min.css */
const fs = require('fs');
const path = require('path');
const csso = require('csso');

const srcPath = path.resolve(__dirname, '..', 'docs', 'styles.css');
const destPath = path.resolve(__dirname, '..', 'docs', 'styles.min.css');

function run() {
  if (!fs.existsSync(srcPath)) {
    console.error('Source CSS not found:', srcPath);
    process.exit(1);
  }
  const css = fs.readFileSync(srcPath, 'utf8');
  const minified = csso.minify(css, { restructure: true }).css;
  fs.writeFileSync(destPath, minified, 'utf8');
  console.log('Minified CSS written to', destPath, `(original ${(css.length/1024).toFixed(2)}KB → min ${(minified.length/1024).toFixed(2)}KB)`);
}

run();
