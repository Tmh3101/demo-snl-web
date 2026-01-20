import type { FC } from "react";

interface HeroSectionProps {
  productCode: string;
  blockchainHash: string;
  age: number;
  imageUrl: string;
}

const HeroSection: FC<HeroSectionProps> = ({
  productCode,
  age,
  imageUrl,
}) => {

  return (
    <section className="relative min-h-[90vh] flex items-center bg-forest-gradient pt-24 overflow-hidden border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-20">
        {/* Content */}
        <div className="lg:col-span-6 flex flex-col justify-center py-10 lg:py-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 lg:gap-3 bg-white/5 border border-white/10 px-4 lg:px-5 py-2 lg:py-2.5 rounded-full mb-6 lg:mb-8 w-fit flex-wrap">
            <span className="material-symbols-outlined text-primary text-lg lg:text-xl">
              verified
            </span>
            <span className="text-xs lg:text-sm font-bold tracking-[0.2em] text-white uppercase">
              Sản phẩm chính hãng
            </span>
            {/* <span className="hidden sm:block h-4 w-px bg-white/20 mx-2"></span>
            <span className="text-xs lg:text-sm font-mono text-primary">
              {productCode}
            </span> */}
          </div>

          {/* Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-[80px] leading-[0.9] font-black mb-6 lg:mb-8 tracking-tighter">
            Sâm Ngọc Linh
            <br />
            <span className="text-primary font-light italic block mt-2 lg:mt-4">
              {age} Năm Tuổi
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg lg:text-xl text-slate-300 font-light max-w-xl mb-8 lg:mb-12 leading-relaxed">
            Độc bản dược liệu quý hiếm từ đỉnh núi Ngọc Linh, được định danh duy
            nhất qua hệ thống Blockchain. Chứng thực {age} năm sinh trưởng thuần
            khiết dưới tán rừng già.
          </p>

          {/* Blockchain Hash */}
          <div className="flex flex-col gap-3 lg:gap-4">
            <span className="text-[18px] text-slate-500 uppercase tracking-[0.4em] font-bold">
              Mã định danh duy nhất
            </span>
            <div className="bg-white/5 border border-white/10 p-3 lg:p-4 rounded-xl lg:rounded-2xl w-fit font-mono text-primary text-lg lg:text-lg flex items-center gap-3 lg:gap-4 max-w-full overflow-hidden">
              <span className="truncate">{productCode}</span>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="lg:col-span-6 relative h-full flex items-center justify-center">
          <div className="relative w-full aspect-square max-w-[400px] lg:max-w-[600px] z-10">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-[120px] opacity-30"></div>
            <img
              alt="Sâm Ngọc Linh"
              className="w-full h-full object-contain relative z-10 drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)]"
              src={imageUrl}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
