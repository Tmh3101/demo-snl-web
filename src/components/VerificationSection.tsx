import type { FC } from "react";

interface CompoundData {
  name: string;
  percentage: number;
}

interface VerificationSectionProps {
  species: {
    scientific: string;
    author: string;
  };
  molecularMarker: {
    name: string;
    description: string;
  };
  purity: number;
  compounds: CompoundData[];
  imageUrl: string;
  backgroundUrl: string;
  certifications: {
    icon: string;
    label: string;
  }[];
}

const VerificationSection: FC<VerificationSectionProps> = ({
  species,
  molecularMarker,
  purity,
  compounds,
  imageUrl,
  backgroundUrl,
  certifications,
}) => {
  const mainCompound = compounds[0];
  const otherCompounds = compounds.slice(1);

  return (
    <section
      className="py-16 lg:py-24 bg-forest-dark border-y border-white/5 overflow-hidden"
      id="verification"
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-24">
          <h3 className="text-primary text-xs lg:text-sm font-black uppercase tracking-[0.4em] mb-4 italic">
            Scientific Bio-Passport
          </h3>
          <h2 className="text-4xl lg:text-6xl font-black mb-6 tracking-tight">
            Hộ Chiếu Số
          </h2>
          <div className="w-16 lg:w-24 h-1 bg-primary/30 mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative">
          {/* Left Column */}
          <div className="lg:col-span-3 space-y-12 lg:space-y-24 z-20">
            {/* Species Identification */}
            <div className="group">
              <span className="text-[14px] text-primary font-black uppercase tracking-[0.15em] block mb-4">
                01. Định danh loài
              </span>
              <h4 className="text-xl lg:text-2xl font-bold text-white leading-tight">
                {species.scientific}
              </h4>
              <p className="text-primary/70 text-sm font-light italic mt-2">
                {species.author}
              </p>
            </div>

            {/* Molecular Marker */}
            <div className="group">
              <span className="text-[14px] text-primary font-black uppercase tracking-[0.15em] block mb-4">
                02. Chỉ thị phân tử
              </span>
              <h4 className="text-xl lg:text-2xl font-bold text-white leading-tight">
                {molecularMarker.name}
              </h4>
              <p className="text-slate-400 text-sm font-light mt-2 leading-relaxed">
                {molecularMarker.description}
              </p>
            </div>

            {/* Purity */}
            <div className="group">
              <span className="text-[14px] text-primary font-black uppercase tracking-[0.15em] block mb-4">
                03. Độ thuần khiết
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl lg:text-6xl font-black text-white tracking-tighter">
                  {purity}
                </span>
                <span className="text-xl lg:text-2xl font-bold text-primary">
                  %
                </span>
              </div>
              <p className="text-slate-400 text-sm font-light mt-2">
                Đạt tiêu chuẩn mẫu chuẩn Quốc gia
              </p>
            </div>
          </div>

          {/* Center - Product Image */}
          <div className="lg:col-span-6 relative flex items-center justify-center order-first lg:order-none">
            <div className="relative z-10 w-full max-w-[350px] lg:max-w-[500px]">
              {/* Decorative Rings */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-pulse scale-105 pointer-events-none"></div>
              <div className="absolute inset-0 rounded-full border border-primary/40 scale-110 opacity-30 pointer-events-none"></div>

              {/* Main Container - Border only */}
              <div className="relative w-full aspect-square rounded-full border-4 lg:border-[6px] border-primary/40">
                
                {/* LAYER 1: Background - Completely independent, clipped circle */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <img
                    alt="Wooden Background"
                    className="w-full h-full object-cover"
                    src={backgroundUrl}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
                  <div
                    className="absolute inset-0"
                    style={{ boxShadow: "inset 0 0 80px rgba(214,147,31,0.3)" }}
                  ></div>
                </div>

                {/* LAYER 2: Ginseng - Separate div with animation, also clipped */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center p-8 lg:p-12 animate-float-ginseng">
                    <img
                      alt="Premium Ngoc Linh Ginseng Root"
                      className="w-full h-full object-contain drop-shadow-[0_25px_50px_rgba(214,147,31,0.6)] brightness-110 contrast-110"
                      src={imageUrl}
                    />
                  </div>
                </div>

                {/* LAYER 3: Shine overlay */}
                <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-3 space-y-12 lg:space-y-24 lg:text-right z-20">
            {/* Main Compound */}
            <div className="relative">
              <div className="inline-block bg-primary/10 px-6 py-2 rounded-full mb-4 border border-primary/20">
                <span className="text-[9px] text-primary font-black uppercase tracking-widest">
                  Dược chất chủ đạo
                </span>
              </div>
              <h4 className="text-xl lg:text-2xl font-bold text-white mb-2">
                {mainCompound.name}
              </h4>
              <div className="flex items-baseline justify-start lg:justify-end gap-2">
                <span className="text-6xl lg:text-8xl font-black text-primary tracking-tighter drop-shadow-[0_0_25px_rgba(214,147,31,0.5)]">
                  {mainCompound.percentage}
                </span>
                <span className="text-6xl lg:text-3xl font-bold text-primary/60">
                  %
                </span>
              </div>
            </div>

            {/* Other Compounds */}
            {otherCompounds.map((compound, index) => (
              <div key={index} className="group">
                <span className="text-[13px] text-primary font-black uppercase tracking-[0.15em] block mb-4">
                  {compound.name}
                </span>
                <div className="flex items-baseline justify-start lg:justify-end gap-2">
                  <span className="text-4xl lg:text-5xl font-black text-white tracking-tighter">
                    {compound.percentage}
                  </span>
                  <span className="text-lg lg:text-xl font-bold text-primary">
                    %
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Footer */}
        <div className="mt-12 lg:mt-24 pt-8 lg:pt-8 flex flex-wrap justify-center items-center gap-8 lg:gap-20 opacity-100 transition-opacity">
          {certifications.map((cert, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-xl lg:text-2xl">
                {cert.icon}
              </span>
              <span className="text-[10px] lg:text-[11px] font-black uppercase tracking-[0.3em]">
                {cert.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerificationSection;
