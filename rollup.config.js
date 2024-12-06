import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser'; // For minification
import css from 'rollup-plugin-import-css';

export default defineConfig({
  input: 'src/index.js',
  output: {
    file: 'dist/login-widget.min.js', // Minified output
    format: 'umd', // Universal Module Definition
    name: 'LoginWidget', // Global variable when loaded via <script>
  },
  plugins: [
    resolve(), // Resolve dependencies
    commonjs(), // Convert CommonJS to ES modules
    css({ output: 'dist/styles.css' }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**',
    }),
    terser(),
  ],
});
