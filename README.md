## 爽影院專案介紹

### 大綱

* 執行環境
* 執行步驟
* 指令說明
* 使用套件版本
* 目錄結構

##### 執行環境

* Node.js: 24.14.0
* pnpm: 11.18.0

版本已透過 `package.json` 的 `volta` 欄位鎖定，使用 [Volta](https://volta.sh) 時會自動切換至對應版本。

注意：Volta 對 pnpm 的支援仍在 feature flag 後，需在 shell 設定檔加上以下環境變數，pnpm 的版本鎖定才會生效（未設定時會沿用全域版本，並被 `engine-strict` 擋下）：

```bash
export VOLTA_FEATURE_PNPM=1
```

未使用 Volta 者，Node 版本可透過 `.nvmrc` 搭配 nvm/fnm 切換，pnpm 則可用 `corepack enable` 依 `packageManager` 欄位自動切版。

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
* 全部打包(函式庫先於應用程式): pnpm run build
* 所有應用程式專案打包: pnpm run build:apps
* 所有跨專案函式庫專打包: pnpm run build:libs
* 僅打包前台(含其依賴的函式庫): pnpm run build:front
* 僅打包後台(含其依賴的函式庫): pnpm run build:back

`build` 為 CI 使用的全量建置，以 `./libs/*` 與 `./apps/*` 兩個 filter 的聯集選取
所有套件；pnpm 對多套件的 `run` 預設依拓樸順序執行，故函式庫必定先於應用程式建置。

`build:front` 與 `build:back` 對應 Render 上兩個獨立 service 的建置指令，
其 filter 使用 `{./apps/xxx}...` 形式連帶建置 workspace 依賴。大括號不可省略 ——
路徑形式若直接接 `...`，該符號會被當成路徑的一部分，導致函式庫靜默不被建置。

