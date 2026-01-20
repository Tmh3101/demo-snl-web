import { type FC, useState } from "react";
import { Link } from "react-router-dom";
import QRCode from "qrcode";
import { type Product, statusLabels, statusColors } from "../data/productsData";

const BASE_URL = "https://demo-snl-web.vercel.app";

interface ProductCardProps {
    product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownloadQR = async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();

        setIsDownloading(true);

        try {
            const productUrl = `${BASE_URL}/product/${product.productCode}`;

            // Generate QR code as data URL
            const qrDataUrl = await QRCode.toDataURL(productUrl, {
                width: 512,
                margin: 2,
                color: {
                    dark: "#0a0f0d",
                    light: "#ffffff",
                },
            });

            // Create download link
            const link = document.createElement("a");
            link.href = qrDataUrl;
            link.download = `QR-${product.productCode}.png`;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } catch (error) {
            console.error("Failed to generate QR code:", error);
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <Link
            to={`/product/${product.productCode}`}
            className="group block"
        >
            <article className="glass-card rounded-2xl lg:rounded-3xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative aspect-square overflow-hidden bg-forest-dark">
                    <img
                        src={product.heroImageUrl}
                        alt={`Sâm Ngọc Linh ${product.age} năm`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Status Badge */}
                    <div className={`absolute top-4 right-4 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-white ${statusColors[product.status]}`}>
                        {statusLabels[product.status]}
                    </div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="p-5 lg:p-6">
                    {/* Product Code */}
                    <div className="flex items-center gap-2 mb-3">
                        <span className="material-symbols-outlined text-primary text-sm">
                            qr_code_2
                        </span>
                        <span className="font-mono text-primary text-sm lg:text-base">
                            {product.productCode}
                        </span>
                    </div>

                    {/* Age */}
                    <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
                        Sâm Ngọc Linh
                        <span className="text-primary font-light italic ml-2">
                            {product.age} Năm
                        </span>
                    </h3>

                    {/* Timeline Info */}
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <span className="material-symbols-outlined text-base">
                            timeline
                        </span>
                        <span>{product.timelineEvents.length} mốc thời gian</span>
                    </div>

                    {/* Actions */}
                    <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                        {/* Download QR Button */}
                        <button
                            onClick={handleDownloadQR}
                            disabled={isDownloading}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm text-slate-300 hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <span className="material-symbols-outlined text-base">
                                {isDownloading ? "hourglass_empty" : "qr_code_2"}
                            </span>
                            <span className="hidden sm:inline">Tải QR</span>
                        </button>

                        {/* View Detail Hint */}
                        <div className="flex items-center gap-2">
                            <span className="text-slate-500 text-sm hidden sm:inline">Xem chi tiết</span>
                            <span className="material-symbols-outlined text-primary transition-transform duration-300 group-hover:translate-x-2">
                                arrow_forward
                            </span>
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    );
};

export default ProductCard;
