import MobileTimeLine from "@/components/Sections/TimeLine/MobileTimeLine";
import Timeline from "@/components/Sections/TimeLine/TimeLine";
import React from "react";

const page = () => {
  return (
    <>
      <div className="lg:block md:block hidden">
        <Timeline />
      </div>

      <div className="lg:hidden md:hidden block">
        <MobileTimeLine />
      </div>
    </>
  );
};

export default page;
