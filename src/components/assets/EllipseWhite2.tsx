export default function EllipseWhite2({ className = "" }: EllipseWhite2Props) {
  return (
    <div className={`${className}`}>
      <svg
        width="100%"
        height="100%"
        style={{ overflow: "visible" }}
        preserveAspectRatio="none"
        viewBox="0 0 6 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="3" cy="3.00024" r="3" fill="white" />
      </svg>
    </div>
  );
}

interface EllipseWhite2Props {
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
