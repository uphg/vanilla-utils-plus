import path from 'path'
import fs from 'fs-extra'
import { fileURLToPath } from 'url';
import { execa } from 'execa'
import minimist from 'minimist'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(__dirname, '../dist')
const resolve = (p) => path.resolve(distDir, p)
const argv = minimist(process.argv.slice(2));

// use pnpm build -v 0.1.x
run(argv)

async function run(argv) {
  const { v: version = '0.0.1-alpha.1' } = argv
  const packageJson = {
    name: 'vanilla-utils-plus',
    version,
    license: 'MIT',
    main: 'index.umd.js',
    module: 'index.js',
    types: 'index.d.js',
    description: 'A modular JavaScript utility library',
    keywords: ['javascript', 'utility', 'array', 'object', 'function'],
    homepage: 'https://github.com/uphg/vanilla-utils-plus#readme',
    repository: 'uphg/vanilla-utils-plus',
    bugs: 'uphg/vanilla-utils-plus/issues',
    author: 'Lv Heng <lvheng233@gmail.com>'
  }

  await execa('tsc')
  if (fs.existsSync(distDir)) {
    await fs.remove(distDir)
  }
  await rollupBuild('--environment', 'CJS')
  await rollupBuild('--environment', 'ESM')
  await rollupBuild()
  await execa('eslint', ['dist', '--fix'])
  const strPackage = JSON.stringify(packageJson, null, 2)
  fs.writeFile(resolve('./package.json'), strPackage)
  await execa('cp', ['README.md', 'README.zh.md', 'dist'])
  console.log('build ok!')
}

function rollupBuild(...args) {
  return execa('rollup', ['-c', 'rollup.config.ts', ...args, '--configPlugin', '@rollup/plugin-typescript'])
}
