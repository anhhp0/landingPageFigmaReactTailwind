export default function CaretRight3({ className = "" }: CaretRight3Props) {
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
          d="M4.0625 9.76656V3.23295C4.0625 2.78053 4.60949 2.55397 4.92939 2.87387L8.1962 6.14068C8.3945 6.33898 8.3945 6.66053 8.1962 6.85883L4.92939 10.1256C4.60949 10.4456 4.0625 10.219 4.0625 9.76656Z"
          fill="#D7DBFF"
        />
      </svg>
    </div>
  );
}

interface CaretRight3Props {
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
