## 爽影院專案介紹

### 大綱

* 執行環境
* 執行步驟
* 指令說明
* 使用套件版本
* 目錄結構

##### 執行環境

* Node.js: 18.17.1
* pnpm: 8.5.0

##### 執行步驟

1. 安裝 node.js
1. 安裝 pnpm
1. 在根目錄安裝所有 workspace dependency
1. 在根目錄 啟動專案(本機開發測試)

    1. 前台專案本機啟動
    1. 後台專案本機啟動

1. 專案打包(對外環境部屬)

    1. 應用程式專案打包
    1. 跨專案函式庫專案打包

##### 指令說明

* 安裝所有 workspace dependency: pnpm install 
* 前台專案本機啟動: pnpm run dev:front 
* 後台專案本機啟動: pnpm run dev:back
* 所有應用程式專案打包: pnpm run build:apps
* 所有跨專案函式庫專打包: pnpm run build:libs

