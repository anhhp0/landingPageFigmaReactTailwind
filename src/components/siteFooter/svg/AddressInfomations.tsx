export default function AddrressInfomations({ className = "" }: AddrressInfomationsProps) {
  return (
    <div className="site-footer__sidebar-1">
      <div className="site-footer__mail-company-com">
        <span>
          <span className="site-footer-mail-company-com-span">
            mail@company.com
          </span>
          <span className="site-footer-mail-company-com-span2">.</span>
        </span>{" "}
      </div>
      <div className="site-footer___521-569-8966">+521 569 8966. </div>
      <div className="site-footer__baker-steet-101-ny-united-states">
        Baker Steet 101, NY, United States.{" "}
      </div>
      <div className="site-footer__beautice-is-a-beauty-clinic-word-press-theme">
        <span>
          <span className="site-footer-beautice-is-a-beauty-clinic-word-press-theme-span">
            Beautice
          </span>
          <span className="site-footer-beautice-is-a-beauty-clinic-word-press-theme-span2">
            {" "}
            is a Beauty Clinic WordPress Theme.
          </span>
        </span>{" "}
      </div>
      <div className="site-footer__footer-logo">
        <div className="site-footer__ellipse-bg"></div>
        <div className="site-footer__rectangle-blue"></div>
        <div className="site-footer__ellipse-white-2"></div>
        <div className="site-footer__ellipse-white-1"></div>
        <div className="site-footer__beautice">Beautice </div>
      </div>
      Main
    </div>
  );
}

interface AddrressInfomationsProps {
  className: string;
}

/**
 * This component was generated from Figma with FireJet.
 * Learn more at https://www.firejet.io
 *
 * README:
 * The output code may look slightly different when copied to your codebase. To fix this:
 * 1. Include the necessary fonts. The required fonts are imported from public/index.html
 * 2. Include the global styles. They can be found in App.css
 *
 * Note: Step 2 is not required for tailwind.css output
 */
