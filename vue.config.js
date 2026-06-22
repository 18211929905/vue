const path = require("path");

module.exports = {
  publicPath: "https://ljkagent-1323772430.cos.ap-shanghai.myqcloud.com/dist/",
  outputDir: "dist",
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    devtool: process.env.NODE_ENV === "production" ? false : "eval-source-map",
  },
};
