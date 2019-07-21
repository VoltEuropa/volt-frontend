export default {
  plugins: ["~plugins/components"],
  modules: [
    [
      "nuxt-i18n",
      {
        locales: [
          {
            name: "Dutch",
            code: "nl",
            iso: "nl-NL",
            file: "ui/nl-NL.js"
          },
          {
            name: "English",
            code: "en",
            iso: "en-US",
            file: "ui/en-US.js"
          }
        ],
        lazy: true,
        strategy: "prefix_except_default",
        loadLanguagesAsync: true,
        langDir: "pages/_lang/",
        defaultLocale: "nl",
        parsePages: false
      }
    ]
  ]
};
