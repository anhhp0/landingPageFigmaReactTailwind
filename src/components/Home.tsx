import BackgroundBubble from "./assets/BackgroundBubble";

import SiteFooter from "./siteFooter/page";
import SiteContactUs from "./siteContactUs/page";
import SiteProfessionalTeam from "./siteProfesionalTeam/page";
import SiteAboutUs from "./siteAboutUs/page";
import CoreServices from "./siteMainServices/page";
import SiteMainSlider from "./siteMainSlider/page";
import Frame1 from "./assets/Frame1";
import EllipseWhite4 from "./assets/EllipseWhite4";
import EllipseWhite5 from "./assets/EllipseWhite5";
import PlusIcon from "./assets/PlusIcon";
import RectangleRight from "./assets/RectangleRight";

export default function Home({ className = "" }: HomeProps) {
  return (
    <div
      className={`font-poppins inline-flex h-[4989px] w-[1440px] resize flex-row overflow-hidden ${className}`}
    >
      <div className="relative flex h-full w-full items-end overflow-clip bg-white pb-[918px] pt-[3142px] pr-64">
        <SiteFooter className={"*"} />
        <BackgroundBubble className="relative mr-[-0.33px] h-[929px] w-[1176px]" />
        <SiteContactUs className="" />
        <SiteProfessionalTeam className="" />

        <SiteAboutUs className=""/>


        <CoreServices className=""/>

        {/* ////////////// */}
        {/* Navbar, some information  */}
        {/* <div className="absolute left-0 top-0 flex h-[805px] w-[1287px] items-start justify-center pb-16 pr-5">
          <div className="bg-slide-background relative flex flex-grow items-end self-stretch bg-cover bg-center pb-40 pl-48 pr-96 pt-80">
            <div className="flex flex-grow flex-col items-start justify-center self-stretch">
              <div className="w-96 text-left text-5xl font-semibold leading-tight tracking-[0px] text-indigo-900">
                Clinic & beauty
                <br />
                consultant
              </div>
              <div className="self-stretch text-left text-base font-medium leading-[normal] tracking-widest text-indigo-900">
                It is a long established fact that a reader will be
                <br />
                by the readable content of a page.
              </div>
              <div className="flex flex-col items-center justify-end pt-7 text-center text-base font-semibold leading-[normal] tracking-widest text-white">
                <div className="flex flex-grow items-center justify-center self-stretch">
                  <div className="flex flex-grow justify-center self-stretch rounded-[50px] bg-pink-400 py-4 px-10 drop-shadow-lg">
                    More Details
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-96 flex h-2 w-16 items-center justify-center">
            <div className="absolute inset-0 flex">
              <div className="flex h-full w-full -scale-y-100 items-start" />
            </div>
            <div className="relative mr-0 flex flex-grow items-center justify-center gap-x-2 self-stretch">
              <div className="flex w-4 self-stretch rounded-[50px]">
                <div className="flex h-full w-full -scale-y-100 items-start rounded-[50px] bg-zinc-100" />
              </div>
              <div className="flex flex-grow self-stretch rounded-[50px]">
                <div className="flex h-full w-full -scale-y-100 items-start rounded-[50px] bg-blue-900" />
              </div>
              <RectangleRight className="h-1 w-4" />
            </div>
          </div>
          <Frame1 className="absolute bottom-36 right-0 h-96 w-96" />
          <div className="absolute right-[-3.5px] top-10 flex h-16 w-[1140px] items-center justify-end pb-2 pl-96 pt-1 leading-[normal] tracking-widest">
            <div className="relative flex flex-grow items-center justify-between gap-x-14 self-stretch text-base leading-[normal]">
              <div className="flex flex-grow items-center justify-center gap-x-11">
                <div className="relative flex items-center self-stretch pr-3 text-center font-semibold text-blue-900">
                  <PlusIcon className="absolute bottom-1.5 right-0 h-2 w-2" />
                  <div className="relative flex flex-grow justify-center self-stretch">
                    Home
                  </div>
                </div>
                <div className="self-stretch text-left font-medium text-neutral-400">
                  About
                </div>
                <div className="self-stretch text-left font-medium text-neutral-400">
                  Service
                </div>
                <div className="self-stretch text-left font-medium text-neutral-400">
                  Gallery
                </div>
                <div className="flex justify-center self-stretch pl-0.5 text-center font-medium text-neutral-400">
                  Blog
                </div>
              </div>
              <div className="flex items-center justify-center self-stretch text-center font-semibold text-white">
                <div className="flex flex-grow justify-center self-stretch rounded-[50px] bg-pink-400 py-3.5 px-10">
                  Contact
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 left-0 flex w-64 items-center justify-center text-left text-2xl font-bold leading-[normal] text-indigo-900 drop-shadow-lg">
              <div className="flex flex-grow items-center justify-center self-stretch">
                <div className="bg-ellipse-bg-0 relative flex h-16 w-16 items-start bg-cover bg-center pb-10 pl-3 pr-10 pt-3">
                  <EllipseWhite4 className="absolute left-6 top-6 h-1.5 w-1.5" />
                  <EllipseWhite5 className="relative h-3.5 w-3.5" />
                </div>
                <div className="flex h-3 w-4 items-center">
                  <div className="-ml-6 flex w-10 items-start self-stretch rounded-[50px] bg-indigo-900" />
                </div>
                <div className="flex flex-grow pl-5">Beautice</div>
              </div>
            </div>
          </div>
        </div> */}
<SiteMainSlider className=""/>
        {/* Navbar, some information  */}
        
      </div>
    </div>
  );
}

interface HomeProps {
  className: string;
}
