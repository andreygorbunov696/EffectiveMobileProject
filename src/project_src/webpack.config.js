const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleTracker = require("webpack-bundle-tracker");

module.exports = {
  entry: {
    main: "./static/js/main.js", // Основной JS
  },
  output: {
    path: path.resolve(__dirname, "static/dist/"), // Выходная папка
    filename: "js/[name].js", // Выходной JS-файл
    clean: true, // Очистка папки перед сборкой
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // Поддержка SCSS
        use: [
          MiniCssExtractPlugin.loader, // Извлекает CSS в файл
          "css-loader",  // Обрабатывает @import и url()
          "sass-loader"  // Компилирует SCSS → CSS
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css", // SCSS → CSS
    }),
    new BundleTracker({
      path: __dirname, // Указываем папку для сохранения
      filename: "webpack-stats.json" // Указываем только имя файла
    }),
  ],
  mode: "development" // или "production"
};
