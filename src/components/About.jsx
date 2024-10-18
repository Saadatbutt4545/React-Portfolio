import React from "react";
import Services from "./Services";

const About = () => {
  const skills = [
    { name: "Front End Development", image: "/src/assets/icons/code.png" },
    { name: "Digital Marketing", image: "/src/assets/icons/ruler-pen.png" },
    { name: "Microsoft Office", image: "/src/assets/icons/android.png" },
    {
      name: "C++ Programming",
      image: "/src/assets/icons/python-svg.png",
    },
  ];
  return (
    <div className="md:px-10 px-7 sm:-mt-24" id="about">
      <h1 className="text-primary font-semibold text-3xl mt-5">About me:</h1>
      <p className="my-3 text-white md:w-2/3 leading-[2]">
      I am a versatile professional skilled in MS Office, front-end web development, digital marketing, Canva designing, and in C++ programming. 
      I excel at creating user-friendly websites, implementing effective digital marketing strategies, and designing visually appealing content. 
      With proficiency in office tools for data management and presentations, I also have a solid foundation in object-oriented programming and problem-solving with C++. My diverse skill set allows me to handle a variety of tasks, ensuring quality results in both technical and creative projects. i have core understanding of advance UI design
        principles. Here are the major skiills i have.
      </p>
      <div className="md:flex my-7 items-center">
        <div className="text-primary text-8xl font-bold">5+</div>
        <p className="text-white text-2xl md:ml-5">
          Years of experience. Specialised in building apps, while ensuring a
          seamless web experience for end users.
        </p>
      </div>

      {/* skills */}
      <div className="flex flex-col md:flex-row ">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="md:w-[256px] md:h-[254px] bg-light hover:bg-primary flex flex-col items-baseline justify-end md:m-3 my-3 p-5 shadow-sm skills transition-all duration-500"
          >
            <img src={skill.image} alt={skill.name} />
            <p className="mt-3 text-2xl text-white font-semibold">
              {skill.name}
            </p>
          </div>
        ))}
      </div>

      {/* services section */}
      <Services/>
    </div>
  );
};

export default About;
