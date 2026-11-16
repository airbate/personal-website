import type { BookItem } from "@/types/content";

/**
 * 在这里添加你看过的书籍！
 * 只需按下面格式新增一条记录，封面图片放到 public/images/books/ 下即可（或直接填网络图片链接）。
 */
export const BOOKS: BookItem[] = [
  {
    id: "eve",
    title: "Eve: How The Female Body Drove 200 Million Years of Human Evolution",
    author: "Cat Bohannon",
    cover: "/images/books/eve.webp",
    category: "Science",
    readYear: "2025",
    rating: 5,
    takeaway:
      "从演化生物学视角重新审视人类演化史中的关键转折，叙事生动且富有洞察。",
    href: "https://www.google.co.uk/books/edition/Eve/PU2lEAAAQBAJ?hl=en&gbpv=0",
  },
  {
    id: "annals",
    title: "Annals of a Former World",
    author: "John McPhee",
    cover: "/images/books/annals.webp",
    category: "Science",
    readYear: "2025",
    rating: 5,
    takeaway:
      "地质学史诗与非虚构写作典范，在亿万年的时间尺度下重新理解地球与人类。",
    href: "https://www.google.co.uk/books/edition/Annals_of_the_Former_World/GS81F0RNxesC?hl=en&gbpv=0",
  },
  {
    id: "newmedia",
    title: "The New Media Reader",
    author: "Nick Montfort and Noah Wardrip-Fruin (ed.)",
    cover: "/images/books/newmedia.webp",
    category: "Technology",
    readYear: "2024",
    rating: 5,
    takeaway:
      "汇集超文本、个人计算与交互媒介先驱的原始文献，理解软件思想史的必读合集。",
    href: "https://www.google.co.uk/books/edition/The_New_Media_Reader/DQYXoRx9CcEC",
  },
  {
    id: "dawn",
    title: "The Dawn of Everything",
    author: "David Graeber",
    cover: "/images/books/dawn.webp",
    category: "History",
    readYear: "2024",
    rating: 5,
    takeaway:
      "打破线性历史观，展现人类早期社会组织形式的多样性与想象力。",
    href: "https://www.google.com/books/edition/The_Dawn_of_Everything/X8gZEAAAQBAJ",
  },
  {
    id: "smallprog",
    title: "A Small Matter of Programming",
    author: "Bonnie Nardi",
    cover: "/images/books/smallprog.webp",
    category: "Technology",
    readYear: "2024",
    rating: 4,
    takeaway:
      "探讨终端用户编程（End-User Programming）的经典之作，对今日 AI 工具设计仍有启发。",
    href: "https://www.google.com/books/edition/A_Small_Matter_of_Programming/0drDRT370eoC",
  },
  {
    id: "dancing-skeletons",
    title: "Dancing Skeletons",
    author: "Katherine Dettwyler",
    cover: "/images/books/dancing-skeletons.webp",
    category: "Anthropology",
    readYear: "2023",
    rating: 4,
    takeaway:
      "田野调查的真实记录，展示了跨文化理解与人类学实地研究的温度与挑战。",
    href: "https://www.google.co.uk/books/edition/Dancing_Skeletons/cQVhAQAAQBAJ?hl=en&gbpv=0",
  },
  {
    id: "ethnography9",
    title: "Ethnography #9",
    author: "Alan Klima",
    cover: "/images/books/ethnography9.webp",
    category: "Anthropology",
    readYear: "2023",
    rating: 4,
    takeaway:
      "实验性的民族志写作方式，融合叙述、图像与哲学思考。",
    href: "https://www.google.co.uk/books/edition/Ethnography_9/sz6-DwAAQBAJ?hl=en&gbpv=0",
  },
  {
    id: "blockchainchicken",
    title: "Blockchain Chicken Farm",
    author: "Xiaowei Wang",
    cover: "/images/books/blockchainchicken.webp",
    category: "Technology",
    readYear: "2023",
    rating: 4,
    takeaway:
      "记录科技下乡与日常生活的交汇，视角独特且接地气。",
    href: "https://www.google.co.uk/books/edition/Blockchain_Chicken_Farm/sCPQDwAAQBAJ?hl=en&gbpv=0",
  },
];

export const BOOK_CATEGORIES = [
  "All",
  ...Array.from(new Set(BOOKS.map((b) => b.category))),
];
