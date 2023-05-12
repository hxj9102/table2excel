import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
const pkg = require('./package.json')

export default {
    input: 'src/index.js',
    output: [{
        dir: 'dist',
        format: 'umd',
        entryFileNames: '[name].js',
        name: 'Workbook',
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
