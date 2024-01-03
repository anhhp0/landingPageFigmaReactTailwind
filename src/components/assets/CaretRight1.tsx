export default function CaretRight1({ className = "" }: CaretRight1Props) {
  return (
    <div className={`${className}`}>
      <svg
        width="100%"
        height="100%"
        style={{ overflow: "visible" }}
        preserveAspectRatio="none"
        viewBox="0 0 13 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4.0625 9.76705V3.23343C4.0625 2.78102 4.60949 2.55446 4.92939 2.87436L8.1962 6.14117C8.3945 6.33947 8.3945 6.66102 8.1962 6.85932L4.92939 10.1261C4.60949 10.446 4.0625 10.2195 4.0625 9.76705Z"
          fill="#D7DBFF"
        />
      </svg>
    </div>
  );
}

interface CaretRight1Props {
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
