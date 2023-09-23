import React from "react";

const TimelineItem = ({
  number,
  leftContent,
  rightContent,
  textColor,
  shadowColor,
  RightTitle,
  LeftTitle,
}: any) => (
  <div className="flex items-center relative">
    {/* Left Section */}
    <div className="w-full lg:w-1/2 lg:pr-8  mr-[100px]">
      <div className={`p-4   ${shadowColor}`}>
        <div className="text-fuchsia-500 text-2xl font-bold font-['Montserrat']">
          {LeftTitle}
        </div>

        <p style={{ color: textColor }}>{leftContent}</p>
      </div>
    </div>


    <div className="absolute flex items-center justify-center w-8 h-8 transform -translate-x-1/2 -translate-y-4 bg-gradient-to-l from-purple-600 to-fuchsia-500 border-2 border-fuchsia-300 rounded-full left-1/2 sm:translate-y-0">
      <span className="text-white">{number}</span>
    </div>

    {/* Right Section */}
    <div className="w-full lg:w-1/2 lg:pl-8  ml-[100px]">
      <div className={`p-4   ${shadowColor}`}>
        <div className="text-fuchsia-500 text-2xl font-bold font-['Montserrat']">
          {RightTitle}
        </div>
        <p style={{ color: textColor }}>{rightContent}</p>
      </div>
    </div>
  </div>
);

const Timeline = () => {
  return (
    <div>
      <div className="mb-10">
        <div className="text-white text-[32px] font-bold font-['Clash Display'] text-center">
          Timeline
        </div>
        <div className="text-center text-white text-sm font-normal font-['Montserrat'] leading-normal text-center">
          Here is the breakdown of the time we anticipate <br />
          using for the upcoming event.
        </div>
      </div>

      <div className="w-full mx-auto lg:max-w-4xl">
        <div className="relative">
          <div className="absolute hidden w-px h-full transform -translate-x-1/2 bg-indigo-300 lg:block left-1/2" />
          <div className="space-y-12 lg:space-y-8">
            <TimelineItem
              number="1"
              RightTitle="November 18, 2023"
              LeftTitle="Hackathon Announcement"
              leftContent="The getlinked tech hackathon 1.0 is formally announced
              to the general public and teams begin to get ready to register"
              textColor="white"
              shadowColor="shadow-cyan-300"
            />
            <TimelineItem
              number="2"
              RightTitle="Teams Registration begins"
              LeftTitle="November 18, 2023"
              rightContent="Right content for item 2 goes here."
              textColor="white"
              shadowColor="shadow-red-300"
            />
            <TimelineItem
              number="3"
              RightTitle="November 18, 2023"
              LeftTitle="Teams Registration ends"
              leftContent="Interested Participants are no longer Allowed to
              register"
              textColor="white"
              shadowColor="shadow-yellow-300"
            />
            <TimelineItem
              number="4"
              RightTitle="Announcement of the accepted teamsand ideas"
              LeftTitle="November 18, 2023"
              leftContent="Left content for item 4 goes here."
              rightContent="All teams whom idea has been accepted into getlinked tech
              hackathon 1.0 2023 are formally announced"
              textColor="white"
              shadowColor="shadow-lime-300"
            />

            <TimelineItem
              number="5"
              RightTitle="November 18, 2023"
              LeftTitle="Getlinked Hackathon 1.0 Offically Begins"
              leftContent="Accepted teams can now proceed to build their
              ground breaking skill driven solutions"
              textColor="white"
              shadowColor="shadow-lime-300"
            />

            <TimelineItem
              number="6"
              RightTitle="Demo Day"
              LeftTitle="November 18, 2023"
              rightContent="Teams get the opportunity to pitch their projects to judges.
              The winner of the hackathon will also be announced on
              this day"
              textColor="white"
              shadowColor="shadow-lime-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
