module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/_all.scss";`
      }
    }

  },

  pluginOptions: {
    i18n: {
      locale: 'us',
      fallbackLocale: 'us',
      localeDir: 'locales',
      enableLegacy: false,
      runtimeOnly: false,
      compositionOnly: false,
      fullInstall: true
    }
  },

  devServer: {
    proxy: "http://localhost:5000"
  }
};
