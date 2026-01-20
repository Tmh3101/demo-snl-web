import type { FC } from "react";

const Header: FC = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-forest-dark/60 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 lg:h-24 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 lg:gap-4">
          <div className="text-primary border border-primary/30 p-1.5 lg:p-2 rounded flex items-center justify-center">
            <span className="material-symbols-outlined text-2xl lg:text-3xl">
              verified
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-base lg:text-lg font-black tracking-tighter uppercase leading-none">
              Sâm Ngọc Linh  <span className="text-primary font-light">Authentic</span>
            </span>
            <span className="text-[8px] lg:text-[10px] tracking-[0.3em] text-slate-400 uppercase">
              Single Root Traceability
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
          <a
            className="text-xs font-bold tracking-widest uppercase hover:text-primary transition-colors"
            href="#timeline"
          >
            Hành trình
          </a>
          <a
            className="text-xs font-bold tracking-widest uppercase hover:text-primary transition-colors"
            href="#verification"
          >
            Dữ liệu DNA
          </a>
          <a
            className="text-xs font-bold tracking-widest uppercase hover:text-primary transition-colors"
            href="#heritage"
          >
            Nghệ nhân
          </a>
          <button className="bg-primary/10 border border-primary/30 hover:bg-primary hover:text-forest-dark text-primary px-6 py-2.5 rounded-full text-xs font-black transition-all tracking-widest uppercase">
            Liên hệ ngay
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-primary p-2">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
