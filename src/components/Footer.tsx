const Footer = () => {
  return (
    <footer className="w-full bg-white py-8 px-4 mt-20">
      <div className="max-w-full sm:max-w-[95%] lg:max-w-[66.67%] mx-auto">
        <div className="border-t border-gray-300 pt-8">
          <div className="flex flex-col gap-4 md:gap-0 text-xs font-roboto-mono uppercase tracking-wide text-black">
            {/* Top row on mobile - Center text */}
            <div className="text-center md:hidden">
              <span>DESIGNED AND BUILT BY RYAN SOE</span>
            </div>

            {/* Bottom row on mobile / Single row on desktop */}
            <div className="flex justify-between md:justify-between items-center px-20 md:px-0">
              {/* Left - Contact */}
              <div>
                <a
                  href="mailto:ryansoe26@gmail.com"
                  className="hover:underline transition-all duration-200"
                >
                  CONTACT ME <span className="text-lg">✉</span>
                </a>
              </div>

              {/* Center - Designed and Built (desktop only) */}
              <div className="hidden md:block">
                <span>DESIGNED AND BUILT BY RYAN SOE</span>
              </div>

              {/* Right - Version */}
              <div>
                <a
                  href="https://github.com/ryansoe/ryan-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline transition-all duration-200"
                >
                  VERSION 2.0 ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
