export default function PlusIcon({ className = "" }: PlusIconProps) {
  return (
    <div className={`${className}`}>
      <svg
        width="100%"
        height="100%"
        style={{ overflow: "visible" }}
        preserveAspectRatio="none"
        viewBox="0 0 7 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="3.5" y1="2.18557e-08" x2="3.5" y2="7" stroke="#41487F" />
        <line x1="7" y1="3.5" x2="-4.37114e-08" y2="3.5" stroke="#41487F" />
      </svg>
    </div>
  );
}

interface PlusIconProps {
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
