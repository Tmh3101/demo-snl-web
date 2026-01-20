import type { FC } from "react";
import { useParams, Link } from "react-router-dom";
import {
    Header,
    HeroSection,
    TimelineSection,
    VerificationSection,
    HeritageSection,
    Footer,
} from "../components";
import { getProductByCode } from "../data";

const ProductDetailPage: FC = () => {
    const { productCode } = useParams<{ productCode: string }>();
    const product = productCode ? getProductByCode(productCode) : undefined;

    if (!product) {
        return (
            <>
                <Header />
                <main className="min-h-screen bg-forest-dark flex items-center justify-center pt-24">
                    <div className="text-center px-6">
                        <span className="material-symbols-outlined text-6xl text-primary/50 mb-6 block">
                            search_off
                        </span>
                        <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                            Không tìm thấy sản phẩm
                        </h1>
                        <p className="text-slate-400 mb-8 max-w-md mx-auto">
                            Mã sản phẩm "{productCode}" không tồn tại trong hệ thống.
                            Vui lòng kiểm tra lại hoặc quay về trang danh sách.
                        </p>
                        <Link
                            to="/"
                            className="inline-flex items-center gap-2 bg-primary text-forest-dark px-6 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors"
                        >
                            <span className="material-symbols-outlined">arrow_back</span>
                            Quay lại danh sách
                        </Link>
                    </div>
                </main>
            </>
        );
    }

    return (
        <>
            <Header />
            <main>
                <HeroSection
                    productCode={product.productCode}
                    blockchainHash={product.blockchainHash}
                    age={product.age}
                    imageUrl={product.heroImageUrl}
                />

                <VerificationSection
                    species={product.verificationData.species}
                    molecularMarker={product.verificationData.molecularMarker}
                    purity={product.verificationData.purity}
                    compounds={product.verificationData.compounds}
                    imageUrl={product.verificationData.imageUrl}
                    backgroundUrl={product.verificationData.backgroundUrl}
                    certifications={product.verificationData.certifications}
                />

                <HeritageSection
                    artisan={product.artisanData}
                    distributor={product.distributorData}
                />

                <TimelineSection events={product.timelineEvents} />

                <Footer
                    productCode={product.productCode}
                    blockchainHash={product.blockchainHash}
                    companyName={product.distributorData.name}
                />
            </main>
        </>
    );
};

export default ProductDetailPage;
