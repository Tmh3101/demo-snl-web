import type { TimelineEvent } from "../components";

// Product Data
export const productData = {
  productCode: "SNL-2025-ABCD",
  blockchainHash: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
  age: 10,
  heroImageUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCwYmypKBP9JrhbVe4mZnFbacOhKECWvP7V0t1LW5WpPJqZkG0g5Vl6dmQ0fZ_YeGA8uebRFYDMIXH0TsaF7FPjU4WYUdjkp0efz9idnz6xvSuV_wajl8lmU94aUmRlwDkj8zdXwW9k709NPA6g2UahzHPlzAoodpXh-9L4dD8II5Y5mOgteXyuGC-gTT-fAV1rHU-_vyq-xiptyP0IaqwqHRm3k9Kjzctgn33Kj8785fnCh9bgBWVvl70MyeTa0IIapKz5pHGlbX0",
};

// Timeline Events
export const timelineEvents: TimelineEvent[] = [
  {
    year: 2015,
    title: "Gieo hạt từ Cây mẹ A01",
    description:
      "Những hạt giống tinh khiết nhất được tuyển lựa từ cây mẹ đầu dòng A01 trên đỉnh Ngọc Linh hùng vĩ.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAfuqiMepliHpaHxuOZ3VkCmZAh8F7nSiPYUChg7lDTMZH3WOwmTA2bJCoydtCQvM83QXa2hwOnpX1snmyKHtFn1fRl8rnbMm2mdY7ebDpRSt-jNFxeSdbAs0w4RDnV7nr68GKlVpZ50L-KqvHJgGHCvGHGt-7qoRpwXL0FfC9xv9Qm42FeKQtHOZkgJSxUPr6R2CEpw3MpQmqM2lyaPDE8OpLI3nu9ZmhXAGt53RS6gN6Q9Z6lFGvKpoypyaud3KSCtX2W5OC9f40",
    position: "left",
    actions: [
      { icon: "water_drop", label: "Tưới nước" },
      { icon: "agriculture", label: "Làm cỏ" },
      { icon: "bug_report", label: "Sâu bệnh", variant: "warning" },
    ],
    activities: [
      {
        date: "15/03/2015",
        time: "06:30",
        action: "Làm cỏ",
        type: "agriculture"
      },
      {
        date: "22/03/2015",
        time: "07:00",
        action: "Tưới nước",
        type: "water"
      },
      {
        date: "10/04/2015",
        time: "08:15",
        action: "Làm cỏ",
        type: "agriculture"
      },
      {
        date: "25/05/2015",
        time: "09:00",
        action: "Sâu bệnh",
        type: "bug"
      },
      {
        date: "15/07/2015",
        time: "07:30",
        action: "Làm cỏ",
        type: "agriculture"
      },
    ]
  },
  {
    year: 2020,
    title: "Chuyển vùng trồng Lô 5",
    description:
      "Sau 5 năm, cây được chuyển sang vùng đất mới giàu mùn tại Lô 5 để thúc đẩy quá trình tích tụ Saponin tối ưu.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAZs4KuzI8PFUm7QWSTKski8whZdLD6B1iO-DOeBMvzEFxOcW-kDYtcYr55ANGzLzxSQQTXRdr7I3YseRZEkag5rFvtnUj8ZftYfXf-iqoQIzQVW_MoDokYlJjdzGC12Gvgx2adQ3Nh0Bw7kr2jxiUDPUs2Ea-k7php5_0Z9WTU9x0y-ccSIGVkbyA2cHc4KHrYixZHR4-kEfapPfM7-TrCsEmQKBIgaEDk4QLcOh8dj1zPVrNxiXco2J9LzSgoCjpNSsmGFKQA4AI",
    position: "right",
    actions: [
      { icon: "water_drop", label: "Tưới nước" },
      { icon: "eco", label: "Phủ mùn" },
      { icon: "bug_report", label: "Kiểm soát", variant: "warning" },
    ],
    activities: [
      {
        date: "05/03/2020",
        time: "05:00",
        action: "Làm cỏ",
        type: "agriculture"
      },
      {
        date: "12/03/2020",
        time: "06:00",
        action: "Làm cỏ",
        type: "agriculture"
      },
      {
        date: "20/04/2020",
        time: "07:15",
        action: "Tưới nước",
        type: "water"
      },
      {
        date: "10/06/2020",
        time: "08:00",
        action: "Làm cỏ",
        type: "agriculture"
      },
      {
        date: "15/09/2020",
        time: "09:30",
        action: "Sâu bệnh",
        type: "bug"
      }
    ]
  },
  {
    year: 2025,
    title: "Thu hoạch",
    description:
      "Khoảnh khắc vàng sau một thập kỷ. Củ sâm được nhổ thủ công, vệ sinh và cân đo trọng lượng nghiêm ngặt tại hiện trường.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC8GQagvd9vPrXGiPjfaf43sjg_sdPQ1haeDyxM2uaOYdplnb3_iLwtdjsEEf3RsjeOoRm_dcUNtWq321RiBDIeEmZG33i54NMbbK5YbYFxwJzUFp3x2Wkx75Gf5eqfJHKfpHm5QRm9KodEUjQ7poIohqkOAIMnNvCf0_CCbP92BUd7sN6ZCdpZcN8Rzq5B1TY9XnP6-TiZK0cfmzxKvsO32GKJF31rXPV194hevtBYn-E0BMiaP0T4VkHpEDwHGGxNYgne5mDF4-k",
    position: "left",
    actions: [
      { icon: "scale", label: "Định lượng" },
      { icon: "qr_code_2", label: "Mã hóa" },
    ],
    activities: [
      {
        date: "15/01/2025",
        time: "06:00",
        action: "Làm cỏ",
        type: "agriculture"
      },
      {
        date: "15/01/2025",
        time: "10:00",
        action: "Tưới nước",
        type: "water"
      },
      {
        date: "15/01/2025",
        time: "14:00",
        action: "Làm cỏ",
        type: "agriculture"
      },
      {
        date: "16/01/2025",
        time: "09:00",
        action: "Làm cỏ",
        type: "agriculture"
      },
      {
        date: "17/01/2025",
        time: "08:00",
        action: "Sâu bệnh",
        type: "bug"
      }
    ]
  },
];

// Verification Data
export const verificationData = {
  species: {
    scientific: "Panax vietnamensis",
    author: "Ha et Grushv.",
  },
  molecularMarker: {
    name: "ITS-rDNA",
    description: "Trình tự gen đặc trưng xác thực nguồn gốc thuần chủng",
  },
  purity: 100,
  compounds: [
    { name: "Majonoside-R2 (MR2)", percentage: 4.5 },
    { name: "Ginsenoside Rg1", percentage: 3.2 },
    { name: "Ginsenoside Rb1", percentage: 2.8 },
  ],
  imageUrl: "/images/gensing.png",
  backgroundUrl: "/images/background-gensing.jpg",
  certifications: [
    { icon: "science", label: "Tiêu chuẩn GACP-WHO" },
    { icon: "biotech", label: "Định danh Viện Dược Liệu" },
    { icon: "security", label: "Lưu trữ DNA Kỹ thuật số" },
  ],
};

// Artisan Data
export const artisanData = {
  name: "Nguyễn Văn A",
  imageUrl:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB_zTcFqfB_BJIcjkZQuwvcuF47hAjTY8fGqaBO1V2Efzw4mJu5F2pAiZdcwNRD34wznf50Ryae5KMBQNJYrpgIfjOsU95kqNmflQFqjIE5EYUeU1tayLuEBIEdGviHaDDxzyTTxdR9BpUR4z2LmqeKTRI1qIAYnC3HZod7jIB3FwbYjrW16qmgFtJTjM1cnNO5ExbIW1xa0fxVcv8iAYUz9dB3u8_8X_FETt6TP-j-LL19fyL0ATIP9qMBeZ20BlIiQn5zhfXQBOs",
  areas: ["Lô số 3", "Lô số 5", "Lô số 7"],
  region: "Đỉnh Ngọc Linh",
};

// Distributor Data
export const distributorData = {
  name: "Trung Sơn Pharma",
  description:
    "Đơn vị ủy quyền chính thức kinh doanh Sâm Ngọc Linh đạt tiêu chuẩn GACP-WHO.",
};
