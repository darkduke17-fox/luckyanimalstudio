# 吉祥物工作室 (Lucky Animal Studio)

這是一個採用中古奇幻羊皮紙風格的 Astro Bento Grid 網站，提供吉祥物工作室的服務介紹、社群聯絡管道與盧恩符文索引。

## 網站功能
- **服務與社群導覽**：首頁採用 Bento Grid 佈局，展示工作室服務與 LINE/IG/FB 聯絡管道。
- **盧恩符文索引**：收錄 24 枚古弗薩克盧恩與空白符文的象徵意義與詳細介紹。
- **社群分享優化**：完整支援 Open Graph 與 Twitter Meta 標籤，便於在 LINE/FB 分享時呈現自訂縮圖。

## 內容維護

### 1. 編輯首頁卡片
修改 `src/data/cards.json` 來調整首頁字卡：
- `section`: 可設定為 `"services"`（置頂服務卡片）或 `"messaging"`（下方社群卡片）。
- `size`: 可設定為 `"full"`（全寬）或 `"half"`（半寬）。
- `order`: 數字越小排序越前面。
- `content.iconName`: 可設定為 `"instagram"`、`"facebook"` 或 `"line"`。

### 2. 編輯盧恩符文資料
修改 `src/data/runes.json` 可更新各別符文的名稱、符號與象徵意義。

### 3. 資料型別定義
卡片與符文的資料型別統一定義於 `src/data/schema.ts`。

## 本機開發與部署

### 安裝依賴
```sh
npm install
```

### 啟動開發伺服器
```sh
npm run dev
```

### 正式建置（打包）
```sh
npm run build
```

### 預覽建置成品
```sh
npm run preview
```
