import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
const pkg = require('./package.json')

export default {
    input: 'src/index.js',
    inlineDynamicImports: true,
    output: [{
        inlineDynamicImports: true,
        dir: 'dist',
        entryFileNames: '[name].js',
        format: 'umd',
        name: 'Table2Excel',
        banner: `
/*!
 * ${pkg.name} v${pkg.version}
 * Released under the MIT License.
 * repository: ${pkg.repository}
 */`
    }],
    plugins: [
        babel({
            exclude: "node_modules/**"
        }),
        terser(),
    ],
}
