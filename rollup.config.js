import babel from '@rollup/plugin-babel';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/index.js',  // Atau file entry point Anda
  output: {
    file: 'dist/index.js',
    format: 'cjs',  // Format CommonJS
  },
  plugins: [
    resolve(),
    babel({ exclude: 'node_modules/**' }),
  ],
};
