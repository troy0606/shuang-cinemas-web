module.exports = {
  'package.json': ['prettier --write'],
  '*.{js,jsx,ts,tsx}': ['eslint --fix'],
  // '*.css': ['stylelint --fix'],
  // '*.scss': ['stylelint --syntax=scss --fix'],
  '*.{js,jsx,ts,tsx,css,scss,html}': ['prettier --write'],
  // '*.md': ['markdownlint', 'prettier --write'],
};
