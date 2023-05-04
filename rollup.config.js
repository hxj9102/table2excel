import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'

export default {
    input: 'src/index.js',
    inlineDynamicImports: true,
    output: [{
        inlineDynamicImports: true,
        dir: 'dist',
        entryFileNames: '[name].js',
        format: 'umd',
        name: 'Table2Excel',
    }],
    plugins: [
        babel({
            exclude: "node_modules/**"
        }),
        terser(),
    ],
}
