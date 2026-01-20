import type { FC } from "react";
import { Header, Footer } from "../components";
import ProductCard from "../components/ProductCard";
import { products } from "../data";

const ProductListPage: FC = () => {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className="relative min-h-[50vh] flex items-center bg-forest-gradient pt-24 overflow-hidden border-b border-white/5">
                    <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full text-center py-16 lg:py-24">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 lg:gap-3 bg-white/5 border border-white/10 px-4 lg:px-5 py-2 lg:py-2.5 rounded-full mb-6 lg:mb-8">
                            <span className="material-symbols-outlined text-primary text-lg lg:text-xl">
                                verified
                            </span>
                            <span className="text-xs lg:text-sm font-bold tracking-[0.2em] text-white uppercase">
                                Blockchain Verified
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-6 tracking-tighter">
                            Sâm Ngọc Linh
                            <span className="text-primary font-light italic block mt-2 lg:mt-4">
                                Chính Hãng
                            </span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg lg:text-xl text-slate-300 font-light max-w-2xl mx-auto leading-relaxed">
                            Khám phá bộ sưu tập Sâm Ngọc Linh thuần chủng, mỗi sản phẩm được định danh
                            duy nhất qua hệ thống Blockchain với đầy đủ lịch sử sinh trưởng.
                        </p>
                    </div>

                    {/* Background Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
                </section>

                {/* Products Grid */}
                <section className="py-16 lg:py-24 bg-forest-dark">
                    <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
                        {/* Section Header */}
                        <div className="text-center mb-12 lg:mb-16">
                            <h2 className="text-primary text-xs lg:text-sm font-black uppercase tracking-[0.4em] mb-4">
                                Danh sách sản phẩm
                            </h2>
                            <h3 className="text-2xl lg:text-4xl font-bold text-white">
                                {products.length} Sản Phẩm Có Sẵn
                            </h3>
                        </div>

                        {/* Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
                            {products.map((product) => (
                                <ProductCard key={product.productCode} product={product} />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer
                productCode="SNL-2025"
                blockchainHash="0x..."
                companyName="Trung Sơn Pharma"
            />
        </>
    );
};

export default ProductListPage;
