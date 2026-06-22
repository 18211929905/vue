# [OPEN] dev-server-8080

## Symptom
- `http://localhost:8080/` 当前无法正常运行。

## Hypotheses
- H1: Vue 开发服务器没有成功启动，终端里已有启动时报错。
- H2: `vue.config.js` 中的 `publicPath` 或 `devServer.proxy` 配置影响了开发环境启动或页面访问。
- H3: 页面已返回，但运行时请求或资源加载失败，导致看起来像“不能运行”。
- H4: 本机 `8080` 端口被占用、被代理接管，或访问到了非预期服务。

## Plan
- 检查关键配置文件。
- 启动开发服务器并记录终端输出。
- 检查 `8080` 端口可达性与首页返回。
- 根据证据判断是启动问题、配置问题还是运行时问题。

## Evidence
- `npm run serve` 成功启动，日志显示：`App running at http://localhost:8081/`。
- `Test-NetConnection localhost -Port 8080` 返回 `TcpTestSucceeded: True`，说明 `8080` 已有服务监听。
- `Get-NetTCPConnection -LocalPort 8080 -State Listen` 显示 `OwningProcess = 11356`。
- `Get-Process -Id 11356` 显示该进程是 `node`。

## Hypothesis Status
- H1: 否。开发服务器成功启动。
- H2: 待确认。当前配置可能影响本地首页访问行为，但不是 `8080` 失效的主因。
- H3: 待确认。需要单独判断 `8081` 首页为何返回 `Cannot GET /`。
- H4: 是。`8080` 被其他进程占用，当前项目自动切换到了 `8081`。
