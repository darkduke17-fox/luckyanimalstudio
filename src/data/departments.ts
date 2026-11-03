import type { DepartmentData } from './schema';

const demo = '（示範假資料）';

export const departments: DepartmentData[] = [
  {
    id: 'healing',
    name: '療育部門',
    subtitle: `與身心重新連線 ${demo}`,
    philosophy: `讓每一次停留，都成為聽見自己的練習 ${demo}`,
    description: `以自然素材、靜心儀式與溫柔陪伴，設計能安心探索內在的體驗。以下內容皆為版面展示用途，並非正式療程或專業聲明。${demo}`,
    services: [
      ['healing-01', '晶石靜心小聚', '透過呼吸、書寫與晶石觀察，練習安定當下。', ['靜心', '小班']],
      ['healing-02', '森林感官散步', '在安全路線中練習放慢腳步，重新覺察五感。', ['戶外', '覺察']],
      ['healing-03', '聲音放鬆時光', '以柔和聲響營造休息空間，陪伴身心沉澱。', ['聲音', '放鬆']],
      ['healing-04', '香氣記憶書寫', '從氣味聯想出發，記錄感受與生活片段。', ['香氣', '書寫']],
      ['healing-05', '手作護身小物', '運用天然素材完成一件具有個人寓意的小作品。', ['手作', '自然素材']],
      ['healing-06', '季節祝福儀式', '依季節主題設計團體儀式，為生活建立溫柔節點。', ['季節', '團體']],
    ].map(([id, title, description, tags]) => ({ id: id as string, title: `${title} ${demo}`, description: `${description} ${demo}`, tags: tags as string[] })),
    showcases: Array.from({ length: 8 }, (_, index) => ({
      id: `healing-showcase-${index + 1}`,
      title: `療育活動紀錄 ${String(index + 1).padStart(2, '0')} ${demo}`,
      description: `呈現活動氣氛與流程的版面示意，人物與情境皆非真實案例。${demo}`,
      images: ['/images/supplies.jpg'],
      date: `示範日期 2026.${String(index + 1).padStart(2, '0')}`,
    })),
    team: Array.from({ length: 5 }, (_, index) => ({
      id: `healing-member-${index + 1}`,
      name: `療育夥伴 ${index + 1} ${demo}`,
      role: `體驗引導員 ${demo}`,
      bio: `此人物、經歷與職稱僅供版面展示，不代表真實團隊成員或專業資格。${demo}`,
      specialties: ['安心陪伴', '活動設計'].map((item) => `${item} ${demo}`),
    })),
    cta: {
      title: `想了解療育部門？${demo}`,
      note: `目前為頁面示意，正式服務與聯絡方式將另行公告。${demo}`,
      buttonText: '回到工作室首頁',
      buttonUrl: '/',
    },
  },
  {
    id: 'divination',
    name: '命理部門',
    consultationGuide: {
      "brandTitle": "麥奇思命理",
      "title": "諮詢服務項目與預約指南",
      "introduction": "感謝您信任並預約諮詢。為了讓大家在預約前能快速了解服務內容與流程，特此整理以下資訊。若有任何不確定的地方，歡迎隨時與我聯繫討論！",
      "servicesTitle": "一、 服務項目與價目表",
      "services": [
        {
          "title": "【深度解析】塔羅牌 ＆ 占星術（採計時制）",
          "description": "適合想釐清現況、尋找方向、看清感情發展或人生抉擇的朋友。",
          "details": [
            "費　　用：$700 / 30分鐘（未滿 30 分鐘以 30 分鐘計算）",
            "超時計價：$20 / 分鐘（例如：總計 35 分鐘為 $800）"
          ],
          "preparation": {
            "title": "準備與注意事項：",
            "items": [
              "視諮詢狀況會搭配個人命盤綜合研判（亦可看關係合婚、長久發展）。",
              "看占星命盤：需提供「準確出生年月日、時間、出生地」（若已長期旅居國外滿一年以上，請提供目前居住地）。",
              "看合婚／長久發展：需提供「雙方」的準確出生年月日與出生地。",
              "貼心提醒：若以上資訊不確定也沒關係，我們可以直接使用「塔羅牌＋卜卦星盤」進行諮詢，請安心！"
            ]
          }
        },
        {
          "title": "【能量調整】障礙清理 ＆ 靈擺成願",
          "description": "適合想調整個人狀態、排除內在阻礙、推進心願實現的朋友。",
          "details": [
            "費　　用：$3,000 / 約 90 分鐘",
            "調整項目：可任選 2 種 調整項目。",
            "注意事項：靈擺調整時需待在安靜室內，避免外界能量干擾。"
          ]
        },
        {
          "title": "【全方位導航】塔羅占星 ＋ 靈擺清理（熱門綜合版）",
          "description": "兼顧「心理迷惘釐清」與「能量狀態調整」的完備方案。",
          "details": [
            "費　　用：$3,000 / 約 90 分鐘",
            "時間分配：占卜諮詢 40 分鐘 ＋ 靈擺調整 50 分鐘。",
            "調整項目：可做 1 種 調整項目（例如：感情關係增進、狀態修復等）。"
          ]
        }
      ],
      "hoursTitle": "二、 營業時間與付款方式",
      "hours": [
        "營業時間：下午 1:30 ～ 晚間 11:00",
        "付款方式：銀行轉帳、Line Pay Money 或 iPass Money"
      ],
      "bookingTitle": "三、 預約與退費規則",
      "bookingIntroduction": "為了保障雙方時間與服務品質，預約前請詳閱以下說明：",
      "bookingRules": [
        "初次預約流程：採「先匯款才排時間」制，款項確認無誤後，即完成預約排程。",
        "遲到與缺席處理：若遇「遲到未到」等狀況，為維護公平性，恕無法補時或退費。",
        "取消與改期規範：如需取消或更改時間，請務必於「三天前」提前告知。",
        "退費手續費：因故需辦理取消退費者，將酌收 $15 匯款手續費。"
      ]
    },
  },
];
