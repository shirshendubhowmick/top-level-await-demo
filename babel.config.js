// eslint-disable-next-line import/no-commonjs
module.exports = {
  presets: [['@babel/preset-env']],
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
    '@babel/plugin-proposal-optional-chaining',
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-syntax-top-level-await'
  ],
};
