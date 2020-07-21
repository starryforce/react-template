const CracoLessPlugin = require('craco-less');

const CSS_MODULE_LOCAL_IDENT_NAME = '[local]___[hash:base64:5]';

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#00B9F1' },
            javascriptEnabled: true,
          },
        },
        cssLoaderOptions: {
          modules: { localIdentName: CSS_MODULE_LOCAL_IDENT_NAME },
        },
      },
    },
  ],
  style: {
    modules: {
      localIdentName: CSS_MODULE_LOCAL_IDENT_NAME,
    },
  },
  babel: {
    plugins: [
      [
        'babel-plugin-react-css-modules',
        {
          generateScopedName: CSS_MODULE_LOCAL_IDENT_NAME,
          attributeNames: { activeStyleName: 'activeClassName' },
          filetypes: {
            '.less': {
              syntax: 'postcss-less',
            },
          },
        },
      ],
    ],
  },
};
