export default function RectangleRight({
  className = "",
}: RectangleRightProps) {
  return (
    <div className={`${className}`}>
      <svg
        width="100%"
        height="100%"
        style={{ overflow: "visible" }}
        preserveAspectRatio="none"
        viewBox="0 0 14.82 3.09"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.182617 2.36384C0.182617 3.21628 0.873656 3.90732 1.7261 3.90732H13.4565C14.309 3.90732 15 3.21628 15 2.36384C15 1.5114 14.309 0.820362 13.4565 0.820362H1.7261C0.873657 0.820362 0.182617 1.5114 0.182617 2.36384Z"
          fill="#EEEEEE"
        />
      </svg>
    </div>
  );
}

interface RectangleRightProps {
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
