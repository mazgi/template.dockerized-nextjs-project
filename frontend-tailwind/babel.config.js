module.exports = {
  presets: ['next/babel'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        // https://github.com/tleunen/babel-plugin-module-resolver/blob/a65c39a7e495328a9d4d70e82b567122d729e6cb/src/normalizeOptions.js#L11
        // defaultExtensions are '.js', '.jsx', '.es', '.es6', '.mjs'
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
      },
    ],
  ],
}
