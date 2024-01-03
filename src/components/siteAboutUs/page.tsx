import "./AboutUs.css";
import BgAboutUs from "./svg/bgAboutUs";
import LearnMoreButtonAboutUs from "./svg/learnMoreButtonAboutUs";
import PlayButtonAboutUs from "./svg/playButtonAboutUs";
import ThumbnailAboutUs from "./svg/thumbnailAboutUs";
import TitleDescAboutUs from "./svg/titleDescAboutUs";

export interface siteAboutUsProps {
  className: string;
}

export default function SiteAboutUs({ className = "" }: siteAboutUsProps) {
  return (
    <div className={"about-us " + className}>
      {/* <svg
        className="background-bubble"
        width="947"
        height="1029"
        viewBox="0 0 947 1029"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M749.052 139.789C878.799 107.501 904.939 52.9503 948.146 0V686.236C919.482 734.809 858.209 817.18 824.454 854.83C769.386 916.252 635.827 1006.48 527.385 1018.76C447.787 1027.78 183.967 1070.87 61.9698 870.927C-130.695 555.17 180.119 319.118 260.216 280.001C497.01 164.358 657.131 162.663 749.052 139.789Z"
          fill="url(#paint0_linear_97_95)"
        />
        <path
          d="M762.475 145.548C883.394 115.453 907.755 64.6053 948.022 15.2497V654.898C921.309 700.174 864.205 776.952 832.746 812.046C781.425 869.299 656.954 953.401 555.89 964.851C481.708 973.256 235.838 1013.42 122.141 827.05C-57.4153 532.73 232.251 312.704 306.898 276.242C527.581 168.449 676.808 166.87 762.475 145.548Z"
          fill="url(#paint1_linear_97_95)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_97_95"
            x1="478.448"
            y1="0"
            x2="478.448"
            y2="1043.6"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EAECFF" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_97_95"
            x1="510.283"
            y1="15.2497"
            x2="510.283"
            y2="988.003"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E4E7FF" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg> */}
      <BgAboutUs className="" />

      {/* <img
        className="unsplash-lrxys-0-t-sy-gc"
        src="../asset/unsplash_LRXYS0tSyGc.png"
        alt="thubmail"
      /> */}
      <ThumbnailAboutUs className="" />

      {/* <div className="play-button">
        <svg
          className="play-button2"
          width="49"
          height="50"
          viewBox="0 0 49 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="24.5" cy="24.9382" r="24.5" fill="#091156" />
          <path
            d="M32.1167 23.6145C33.45 24.3843 33.45 26.3088 32.1167 27.0786L22.8042 32.4551C21.4708 33.2249 19.8042 32.2627 19.8042 30.7231L19.8042 19.9699C19.8042 18.4303 21.4708 17.4681 22.8042 18.2379L32.1167 23.6145Z"
            fill="white"
          />
        </svg>
        <div className="watch-video">Watch Video </div>
        Thu
      </div> */}
      <PlayButtonAboutUs className="" />

      {/* <div className="more-details-button">
        <div className="button-bg"></div>
        <div className="learn-more">Learn More </div>
      P</div> */}
          <LearnMoreButtonAboutUs className="" />
          
      {/* <div className="tittle-desc">
        <div className="lorem-ipsum-dolor-sit-amet-consectetur-adipiscing-elit-elit-quam-suscipit-purus-donec-amet-egestas-volutpat-facilisi-eu-libero-nunc-ipsum-ornare-mauris-sit-quam-quis-enim-varius-tellus-in-suspendisse-placerat-id-dui-erat-sed-quam-tellus-in-purus-pellentesque-congue-fringilla-cras-tellus-enim">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit, quam
          suscipit purus donec amet. Egestas volutpat facilisi eu libero. Nunc,
          ipsum ornare mauris sit quam quis enim. Varius tellus in suspendisse
          placerat.
          <br />
          <br />
          Id dui erat sed quam tellus in purus. Pellentesque congue fringilla
          cras tellus enim.{" "}
        </div>
        <div className="we-are-the-best-beauty-clinic">
          We are the best beauty clinic{" "}
        </div>
        <div className="about-us2">About Us </div>L
      </div> */}
          <TitleDescAboutUs className=""/>
    </div>
  );
}
