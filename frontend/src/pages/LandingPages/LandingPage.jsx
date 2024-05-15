import React, { useRef } from "react";
import { ForStudents } from "./ForStudents";
import { ForTeachers } from "./ForTeachers";
import { HomePage } from "./HomePage";
import { NavBar } from "./NavBar";
import { WhyUnihelp } from "./WhyUnihelp";

export const LandingPage = () => {
  const homeRef = useRef(null);
  const teachersRef = useRef(null);
  const studentsRef = useRef(null);
  const whyUnihelpRef = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex items-center justify-center flex-col">
      <NavBar
        scrollToSection={scrollToSection}
        refs={{
          teachersRef,
          studentsRef,
          whyUnihelpRef,
          homeRef,
        }}
      />
      <div className="md:pt-[4rem] pt-[6rem]">
        <div ref={homeRef}>
          <HomePage
            scrollToSection={scrollToSection}
            refs={{ teachersRef, studentsRef, whyUnihelpRef }}
          />
        </div>
        <div ref={teachersRef}>
          <ForTeachers />
        </div>
        <div ref={studentsRef}>
          <ForStudents />
        </div>
        <div ref={whyUnihelpRef}>
          <WhyUnihelp />
        </div>
      </div>
    </div>
  );
};
