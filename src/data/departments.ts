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
    subtitle: `讀懂生命中的線索 ${demo}`,
    philosophy: `不是預言唯一答案，而是整理選擇與方向 ${demo}`,
    description: `以象徵系統與結構化對談協助梳理提問。以下人物、服務與紀錄皆為視覺示範，不構成任何承諾或建議。${demo}`,
    services: [
      ['divination-01', '年度主題解析', '從象徵脈絡整理年度關注面向與可行行動。', ['年度', '方向']],
      ['divination-02', '關係提問整理', '協助釐清關係中的需求、界線與可選路徑。', ['關係', '對談']],
      ['divination-03', '盧恩符文指引', '以單次提問搭配符文象徵，提供反思切角。', ['盧恩', '反思']],
    ].map(([id, title, description, tags]) => ({ id: id as string, title: `${title} ${demo}`, description: `${description} ${demo}`, tags: tags as string[] })),
    showcases: Array.from({ length: 2 }, (_, index) => ({
      id: `divination-showcase-${index + 1}`,
      title: `命理主題紀錄 ${index + 1} ${demo}`,
      description: `虛構情境的展示卡片，不含真實個案資訊。${demo}`,
      images: ['/images/OG-LOGO.jpg'],
      date: `示範日期 2026.0${index + 1}`,
    })),
    team: Array.from({ length: 2 }, (_, index) => ({
      id: `divination-member-${index + 1}`,
      name: `命理夥伴 ${index + 1} ${demo}`,
      role: `提問整理員 ${demo}`,
      bio: `此人物、經歷與職稱僅供版面展示，不代表真實團隊成員或專業資格。${demo}`,
      specialties: ['符號閱讀', '問題梳理'].map((item) => `${item} ${demo}`),
    })),
    cta: {
      title: `想了解命理部門？${demo}`,
      note: `目前為頁面示意，正式服務與聯絡方式將另行公告。${demo}`,
      buttonText: '回到工作室首頁',
      buttonUrl: '/',
    },
  },
];
