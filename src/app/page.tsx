import Criteria from "@/components/Abouts/Criteria";
import Faqs from "@/components/Abouts/Faqs";
import Rules from "@/components/Abouts/Rules";
import TimeLines from "@/components/Abouts/TimeLine/TimeLine";

import BigIdea from "@/components/Abouts/idea";
import HeroSection from "@/components/Header/Hero";
import NavbarItems from "@/components/Header/NavbarItems";
import React from "react";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col">
      <NavbarItems />

      <div className="">
        <HeroSection />
        <BigIdea />
        <Rules />
        <Criteria/>
        <Faqs/>
        <TimeLines />
      </div>
    </main>
  );
};

export default page;
