export default {
  input: './src/index.js',
  output: {
    file: `${__dirname}/dist/rollup.js`,
    format: 'iife'
  }
}