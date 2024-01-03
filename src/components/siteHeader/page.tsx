import "./SiteHeader.css";

interface siteHeaderProps {
  className: string;
}

export default function SiteHeader({ className = "" }: siteHeaderProps) {
  return (
    <div className={"site-header " + className}>
      <button className="contact-button">
        <div className="button-bg"></div>
        <div className="contact">Contact </div>
      </button>
      <div className="main-menu">
        <button className="blog">Blog </button>
        <button className="gallery">Gallery </button>
        <button className="service">Service </button>
        <button className="about">About </button>
        <button className="home">
          <svg
            className="plus-icon"
            width="7"
            height="7"
            viewBox="0 0 7 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="3.5" y1="2.18557e-08" x2="3.5" y2="7" stroke="#41487F" />
            <line x1="7" y1="3.5" x2="-4.37114e-08" y2="3.5" stroke="#41487F" />
          </svg>

          <div className="home2">Home </div>
        </button>
      </div>
      <div className="main-logo">
        <div className="ellipse-bg"></div>
        <div className="rectangle-blue"></div>
        <div className="ellipse-white-2"></div>
        <div className="ellipse-white-1"></div>
        <div className="beautice">Beautice </div>
      </div>
    </div>
  );
}
