import Criteria from "@/components/Abouts/Criteria";
import Faqs from "@/components/Abouts/Faqs";
import Partners from "@/components/Abouts/Partners/Partners";
import Privacy from "@/components/Abouts/Privacy/Privacy";
import Prize from "@/components/Abouts/Prize/Prize";
import Rules from "@/components/Abouts/Rules";
import TimeLines from "@/components/Abouts/TimeLine/TimeLine";
import BigIdea from "@/components/Abouts/idea";
import HeroSection from "@/components/Header/Hero";

import React from "react";

const page = () => {
  return (
    <>
      <main className="flex min-h-screen flex-col">
        <div>
          <HeroSection />

          <BigIdea />
          <Rules />
          <Criteria />
          <Faqs />
          <TimeLines />
          <Prize />
          <Partners />
          <Privacy />
          {/* <Fake2 /> */}
          {/* <Random  /> */}
        </div>
      </main>
    </>
  );
};

export default page;
