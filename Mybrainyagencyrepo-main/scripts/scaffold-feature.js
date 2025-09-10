#!/usr/bin/env node
// Minimal scaffolder: copies templates/feature/FeatureName.tsx to src/pages/<Name>.tsx and logs next steps.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { resolve } from 'path';

const [, , rawName] = process.argv;
if (!rawName) {
  console.error('Usage: npm run scaffold:feature <FeatureName>');
  process.exit(1);
}

const name = rawName.replace(/\s+/g, '');
const templatePath = resolve('templates/feature/FeatureName.tsx');
const outPath = resolve(`src/pages/${name}.tsx`);

if (!existsSync(templatePath)) {
  console.error('Template not found:', templatePath);
  process.exit(1);
}

const tpl = readFileSync(templatePath, 'utf8')
  .replaceAll('FeatureName', name)
  .replaceAll("@/components", './components');

mkdirSync(resolve('src/pages'), { recursive: true });
writeFileSync(outPath, tpl, 'utf8');

console.log(`Created src/pages/${name}.tsx`);
console.log('Add a route in src/App.tsx:');
console.log(`  <Route path="/${name.toLowerCase()}" element={<${name} />} />`);
