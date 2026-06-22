const path = require("path");
const isProduction = process.env.NODE_ENV === "production";

module.exports = {
  publicPath: isProduction
    ? "https://ljkagent-1323772430.cos.ap-shanghai.myqcloud.com/dist/"
    : "/",
  outputDir: "dist",
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
      },
    },
    devtool: process.env.NODE_ENV === "production" ? false : "eval-source-map",
  },
};
