module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    '.eslintrc-auto-import.json',
    'plugin:vue/vue3-recommended',
    'plugin:import/recommended',
    'plugin:promise/recommended',
    'plugin:sonarjs/recommended',
    // 'plugin:unicorn/recommended',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.mjs', '.vue', '.json'],
      },
      alias: {
        extensions: ['.js', '.jsx', '.json', '.vue', '.ts'],
        map: [
          ['@', './src'],
          ['@core', './src/@core'],
          ['@layouts', './src/@layouts'],
          ['@images', './src/assets/images/'],
          ['@styles', './src/styles/'],
          ['@configured-variables', './src/styles/variables/_template.scss'],
          ['@axios', './src/plugins/axios'],
          ['apexcharts', 'node_modules/apexcharts-clevision'],
        ],
      },
    },
  },
};
