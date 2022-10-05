module.exports = {
  extends: ['airbnb-typescript', 'prettier', 'next'],
  parserOptions: {
    project: __dirname + '/tsconfig.json',
  },
  rules: {
    '@next/next/no-img-element': 0,
    '@typescript-eslint/naming-convention': 0,
  },
};
