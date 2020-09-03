export default {
  input: 'dist/index.js',
  output: [
    {
      format: 'cjs',
      file: 'build/mms.js',
      indent: '\t',
    },
  ],
  watch: {
    inclue: './dist/**/*.js',
  },
};