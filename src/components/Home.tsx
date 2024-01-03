import BackgroundBubble from "./assets/BackgroundBubble";
import Play_button from "./assets/Play_button";
import Animation1 from "./assets/Animation1";
import Animation2 from "./assets/Animation2";
import Animation3 from "./assets/Animation3";
import Frame1 from "./assets/Frame1";
import RectangleRight from "./assets/RectangleRight";
import PlusIcon from "./assets/PlusIcon";
import EllipseWhite4 from "./assets/EllipseWhite4";
import EllipseWhite5 from "./assets/EllipseWhite5";

import SiteFooter from "./siteFooter/page";
import SiteContactUs from "./siteContactUs/page";
import SiteProfessionalTeam from "./siteProfesionalTeam/page";
import SiteAboutUs from "./siteAboutUs/page";
import CoreServices from "./siteMainServices/page";

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

        {/* ///////////// */}
        {/* cover video About Us  */}
        {/* <div className="bg-background-bubble-0 absolute right-[-1.15px] top-[1448px] flex h-[1029px] w-[948px] items-end justify-end bg-cover bg-center pb-72 pl-80 pr-36 pt-96">
          <div className="relative flex flex-grow items-start self-stretch rounded-[50px] [box-shadow:_0px_0px_50px_25px_white]">
            <div className="absolute inset-0 rounded-[50px] bg-[#C4C4C4]" />
            <div className="bg-background-1 absolute inset-0 rounded-[50px] bg-cover bg-center" />
          </div>
        </div> */}
        {/* cover video About Us  */}

        {/* watch button video About us  */}
        {/* <div className="absolute top-[2148px] left-96 flex h-12 w-52 items-center justify-center text-left text-base font-semibold leading-[normal] tracking-widest text-neutral-400">
          <div className="flex flex-grow items-center justify-between self-stretch">
            <Play_button className="h-12 w-12" />
            <div className="w-36">Watch Video</div>
          </div>
        </div> */}
        {/* watch button video About us  */}

        {/* <div className="absolute top-[2143px] left-36 flex h-14 w-52 items-center justify-center text-center text-base font-semibold leading-[normal] tracking-widest text-white">
          <div className="flex flex-grow justify-center self-stretch rounded-[50px] bg-pink-400 py-4 px-10 drop-shadow-lg">
            Learn More
          </div>
        </div> */}
        {/* About Us  */}
        {/* <div className="absolute top-[1802px] left-36 flex h-72 w-96 items-center justify-center text-left">
          <div className="flex flex-grow flex-col items-start justify-center gap-y-3 self-stretch">
            <div className="text-base font-semibold leading-tight tracking-[0px] text-pink-400">
              About Us
            </div>
            <div className="self-stretch text-4xl font-semibold leading-tight tracking-[0px] text-indigo-900">
              We are the best beauty clinic
            </div>
            <div className="w-96 text-base font-normal leading-[normal] tracking-widest text-neutral-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit,
              quam suscipit purus donec amet. Egestas volutpat facilisi eu
              libero. Nunc, ipsum ornare mauris sit quam quis enim. Varius
              tellus in suspendisse placerat.
              <br />
              <br />
              Id dui erat sed quam tellus in purus. Pellentesque congue
              fringilla cras tellus enim.
            </div>
          </div>
        </div> */}
        {/* About Us  */}
        <SiteAboutUs className=""/>

        {/* /////////////// */}
        {/* Main Services  */}
        {/* <div className="absolute inset-x-36 top-[936px] flex h-96 items-center justify-center text-center">
          <div className="flex flex-grow flex-col items-center justify-between gap-y-20 self-stretch">
            <div className="flex flex-col items-center justify-center gap-y-3">
              <div className="flex justify-center text-base font-semibold leading-tight tracking-[0px] text-pink-400">
                Main Services
              </div>
              <div className="flex w-96 justify-center text-4xl font-semibold leading-tight tracking-[0px] text-indigo-900">
                <span>
                  Learn services to focus
                  <br />
                  on your beauty
                </span>
              </div>
              <div className="flex justify-center self-stretch text-base font-normal leading-[normal] tracking-widest text-neutral-400">
                Porta rhoncus orci condimentum vitae lobortis eu dignissim non
                massa. Non parturient amet, feugiat tellus sagittis, scelerisque
                eget nulla turpis.
              </div>
            </div>
            <div className="flex flex-grow items-center justify-center gap-x-14 self-stretch">
              <div className="flex flex-grow items-center justify-center self-stretch">
                <div className="flex flex-grow items-center justify-center self-stretch rounded-3xl bg-white py-14 px-9 [box-shadow:_0px_25px_50px_25px_rgba(246,_247,_255,_1)]">
                  <div className="flex flex-grow flex-col items-center justify-center gap-y-1.5 self-stretch">
                    <Animation1 className="h-40 w-40" />
                    <div className="flex flex-col items-center justify-end self-stretch pt-14 text-lg font-semibold leading-tight tracking-[0px] text-indigo-900">
                      <div className="flex flex-grow justify-center self-stretch">
                        Beauty consultation
                      </div>
                    </div>
                    <div className="flex justify-center self-stretch text-sm font-normal leading-[normal] tracking-widest text-neutral-400">
                      Non parturient amet, feugiat tellus sagittis, scelerisque
                      eget nulla turpis.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-grow items-center justify-center self-stretch">
                <div className="flex flex-grow items-center justify-center self-stretch rounded-3xl bg-white py-14 px-9 [box-shadow:_0px_25px_50px_25px_rgba(246,_247,_255,_1)]">
                  <div className="flex flex-grow flex-col items-center justify-center gap-y-1.5 self-stretch">
                    <Animation2 className="h-40 w-40" />
                    <div className="flex flex-col items-center justify-end self-stretch pt-14 text-lg font-semibold leading-tight tracking-[0px] text-indigo-900">
                      <div className="flex flex-grow justify-center self-stretch">
                        Skin treatments
                      </div>
                    </div>
                    <div className="flex justify-center self-stretch text-sm font-normal leading-[normal] tracking-widest text-neutral-400">
                      Non parturient amet, feugiat tellus sagittis, scelerisque
                      eget nulla turpis.
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-grow items-center justify-center self-stretch">
                <div className="flex flex-grow items-center justify-center self-stretch rounded-3xl bg-white py-14 px-9 [box-shadow:_0px_25px_50px_25px_rgba(246,_247,_255,_1)]">
                  <div className="flex flex-grow flex-col items-center justify-center gap-y-1.5 self-stretch">
                    <Animation3 className="h-40 w-40" />
                    <div className="flex flex-col items-center justify-end self-stretch pt-14 text-lg font-semibold leading-tight tracking-[0px] text-indigo-900">
                      <div className="flex flex-grow justify-center self-stretch">
                        Beauty product
                      </div>
                    </div>
                    <div className="flex justify-center self-stretch text-sm font-normal leading-[normal] tracking-widest text-neutral-400">
                      Non parturient amet, feugiat tellus sagittis, scelerisque
                      eget nulla turpis.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        {/* Main Services  */}
        <CoreServices className=""/>

        {/* ////////////// */}
        {/* Navbar, some information  */}
        <div className="absolute left-0 top-0 flex h-[805px] w-[1287px] items-start justify-center pb-16 pr-5">
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
        </div>
        {/* Navbar, some information  */}
      </div>
    </div>
  );
}

interface HomeProps {
  className: string;
}
