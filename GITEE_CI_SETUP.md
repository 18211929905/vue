# Gitee CI 配置说明

当前项目已新增 `Gitee Go` 流水线配置文件：

- `.workflow/vue2-cos-deploy.yml`

## 流水线做了什么

推送到 `master` 或 `main` 分支时会自动执行：

1. `npm ci`
2. `npm run build`
3. 安装 `coscmd`
4. 将 `dist/` 上传到腾讯云 COS 的 `/dist/` 目录
5. 把本次构建后的 `dist/` 同步为 Gitee 制品，便于排查问题

## 你需要在 Gitee Go 里配置的参数

建议在仓库的流水线参数或全局参数中配置以下变量：

- `COS_SECRET_ID`
- `COS_SECRET_KEY`
- `COS_BUCKET_NAME`
- `COS_BUCKET_REGION`

## 对应你的腾讯云信息

- `COS_BUCKET_REGION`: `ap-shanghai`
- 上传目标目录: `/dist/`

## 注意事项

- 当前 `vue.config.js` 的 `publicPath` 已配置为带 `/dist/` 的 COS 前缀
- 所以流水线也必须把构建结果上传到桶里的 `/dist/`
- 如果你的默认发布分支不是 `master` 或 `main`，需要修改 yml 里的触发分支

## 推荐首次验证

1. 先在 Gitee Go 中开通流水线
2. 导入或选择 `.workflow/vue2-cos-deploy.yml`
3. 配置上面的 4 个参数
4. 手动执行一次流水线
5. 确认 COS 中已经出现 `dist/js`、`dist/css`、`dist/index.html`
