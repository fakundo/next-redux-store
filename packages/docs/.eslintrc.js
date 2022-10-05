module.exports = {
  extends: ['airbnb-typescript', 'prettier', 'next'],
  parserOptions: {
    project: __dirname + '/tsconfig.json',
  },
  rules: {
    '@typescript-eslint/naming-convention': 0,
  },
};
