import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser'; // For minification
import postcss from 'rollup-plugin-postcss'; // For processing CSS

export default defineConfig({
  input: 'src/index.js', // Entry point for JS
  output: [
    {
      file: 'dist/login-widget-v4.min.js', // Minified JS output
      format: 'umd', // Universal Module Definition
      name: 'LoginWidget', // Global variable when loaded via <script>
    },
    {
      file: 'dist/styles-v1.css', // Output for bundled CSS
      format: 'es', // ES module format
    },
  ],
  plugins: [
    resolve(), // Resolve dependencies from node_modules
    commonjs(), // Convert CommonJS modules to ES modules
    postcss({
      extract: true, // Extract CSS into a separate file
      minimize: true, // Minify the CSS
    }),
    babel({
      babelHelpers: 'bundled',
      exclude: 'node_modules/**', // Exclude node_modules from transpiling
    }),
    terser(), // Minify the JS code
  ],
});
