# GitHub Actions 配置说明

当前项目已新增 GitHub Actions 工作流文件：

- `.github/workflows/deploy.yml`

## 工作流作用

当代码推送到 `main` 分支，或手动触发时，会自动执行：

1. 安装依赖
2. 执行 `npm run build`
3. 安装 `coscmd`
4. 将 `dist/` 上传到腾讯云 COS 的 `/dist/` 目录

## 你需要在 GitHub 仓库里配置的 Secrets

进入仓库：

- `Settings`
- `Secrets and variables`
- `Actions`

然后新增以下 4 个 secrets：

- `TENCENT_SECRET_ID`
- `TENCENT_SECRET_KEY`
- `COS_BUCKET_NAME`
- `COS_BUCKET_REGION`

## 你当前项目对应的值

- `COS_BUCKET_REGION`: `ap-shanghai`
- 上传目录: `/dist/`

## 启用后 GitHub 会怎么显示

只要仓库中存在 `.github/workflows/deploy.yml`，GitHub 的 `Actions` 页面就会识别到这条工作流。

- 如果工作流还没跑过，页面会显示工作流名称
- 当你推送到 `main` 后，会自动出现第一条运行记录
- 你也可以在 `Actions` 页面手动点击 `Run workflow`

## 推荐首次验证

1. 先把代码推送到 GitHub
2. 配置 4 个 secrets
3. 打开 `Actions` 页面
4. 手动执行一次 `Run workflow`
5. 确认 COS 中已经出现 `dist/index.html`、`dist/js`、`dist/css`
