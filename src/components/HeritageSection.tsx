import type { FC } from "react";
import pharmalogo from "/images/trungson-logo.png"

interface ArtisanInfo {
  name: string;
  imageUrl: string;
  experience: string;
  ethnicity: string;
  area: string;
  region: string;
}

interface DistributorInfo {
  name: string;
  description: string;
}

interface HeritageSectionProps {
  artisan: ArtisanInfo;
  distributor: DistributorInfo;
}

const HeritageSection: FC<HeritageSectionProps> = ({
  artisan,
  distributor,
}) => {
  return (
    <section className="py-16 lg:py-14 px-6 lg:px-12 bg-forest-dark" id="heritage">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8">
          {/* Artisan Card */}
          <div className="lg:col-span-8 glass-card rounded-[2rem] lg:rounded-[3rem] p-8 lg:p-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-16 border-white/10">
            {/* Artisan Image */}
            <div className="w-48 lg:w-64 h-48 lg:h-64 rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden flex-shrink-0 relative group shadow-2xl">
              <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:bg-transparent transition-all duration-700"></div>
              <img
                alt={artisan.name}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                src={artisan.imageUrl}
              />
            </div>

            {/* Artisan Info */}
            <div className="text-center lg:text-left">
              <span className="text-primary text-lg font-black uppercase tracking-[0.3em] mb-4 block">
                Người chịu trách nhiệm
              </span>
              <h3 className="text-3xl lg:text-5xl font-black mb-6 lg:mb-8 tracking-tighter">
                {artisan.name}
              </h3>
              <div className="grid grid-cols-2 gap-y-6 lg:gap-y-10 gap-x-8 lg:gap-x-12">
                <div>
                  <h4 className="text-slate-500 text-[10px] uppercase tracking-widest font-black mb-2">
                    Lô quản lí
                  </h4>
                  <p className="text-lg lg:text-2xl font-bold text-white">
                    {artisan.area}
                  </p>
                </div>
                <div>
                  <h4 className="text-slate-500 text-[10px] uppercase tracking-widest font-black mb-2">
                    Vùng canh tác
                  </h4>
                  <p className="text-lg lg:text-2xl font-bold text-white">
                    {artisan.region}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Distributor Card */}
          <div className="lg:col-span-4 bg-primary rounded-[2rem] lg:rounded-[3rem] p-10 lg:p-12 flex flex-col justify-between text-forest-dark overflow-hidden relative shadow-2xl min-h-[350px]">
            {/* Decorative Blur */}
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 lg:w-20 h-16 lg:h-20 rounded-xl lg:rounded-2xl flex items-center justify-center mb-8 lg:mb-10">
                <img src={pharmalogo} alt="TS Logo" className="w-full h-full object-contain" />
              </div>

              {/* Label */}
              <h4 className="text-forest-dark/60 text-[10px] uppercase tracking-[0.3em] font-black mb-3 lg:mb-4">
                Đơn vị phân phối
              </h4>

              {/* Name */}
              <div className="text-3xl lg:text-4xl font-black uppercase leading-tight tracking-tighter mb-6 lg:mb-8">
                {distributor.name.split(" ").slice(0, -1).join(" ")} <br />
                {distributor.name.split(" ").slice(-1)}
              </div>

              {/* Description */}
              <p className="text-forest-dark/80 text-base lg:text-lg leading-relaxed font-semibold">
                {distributor.description}
              </p>
            </div>

            {/* Footer Badge */}
            <div className="relative z-10 flex items-center gap-4 mt-6 lg:mt-8 opacity-40">
              <div className="w-10 h-10 border-2 border-forest-dark rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-sm">
                  security
                </span>
              </div>
              <span className="text-[10px] uppercase font-black tracking-widest">
                Protected Assets
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeritageSection;
