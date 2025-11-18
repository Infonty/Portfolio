import React from "react";
import "./text.css"; // Assuming you use this for styling
import VerticalCard from "./Card";

const experiences = [
  {
    imageUrl: "",
    link: "https://www.refactor.academy/",
    title: "Full Stack Developer",
    company: "Refactor Academy",
    description:
      "Sep 2025 - Present | Building full‑stack applications with React and Node.js, focused on performance and scalability.",
  },
  {
    imageUrl: "",
    link: "https://vectoscalar.com/",
    title: "Software Engineer",
    company: "Vectoscalar Technologies",
    description:
      "Jan 2022 - Aug 2025 | Developed scalable backend APIs using NestJS following microservices architecture, ensuring high performance and reliability.",
  }
];

const Experience = () => {
  return (
    <div name="experience" className="w-full  antialiased h-screen bg-[#0a192f]">
      <div className="min-h-screen py-8 md:px-32 md:pl-[200px] pt-[200px] sm:pt-[150px] px-4">
        <h1 className="text-3xl font-bold text-center text-gray-300 mb-10 border-b-[2px] border-yellow-600">
          Experience
        </h1>

        <div className="flex flex-col space-y-4">
          {experiences.map((exp, idx) => (
            <VerticalCard
              key={idx}
              imageUrl={exp.imageUrl}
              link={exp.link}
              title={exp.title}
              college={exp.company} // reusing prop name from VerticalCard to keep same UI
              description={exp.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;