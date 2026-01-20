import type { TimelineEvent } from "../components";

// Product Status Types
export type ProductStatus = "seeded" | "growing" | "mature" | "harvested";

export interface Product {
    productCode: string;
    blockchainHash: string;
    age: number;
    status: ProductStatus;
    heroImageUrl: string;
    timelineEvents: TimelineEvent[];
    verificationData: {
        species: { scientific: string; author: string };
        molecularMarker: { name: string; description: string };
        purity: number;
        compounds: { name: string; percentage: number }[];
        imageUrl: string;
        backgroundUrl: string;
        certifications: { icon: string; label: string }[];
    };
    artisanData: {
        name: string;
        imageUrl: string;
        areas: string[];
        region: string;
    };
    distributorData: {
        name: string;
        description: string;
    };
}

// Status Labels for display
export const statusLabels: Record<ProductStatus, string> = {
    seeded: "Mới gieo hạt",
    growing: "Đang phát triển",
    mature: "Đang trưởng thành",
    harvested: "Đã thu hoạch",
};

export const statusColors: Record<ProductStatus, string> = {
    seeded: "bg-emerald-500",
    growing: "bg-sky-500",
    mature: "bg-amber-500",
    harvested: "bg-primary",
};

// Shared verification data
const sharedVerificationData = {
    species: { scientific: "Panax vietnamensis", author: "Ha et Grushv." },
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

// Shared artisan data
const sharedArtisanData = {
    name: "Nguyễn Văn A",
    imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB_zTcFqfB_BJIcjkZQuwvcuF47hAjTY8fGqaBO1V2Efzw4mJu5F2pAiZdcwNRD34wznf50Ryae5KMBQNJYrpgIfjOsU95kqNmflQFqjIE5EYUeU1tayLuEBIEdGviHaDDxzyTTxdR9BpUR4z2LmqeKTRI1qIAYnC3HZod7jIB3FwbYjrW16qmgFtJTjM1cnNO5ExbIW1xa0fxVcv8iAYUz9dB3u8_8X_FETt6TP-j-LL19fyL0ATIP9qMBeZ20BlIiQn5zhfXQBOs",
    areas: ["Lô số 3", "Lô số 5", "Lô số 7"],
    region: "Đỉnh Ngọc Linh",
};

const sharedDistributorData = {
    name: "Trung Sơn Pharma",
    description:
        "Đơn vị ủy quyền chính thức kinh doanh Sâm Ngọc Linh đạt tiêu chuẩn GACP-WHO.",
};

// ============ PRODUCT 1: Harvested (10 years) ============
const product1: Product = {
    productCode: "SNL-2025-ABCD",
    blockchainHash: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
    age: 10,
    status: "harvested",
    heroImageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCwYmypKBP9JrhbVe4mZnFbacOhKECWvP7V0t1LW5WpPJqZkG0g5Vl6dmQ0fZ_YeGA8uebRFYDMIXH0TsaF7FPjU4WYUdjkp0efz9idnz6xvSuV_wajl8lmU94aUmRlwDkj8zdXwW9k709NPA6g2UahzHPlzAoodpXh-9L4dD8II5Y5mOgteXyuGC-gTT-fAV1rHU-_vyq-xiptyP0IaqwqHRm3k9Kjzctgn33Kj8785fnCh9bgBWVvl70MyeTa0IIapKz5pHGlbX0",
    timelineEvents: [
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
                { date: "01/03/2015", time: "06:00", action: "Gieo hạt", type: "agriculture" },
                { date: "15/03/2015", time: "06:30", action: "Làm cỏ", type: "agriculture" },
                { date: "22/03/2015", time: "07:00", action: "Tưới nước", type: "water" },
                { date: "10/04/2015", time: "08:15", action: "Làm cỏ", type: "agriculture" },
                { date: "25/05/2015", time: "09:00", action: "Sâu bệnh", type: "bug" },
            ],
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
                { icon: "agriculture", label: "Làm cỏ" },
                { icon: "bug_report", label: "Sâu bệnh", variant: "warning" },
            ],
            activities: [
                { date: "05/03/2020", time: "05:00", action: "Làm cỏ", type: "agriculture" },
                { date: "12/03/2020", time: "06:00", action: "Làm cỏ", type: "agriculture" },
                { date: "20/04/2020", time: "07:15", action: "Tưới nước", type: "water" },
            ],
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
                { icon: "water_drop", label: "Tưới nước" },
                { icon: "agriculture", label: "Làm cỏ" },
                { icon: "bug_report", label: "Sâu bệnh", variant: "warning" },
            ],
            activities: [
                { date: "15/01/2025", time: "06:00", action: "Tưới nước", type: "water" },
                { date: "15/01/2025", time: "10:00", action: "Làm cỏ", type: "agriculture" },
            ],
        },
    ],
    verificationData: sharedVerificationData,
    artisanData: sharedArtisanData,
    distributorData: sharedDistributorData,
};

// ============ PRODUCT 2: Mature (7 years) ============
const product2: Product = {
    productCode: "SNL-2025-EFGH",
    blockchainHash: "0x89F3456BC2cd67e123abcD852E9401C3f7e1254A",
    age: 7,
    status: "mature",
    heroImageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCwYmypKBP9JrhbVe4mZnFbacOhKECWvP7V0t1LW5WpPJqZkG0g5Vl6dmQ0fZ_YeGA8uebRFYDMIXH0TsaF7FPjU4WYUdjkp0efz9idnz6xvSuV_wajl8lmU94aUmRlwDkj8zdXwW9k709NPA6g2UahzHPlzAoodpXh-9L4dD8II5Y5mOgteXyuGC-gTT-fAV1rHU-_vyq-xiptyP0IaqwqHRm3k9Kjzctgn33Kj8785fnCh9bgBWVvl70MyeTa0IIapKz5pHGlbX0",
    timelineEvents: [
        {
            year: 2018,
            title: "Gieo hạt từ Cây mẹ B02",
            description:
                "Hạt giống được tuyển chọn từ cây mẹ B02 có chất lượng cao, gieo trồng tại vùng đất phì nhiêu.",
            imageUrl:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAfuqiMepliHpaHxuOZ3VkCmZAh8F7nSiPYUChg7lDTMZH3WOwmTA2bJCoydtCQvM83QXa2hwOnpX1snmyKHtFn1fRl8rnbMm2mdY7ebDpRSt-jNFxeSdbAs0w4RDnV7nr68GKlVpZ50L-KqvHJgGHCvGHGt-7qoRpwXL0FfC9xv9Qm42FeKQtHOZkgJSxUPr6R2CEpw3MpQmqM2lyaPDE8OpLI3nu9ZmhXAGt53RS6gN6Q9Z6lFGvKpoypyaud3KSCtX2W5OC9f40",
            position: "left",
            actions: [
                { icon: "water_drop", label: "Tưới nước" },
                { icon: "agriculture", label: "Làm cỏ" },
                { icon: "bug_report", label: "Sâu bệnh", variant: "warning" },
            ],
            activities: [
                { date: "10/02/2018", time: "07:00", action: "Gieo hạt", type: "agriculture" },
                { date: "15/03/2018", time: "06:30", action: "Tưới nước", type: "water" },
                { date: "20/04/2018", time: "08:00", action: "Làm cỏ", type: "agriculture" },
            ],
        },
        {
            year: 2023,
            title: "Chuyển vùng trồng Lô 3",
            description:
                "Cây được chuyển sang Lô 3 có điều kiện vi khí hậu tối ưu cho giai đoạn trưởng thành.",
            imageUrl:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAZs4KuzI8PFUm7QWSTKski8whZdLD6B1iO-DOeBMvzEFxOcW-kDYtcYr55ANGzLzxSQQTXRdr7I3YseRZEkag5rFvtnUj8ZftYfXf-iqoQIzQVW_MoDokYlJjdzGC12Gvgx2adQ3Nh0Bw7kr2jxiUDPUs2Ea-k7php5_0Z9WTU9x0y-ccSIGVkbyA2cHc4KHrYixZHR4-kEfapPfM7-TrCsEmQKBIgaEDk4QLcOh8dj1zPVrNxiXco2J9LzSgoCjpNSsmGFKQA4AI",
            position: "right",
            actions: [
                { icon: "water_drop", label: "Tưới nước" },
                { icon: "agriculture", label: "Làm cỏ" },
                { icon: "bug_report", label: "Sâu bệnh", variant: "warning" },
            ],
            activities: [
                { date: "01/04/2023", time: "05:30", action: "Tưới nước", type: "water" },
                { date: "10/04/2023", time: "08:00", action: "Làm cỏ", type: "agriculture" },
                { date: "20/04/2023", time: "07:00", action: "Sâu bệnh", type: "bug" },
            ],
        },
    ],
    verificationData: sharedVerificationData,
    artisanData: sharedArtisanData,
    distributorData: sharedDistributorData,
};

// ============ PRODUCT 3: Growing (4 years) ============
const product3: Product = {
    productCode: "SNL-2025-IJKL",
    blockchainHash: "0x45D2789EF1gh89j234klmN963O5502D4h8f2365B",
    age: 4,
    status: "growing",
    heroImageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAfuqiMepliHpaHxuOZ3VkCmZAh8F7nSiPYUChg7lDTMZH3WOwmTA2bJCoydtCQvM83QXa2hwOnpX1snmyKHtFn1fRl8rnbMm2mdY7ebDpRSt-jNFxeSdbAs0w4RDnV7nr68GKlVpZ50L-KqvHJgGHCvGHGt-7qoRpwXL0FfC9xv9Qm42FeKQtHOZkgJSxUPr6R2CEpw3MpQmqM2lyaPDE8OpLI3nu9ZmhXAGt53RS6gN6Q9Z6lFGvKpoypyaud3KSCtX2W5OC9f40",
    timelineEvents: [
        {
            year: 2021,
            title: "Gieo hạt từ Cây mẹ C03",
            description:
                "Hạt giống chất lượng cao từ cây mẹ C03, được gieo trồng theo phương pháp truyền thống.",
            imageUrl:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAfuqiMepliHpaHxuOZ3VkCmZAh8F7nSiPYUChg7lDTMZH3WOwmTA2bJCoydtCQvM83QXa2hwOnpX1snmyKHtFn1fRl8rnbMm2mdY7ebDpRSt-jNFxeSdbAs0w4RDnV7nr68GKlVpZ50L-KqvHJgGHCvGHGt-7qoRpwXL0FfC9xv9Qm42FeKQtHOZkgJSxUPr6R2CEpw3MpQmqM2lyaPDE8OpLI3nu9ZmhXAGt53RS6gN6Q9Z6lFGvKpoypyaud3KSCtX2W5OC9f40",
            position: "left",
            actions: [
                { icon: "water_drop", label: "Tưới nước" },
                { icon: "agriculture", label: "Làm cỏ" },
                { icon: "bug_report", label: "Sâu bệnh", variant: "warning" },
            ],
            activities: [
                { date: "20/03/2021", time: "07:00", action: "Gieo hạt", type: "agriculture" },
                { date: "25/03/2021", time: "06:00", action: "Tưới nước", type: "water" },
                { date: "10/05/2021", time: "08:30", action: "Làm cỏ", type: "agriculture" },
            ],
        },
        {
            year: 2024,
            title: "Chăm sóc định kỳ",
            description:
                "Cây đang trong giai đoạn phát triển mạnh, được chăm sóc định kỳ và theo dõi sức khỏe liên tục.",
            imageUrl:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAZs4KuzI8PFUm7QWSTKski8whZdLD6B1iO-DOeBMvzEFxOcW-kDYtcYr55ANGzLzxSQQTXRdr7I3YseRZEkag5rFvtnUj8ZftYfXf-iqoQIzQVW_MoDokYlJjdzGC12Gvgx2adQ3Nh0Bw7kr2jxiUDPUs2Ea-k7php5_0Z9WTU9x0y-ccSIGVkbyA2cHc4KHrYixZHR4-kEfapPfM7-TrCsEmQKBIgaEDk4QLcOh8dj1zPVrNxiXco2J9LzSgoCjpNSsmGFKQA4AI",
            position: "right",
            actions: [
                { icon: "water_drop", label: "Tưới nước" },
                { icon: "agriculture", label: "Làm cỏ" },
                { icon: "bug_report", label: "Sâu bệnh", variant: "warning" },
            ],
            activities: [
                { date: "15/01/2024", time: "06:00", action: "Tưới nước", type: "water" },
                { date: "20/02/2024", time: "07:00", action: "Làm cỏ", type: "agriculture" },
                { date: "10/04/2024", time: "08:00", action: "Sâu bệnh", type: "bug" },
            ],
        },
    ],
    verificationData: sharedVerificationData,
    artisanData: sharedArtisanData,
    distributorData: sharedDistributorData,
};

// ============ PRODUCT 4: Seeded (< 1 year) ============
const product4: Product = {
    productCode: "SNL-2025-MNOP",
    blockchainHash: "0x12A3456CD7ef01g345hijK074L6603E5i9g3476C",
    age: 1,
    status: "seeded",
    heroImageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAfuqiMepliHpaHxuOZ3VkCmZAh8F7nSiPYUChg7lDTMZH3WOwmTA2bJCoydtCQvM83QXa2hwOnpX1snmyKHtFn1fRl8rnbMm2mdY7ebDpRSt-jNFxeSdbAs0w4RDnV7nr68GKlVpZ50L-KqvHJgGHCvGHGt-7qoRpwXL0FfC9xv9Qm42FeKQtHOZkgJSxUPr6R2CEpw3MpQmqM2lyaPDE8OpLI3nu9ZmhXAGt53RS6gN6Q9Z6lFGvKpoypyaud3KSCtX2W5OC9f40",
    timelineEvents: [
        {
            year: 2024,
            title: "Gieo hạt từ Cây mẹ D04",
            description:
                "Hạt giống mới được gieo từ cây mẹ D04, đang trong giai đoạn nảy mầm và phát triển ban đầu.",
            imageUrl:
                "https://lh3.googleusercontent.com/aida-public/AB6AXuAfuqiMepliHpaHxuOZ3VkCmZAh8F7nSiPYUChg7lDTMZH3WOwmTA2bJCoydtCQvM83QXa2hwOnpX1snmyKHtFn1fRl8rnbMm2mdY7ebDpRSt-jNFxeSdbAs0w4RDnV7nr68GKlVpZ50L-KqvHJgGHCvGHGt-7qoRpwXL0FfC9xv9Qm42FeKQtHOZkgJSxUPr6R2CEpw3MpQmqM2lyaPDE8OpLI3nu9ZmhXAGt53RS6gN6Q9Z6lFGvKpoypyaud3KSCtX2W5OC9f40",
            position: "left",
            actions: [
                { icon: "water_drop", label: "Tưới nước" },
                { icon: "agriculture", label: "Làm cỏ" },
                { icon: "bug_report", label: "Sâu bệnh", variant: "warning" },
            ],
            activities: [
                { date: "10/11/2024", time: "06:00", action: "Gieo hạt", type: "agriculture" },
                { date: "15/11/2024", time: "07:00", action: "Tưới nước", type: "water" },
                { date: "20/11/2024", time: "06:30", action: "Làm cỏ", type: "agriculture" },
                { date: "01/12/2024", time: "07:00", action: "Sâu bệnh", type: "bug" },
            ],
        },
    ],
    verificationData: sharedVerificationData,
    artisanData: sharedArtisanData,
    distributorData: sharedDistributorData,
};

// Export all products
export const products: Product[] = [product1, product2, product3, product4];

// Helper function to find product by code
export const getProductByCode = (code: string): Product | undefined => {
    return products.find((p) => p.productCode === code);
};
