import ExperienceItem from "@/components/experience-item";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Tech Innovations Inc.",
      period: "2021 - Present",
      description:
        "Led the development of a microservices architecture that improved system scalability by 40%. Mentored junior developers and implemented code review processes that reduced bugs by 25%.",
    },
    {
      title: "Software Engineer",
      company: "Digital Solutions Ltd.",
      period: "2018 - 2021",
      description:
        "Developed and maintained multiple React applications with complex state management. Collaborated with UX designers to implement responsive interfaces that increased user engagement by 30%.",
    },
    {
      title: "Junior Developer",
      company: "WebTech Startup",
      period: "2016 - 2018",
      description:
        "Built and maintained client websites using JavaScript, HTML, and CSS. Implemented responsive designs and integrated third-party APIs for enhanced functionality.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 px-6 md:px-12 bg-secondary/30 dark:bg-secondary/10"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight mb-12 text-center">
          Work Experience
        </h2>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={exp.title}
              {...exp}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
