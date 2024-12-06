import { defineConfig } from 'rollup';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import terser from '@rollup/plugin-terser';
import postcss from 'rollup-plugin-postcss';
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';

// Read version from package.json
const version = '6';

export default defineConfig([
  // JavaScript bundle configuration
  {
    input: 'src/index.js',
    output: [
      {
        file: `dist/login-widget-v${version}.min.js`,
        format: 'umd',
        name: 'LoginWidget',
      },
      {
        file: 'dist/login-widget.min.js',
        format: 'umd',
        name: 'LoginWidget',
      }
    ],
    plugins: [
      resolve(),
      commonjs(),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
      }),
      terser(),
    ],
  },
  // Separate CSS bundle configuration
  {
    input: 'src/styles.css',
    output: [
      {
        file: `dist/login-widget-v${version}.min.css`,
        format: 'es'
      },
      {
        file: 'dist/login-widget.min.css',
        format: 'es'
      }
    ],
    plugins: [
      postcss({
        extract: true,
        modules: false,
        plugins: [
          autoprefixer(),
          cssnano({
            preset: 'default',
          })
        ],
        sourceMap: true,
        minimize: true,
      })
    ]
  }
]);