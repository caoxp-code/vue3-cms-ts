# vue3-cms-ts
CMS平台

## 平台依赖

node >= 16

## vscode 所需插件

## 用法

### 提交代码

通过使用 husky 配置 git 钩子，并通过 commitlint 规范化 git commit 的消息格式。其中的配置信息在 commitlint.config.js 中。提交信息结构类似

```
type(scope?): subject
body?
footer?
比如：
git commit -m "fix(login): 修改登录bug"
```

其中 type-enum 类型为 type|说明 ---|---: feat|新增功能 fix|修改 bug perf|优化相关，比如提升性能、体验 ci|持续集成 docs|文档修改 style|代码格式修改，不是 css 修改 test|测试用例修改 refactor|回滚到上一个版本 build|编译相关的修改，例如发布版本、项目构建、依赖改动 chore|其他修改，比如修改构建流程

## 问题

#### mac 中，sourcetree 提交时，husky 报错 yarn: command not found

是由于在 sourcetree 中找不到 yarn 命令，可以创建~/.huskyrc 文件，写入 which yarn 的地址 ··· export PATH="which yarn:$PATH" ···

