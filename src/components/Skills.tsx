const Skills = () => {
  const skills = [
    { name: "HTML", category: "Frontend" },
    { name: "CSS", category: "Frontend" },
    { name: "JavaScript", category: "Frontend" },
    { name: "React.js", category: "Frontend" },
    { name: "Next.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Frontend" },
    { name: "Redux", category: "State Management" },
    { name: "Node.js", category: "Backend" },
    { name: "Express.js", category: "Backend" },
    { name: "MongoDB", category: "Database" },
    { name: "Git & GitHub", category: "Tools" },
  ];

  const categories = ["Frontend", "Backend", "Database", "State Management", "Tools"];
  
  return (
    <section className="py-20 bg-background" id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          Technical <span className="text-tech-blue">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category} className="bg-card rounded-lg p-6 shadow-card border border-border hover:border-tech-blue/50 transition-all duration-300">
              <h3 className="text-xl font-semibold text-tech-green mb-4">{category}</h3>
              <div className="space-y-3">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between p-3 bg-secondary rounded-md hover:bg-secondary/80 transition-colors duration-200"
                    >
                      <span className="text-secondary-foreground font-medium">{skill.name}</span>
                      <div className="w-2 h-2 bg-tech-blue rounded-full"></div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;