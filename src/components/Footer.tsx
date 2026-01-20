import type { FC } from "react";

interface FooterProps {
  productCode: string;
  blockchainHash: string;
  companyName: string;
}

const Footer: FC<FooterProps> = ({
//   productCode,
  blockchainHash,
  companyName,
}) => {
  return (
    <footer className="w-full bg-forest-dark border-t border-white/5 py-12 lg:py-16">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
          {/* Logo & Copyright */}
          <div className="flex flex-col gap-2 items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-primary p-2 rounded">
                <span className="material-symbols-outlined text-forest-dark text-lg lg:text-xl font-bold">
                  verified
                </span>
              </div>
              <span className="font-black text-xl lg:text-2xl tracking-tighter">
                {companyName.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="text-primary">
                  {companyName.split(" ").slice(-1)}
                </span>
              </span>
            </div>
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">
              © {new Date().getFullYear()} {companyName}. All Rights Reserved.
            </p>
          </div>

          {/* Center: Blockchain Verification Button */}
          <div className="order-last lg:order-none">
            <button className="bg-primary text-forest-dark px-6 lg:px-10 py-3 lg:py-4 rounded-full text-sm lg:text-base font-black uppercase tracking-widest flex items-center gap-3 hover:bg-white transition-all glow-gold active:scale-95 group">
              Xác thực Blockchain
              <span className="material-symbols-outlined font-black group-hover:translate-x-1 transition-transform">
                schema
              </span>
            </button>
          </div>

          {/* Contract Hash & Social */}
          <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-12">
            <div className="text-center sm:text-right">
              <p className="text-[9px] text-slate-500 uppercase tracking-[0.4em] mb-2 font-black">
                Contract Hash
              </p>
              <p className="text-[10px] lg:text-xs font-mono text-primary bg-primary/5 px-3 lg:px-4 py-2 rounded-lg border border-primary/20 max-w-[280px] lg:max-w-none truncate">
                {blockchainHash}
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                className="w-10 lg:w-12 h-10 lg:h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary hover:text-forest-dark transition-all duration-300"
                href="#"
              >
                <span className="material-symbols-outlined text-lg lg:text-xl">
                  share
                </span>
              </a>
              <a
                className="w-10 lg:w-12 h-10 lg:h-12 rounded-full glass-card flex items-center justify-center hover:bg-primary hover:text-forest-dark transition-all duration-300"
                href="#"
              >
                <span className="material-symbols-outlined text-lg lg:text-xl">
                  mail
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
