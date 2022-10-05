module.exports = {
  extends: ['airbnb-typescript', 'prettier', 'next'],
  parserOptions: {
    project: __dirname + '/tsconfig.json',
  },
  rules: {
    '@next/next/no-document-import-in-page': 0,
    'react-hooks/exhaustive-deps': 0,
    'react/jsx-filename-extension': [0],
    'react/jsx-key': 0,
  },
};
