export default function AddrressInfomations({ className = "" }: AddrressInfomationsProps) {
  return (
    <div className="w-[492px] h-[191px] static">
      <div
        className="text-[#d7dbff] text-left text-sm font-medium absolute left-[349px] top-[4693px] w-[190px] h-[23px]"
        style={{ fontStyle: "italic" }}
      >
        <span>
          <span className="mail-company-com-span">mail@company.com</span>
          <span className="mail-company-com-span2">.</span>
        </span>
      </div>
      <div
        className="text-[#d7dbff] text-left text-sm font-medium absolute left-[181px] top-[4693px] w-[140px] h-[23px]"
        style={{ fontStyle: "italic" }}
      >
        +521 569 8966.{" "}
      </div>
      <div
        className="text-[#d7dbff] text-left text-sm font-medium absolute left-[182px] top-[4668px] w-[297px] h-6"
        style={{ fontStyle: "italic" }}
      >
        Baker Steet 101, NY, United States.{" "}
      </div>
      <div className="text-[#d7dbff] text-left font-['-',_sans-serif] text-base font-normal absolute left-[181px] top-[4621px] w-[461px] h-[21px]">
        <span>
          <span className="beautice-is-a-beauty-clinic-word-press-theme-span">
            Beautice
          </span>
          <span className="beautice-is-a-beauty-clinic-word-press-theme-span2">
            {" "}
            is a Beauty Clinic WordPress Theme.
          </span>
        </span>{" "}
      </div>
      <div className="w-[258px] h-[63px] static">
        <div className="bg-[#ff64ae] rounded-[50%] w-[63px] h-[63px] absolute left-[150px] top-[4525px]"></div>
        <div className="bg-[#ffffff] rounded-[50px] w-10 h-[11px] absolute left-[189px] top-[4551px]"></div>
        <div className="bg-[#ffffff] rounded-[50%] w-1.5 h-1.5 absolute left-[175px] top-[4548px]"></div>
        <div className="bg-[#ffffff] rounded-[50%] w-[13px] h-[13px] absolute left-[162px] top-[4536px]"></div>
        <div className="text-[#ffffff] text-left  text-2xl font-bold absolute left-[247px] top-[4539px] w-[161px] h-[34px]">
          Beautice{" "}
        </div>
      </div>
    </div>
  );
}

interface AddrressInfomationsProps {
  className: string;
}

