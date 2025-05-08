import { Badge } from "@/components/ui/badge";

const About = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "GraphQL",
    "AWS",
    "Docker",
    "Git",
    "CI/CD",
    "TDD",
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 md:px-12 bg-secondary/30 dark:bg-secondary/10"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight mb-12 text-center">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-lg mb-4">
              I'm a passionate software engineer with over 5 years of experience
              building web applications. I specialize in creating responsive,
              user-friendly interfaces with modern JavaScript frameworks.
            </p>
            <p className="text-lg mb-4">
              My journey in software development began during my computer
              science studies, where I discovered my passion for creating
              elegant solutions to complex problems. Since then, I've worked
              with startups and established companies to deliver high-quality
              software products.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me hiking, reading tech blogs,
              or contributing to open-source projects.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Skills & Expertise</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="text-sm py-2 px-4 rounded-2xl"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
