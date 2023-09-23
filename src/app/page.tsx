import Criteria from "@/components/Sections/Criteria";
import Faqs from "@/components/Sections/Faqs";
import Partners from "@/components/Sections/Partners/Partners";
import Privacy from "@/components/Sections/Privacy/Privacy";
import Prize from "@/components/Sections/Prize/Prize";
import Rules from "@/components/Sections/Rules";
import TimeLines from "@/components/Sections/TimeLine/TimeLine";
import BigIdea from "@/components/Sections/idea";
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
