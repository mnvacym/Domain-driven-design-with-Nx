module.exports = {
  plugins: ['stylelint-prettier', 'stylelint-scss'],
  extends: [
    'stylelint-config-property-sort-order-smacss',
    'stylelint-config-recommended-scss',
    'stylelint-prettier/recommended',
    'stylelint-config-prettier'
  ],
  rules: {
    'color-no-hex': true,
    'selector-class-pattern': null,
    'max-nesting-depth': null,
    'prettier/prettier': true,
    'no-empty-source': null,
    'color-hex-length': 'short',
    'length-zero-no-unit': true,
    'shorthand-property-no-redundant-values': true,
    'selector-type-no-unknown': [
      true,
      {
        ignore: ['custom-elements', 'default-namespace']
      }
    ]
  }
};
