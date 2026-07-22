# 中古奇幻羊皮紙風格 Bento Grid 網站 — 系統實作規格說明書

本文件為本專案的唯一架構與實作規範。後續由 **Codex** 進行程式碼實作、**Lead Architect (我)** 進行 QA 驗收時，皆以此文件定義之標準為唯一依據。

---

## 1. 專案概述 (Project Overview)

本專案旨在建置一個以**手機閱讀為主**、採用 **Bento Grid 網格佈局** 的單頁式（Single Page）網站。整體視覺以**中古奇幻羊皮紙風格**為主軸，要求畫面質感乾淨、高易讀性，同時保有奇幻氛圍。
此外，專案整併了原本獨立的 **RUNE 盧恩符文網頁**，將其移植為 Astro 的多頁面靜態路由（MPA），並將樣式重構為與首頁一致的中古羊皮紙古風。

---

## 2. 技術限制與規範 (Technical Constraints)

實作時必須嚴格遵守以下限制，除非設計師/架構師明確同意：

1. **核心框架**：使用 **Astro** 進行開發。
2. **元件與語意**：
   - 優先使用 Astro Component（`.astro` 檔案）與原生 HTML5 語意化標籤。
   - 保持良好的可及性 (Accessibility, e.g. 圖片的 `alt` 屬性、合適的 `aria` 標籤)。
   - 清晰的 TypeScript 型別定義，**嚴禁濫用 `any`**。
3. **樣式與版面 (CSS)**：
   - **僅使用原生 CSS** (CSS Grid, Flexbox, Media Query)。
   - 採用 **Mobile First** (行動優先) 的響應式設計。
   - **嚴禁**引入 React、Vue、Svelte 等前端 UI 框架。
   - **嚴禁**引入 TailwindCSS、Bootstrap 或其他 CSS 框架/預處理器。RUNE 網頁移植時，必須將原先的 Tailwind 類別全數重構為原生 CSS。
4. **架構原則**：
   - 實行**資料、頁面、版面與元件分離**（資料驱动 Data-Driven）。
   - 元件保持通用性，不可寫死特定資料；由 Page 負責取得資料並傳入元件。
   - 僅在絕對必要時加入最少量的客戶端 JavaScript，優先保持靜態輸出。
5. **專案結構規範**：
   - 專案資料夾必須以結構化的方式存放檔案，例如：
     - `images/` 存放圖片。
     - `styles/` 存放 CSS、SCSS 檔案。
     - `js/` 存放 JavaScript 檔案。

---

## 3. 專案目錄結構 (Directory Structure)

專案結構規劃如下，所有開發與檔案存放需在此架構下進行：

```text
luckyanimalstudio/
├── doc/
│   └── system_spec.md                  # 本系統實作規格說明書（本檔案）
├── public/
│   ├── images/
│   │   ├── textures/
│   │   │   └── parchment-tile.webp     # 羊皮紙紋理底圖 (輕微紙張質地)
│   │   ├── logo.png                    # 客戶 Logo 圖片
│   │   └── runes/                      # 所有盧恩符文圖片存放處 (檔名如 fehu.png)
│   │       ├── fehu.png
│   │       ├── uruz.png
│   │       └── ... (共 25 張圖片)
│   └── js/                             # 存放必要之客戶端外部 JS 檔案
├── src/
│   ├── components/                     # 卡片與網格元件
│   │   ├── BentoContainer.astro        # Bento Grid 網格容器
│   │   ├── ImageLinkCard.astro         # 1. 單圖卡 / 連結卡 (支援 SVG Icon 與普通圖片)
│   │   ├── icons/                      # 【重要】Astro SVG 向量圖標元件庫
│   │   │   ├── Instagram.astro
│   │   │   ├── Facebook.astro
│   │   │   └── Line.astro
│   │   └── ... (其他基礎卡片暫存於目錄中，保留擴充性)
│   ├── data/                           # 集中管理資料
│   │   ├── cards.json                  # 首頁卡片配置與文字內容
│   │   └── runes.json                  # 25 個盧恩符文基本資料
│   ├── layouts/
│   │   └── Layout.astro                # 羊皮紙風格頁面基礎版型
│   ├── pages/
│   │   ├── index.astro                 # 單頁式首頁
│   │   └── runes/                      # 盧恩符文路由
│   │       ├── index.astro             # 盧恩符文索引頁
│   │       └── [id].astro              # 盧恩符文詳情頁 (動態路由)
│   └── styles/                         # 樣式資料夾
│       └── global.css                  # 全域 CSS 變數、Reset、首頁與 RUNE 原生樣式
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

---

## 4. 首頁架構與排版規範 (Homepage Structure)

首頁內容精簡為以下結構，並確保嚴格的排列順序：

1. **Header (.site-header)**：
   - **文字精簡化**：僅包含小標 `Lucky Animal Studio` 與大標 `歡迎來到吉祥物工作室`。
   - 移除原有的「讓古老智慧陪你找到前行的方向」說明文字與「預約諮詢」按鈕。
   - **Logo 視覺優化**：圖片來源為 `/images/logo.png`。長寬比強制設為正圓（`aspect-ratio: 1`，寬高固定為 `80px`），並且背景加入羊皮紙色（`background-color: var(--color-parchment-base)`）作為底框，使去背的藍色線條 logo 能極致清晰且突出。
   - **排版置中與水平對齊**：Logo 與右側的兩行標題在垂直方向上 100% 置中對齊，整體 Header 區塊在首頁頂端呈置中、和諧且對稱的古風佈局。
2. **工作室傳訊分隔線 (.guild-section-divider)**：
   - 文字為「工作室傳訊」之復古金屬/墨水分隔線。
3. **四張單圖連結卡 (ImageLinkCard)**：
   - 皆為半版 (`span 1`) 卡片，以 2x2 網格排列。
   - 卡片內部不渲染 `<img>`，而是讀取 **Astro Inline SVG 元件**（依據 `iconName` 的值渲染對應的向量圖標）。
   - 圖標線條設定為 `currentColor`，其顏色完全由 CSS 統一控制為古風深棕色。
4. **盧恩符文索引卡 (ImageLinkCard)**：
   - 為滿版 (`span 2`) 入口卡片，連結至 `/runes`。
   - 不顯示 `.ribbon` 緞帶，文字加大。
5. **Footer (.site-footer)**：
   - 除了原有的守護祝福語，最下方需清楚加入 `Designed & Built by AzureBear`。

---

## 5. 資料架構與 Schema 設計 (Data Schema)

### 5.1 首頁卡片配置 (`src/data/cards.json`)
```json
[
  {
    "id": "link-instagram",
    "type": "image-link",
    "size": "half",
    "order": 1,
    "content": {
      "title": "Instagram",
      "iconName": "instagram",
      "linkUrl": "https://www.instagram.com/luckyanimalstudio"
    }
  },
  {
    "id": "link-facebook",
    "type": "image-link",
    "size": "half",
    "order": 2,
    "content": {
      "title": "Facebook",
      "iconName": "facebook",
      "linkUrl": "https://www.facebook.com/share/19y6y92ej3/"
    }
  },
  {
    "id": "link-line-mascot",
    "type": "image-link",
    "size": "half",
    "order": 3,
    "content": {
      "title": "吉祥物賴服務台",
      "iconName": "line",
      "linkUrl": "https://lin.ee/1YFVcKM"
    }
  },
  {
    "id": "link-line-fortune",
    "type": "image-link",
    "size": "half",
    "order": 4,
    "content": {
      "title": "麥奇思老師的命理諮服務台",
      "iconName": "line",
      "linkUrl": "https://lin.ee/FQU8goC"
    }
  },
  {
    "id": "link-card-runes",
    "type": "image-link",
    "size": "full",
    "order": 5,
    "content": {
      "title": "盧恩符文索引",
      "imageUrl": "/images/supplies.jpg",
      "linkUrl": "/runes",
      "showRibbon": false
    }
  }
]
```

### 5.2 TypeScript 介面定義 (`src/data/schema.ts`)
```typescript
export interface ImageLinkCardData extends BaseCard {
  type: 'image-link';
  content: {
    title: string;
    imageUrl?: string;
    iconName?: 'instagram' | 'facebook' | 'line';
    linkUrl: string;
    showRibbon?: boolean;
    ribbonText?: string;
  };
}
```

---

## 6. CSS 樣式微調規範 (`src/styles/global.css`)

### 6.1 Header 視覺優化
- **`.site-header`**：
  - 設定為 `display: grid; grid-template-columns: 80px minmax(0, 1fr); align-items: center; gap: 20px; justify-content: center;`，確保圓形 Logo 與右側文字在垂直方向完全置中對齊。
- **`.site-logo`**：
  - 強制設定長寬比正圓：`width: 80px; height: 80px; aspect-ratio: 1; border-radius: 50%;`。
  - 背景加入古典底色：`background-color: var(--color-parchment-base);`（羊皮紙淡色）。
  - 外框使用金屬銅色與墨水框線的雙層邊框裝飾。
- **`.site-welcome`**：
  - 排版設為 `display: flex; flex-direction: column; justify-content: center;`，將兩行文字垂直置中，並移除多餘的 margin。

### 6.2 社群向量圖標樣式
- **圖標元件** (`.image-link-icon`)：
  - 寬高統一設為 `42px`。
  - 預設顏色設為墨水深棕色 `color: var(--color-text-primary)`。
  - 在卡片 hover 時，圖標的顏色轉變為更深的墨水黑色（如 `#1a100a`），並且有微幅縮放（如 `transform: scale(1.08)`）與過渡效果。

### 6.3 網格排版調整
- 半版社群卡片（`.half-span.image-link-card`）設為彈性垂直置中排版，將 SVG Icon 置於上方，文字置於下方，具有適當的 gap 與內邊距。
