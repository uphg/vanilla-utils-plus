import path from 'path'
import { execa } from 'execa'
import fs from 'fs-extra'
import { fileURLToPath } from 'url';
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
    name: 'peach-utils',
    version,
    license: 'MIT',
    main: 'index.umd.js',
    module: 'index.js',
    types: 'index.d.js',
    description: 'A modular JavaScript utility library',
    keywords: ['javascript', 'utility', 'array', 'object', 'function'],
    homepage: 'https://github.com/uphg/peach-utils#readme',
    repository: 'uphg/peach-utils',
    bugs: 'uphg/peach-utils/issues',
    author: 'Lv Heng <lvheng233@gmail.com>'
  }

  await execa('tsc')
  if (fs.existsSync(distDir)) {
    await fs.remove(distDir)
  }

  await execa('rollup', ['-c', 'rollup.config.ts', '--environment', 'CJS', '--configPlugin', '@rollup/plugin-typescript'])
  // await execa('rollup', ['-c', '--environment', 'CJS'])
  // await fs.remove(resolve('index.js'))
  await execa('rollup', ['-c', 'rollup.config.ts', '--environment', 'ESM', '--configPlugin', '@rollup/plugin-typescript'])
  // await execa('rollup', ['-c', '--environment', 'ESM'])
  await execa('rollup', ['-c', 'rollup.config.ts', '--configPlugin', '@rollup/plugin-typescript'])
  await execa('eslint', ['dist', '--fix'])
  const strPackage = JSON.stringify(packageJson, null, 2)
  fs.writeFile(resolve('./package.json'), strPackage)
  await execa('cp', ['README.md', 'dist'])
  console.log('build ok!')
}
