export default {
  entry: 'src/index.tsx',
  esm: 'babel',
  cjs: 'babel',
  extractCSS: true,
  runtimeHelpers: false,
  lessInBabelMode: true,
  doc: {
    title: 'MEUI',
    themeConfig: { mode: 'light' },
    base: '/MeUI',
  },
};
