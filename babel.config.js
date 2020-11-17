module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "babel-plugin-root-import",
      {
        "paths": [
          {
            rootPathSuffix: "./src",
            rootPathPrefix: "@/"
          },
          {
            rootPathSuffix: "./src/components",
            rootPathPrefix: "@components"
          },
          {
            rootPathSuffix: "./src/configs",
            rootPathPrefix: "@configs"
          },
          {
            rootPathSuffix: "./src/i18n",
            rootPathPrefix: "@i18n"
          },
          {
            rootPathSuffix: "./src/navigations",
            rootPathPrefix: "@navigations"
          },
          {
            rootPathSuffix: "./src/screens",
            rootPathPrefix: "@screens"
          },
          {
            rootPathSuffix: "./src/services",
            rootPathPrefix: "@services"
          },
          {
            rootPathSuffix: "./src/utils",
            rootPathPrefix: "@utils"
          }
        ]
      }
    ]
  ]
};
