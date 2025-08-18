import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Master of Computer Applications",
      institution: "Amity University",
      period: "Jan 2024 – Dec 2025",
      status: "In Progress"
    },
    {
      degree: "Bachelor of Computer Application",
      institution: "Maharishi Arvind Institute of Science and Management",
      period: "2021 - 2023",
      status: "Completed"
    }
  ];

  return (
    <section className="py-20 bg-background" id="education">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground">
          <span className="text-tech-purple">Education</span>
        </h2>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {education.map((edu, index) => (
            <div 
              key={index}
              className="bg-card rounded-lg p-8 shadow-card border border-border hover:border-tech-purple/50 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex items-start space-x-4">
                  <div className="bg-tech-purple/20 p-3 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-tech-purple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2">{edu.degree}</h3>
                    <p className="text-tech-blue font-medium text-lg">{edu.institution}</p>
                  </div>
                </div>
                
                <div className="mt-4 md:mt-0">
                  <div className="flex items-center mb-2">
                    <Calendar className="w-5 h-5 mr-2 text-muted-foreground" />
                    <span className="text-muted-foreground">{edu.period}</span>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                    edu.status === "Completed" 
                      ? "bg-tech-green/20 text-tech-green" 
                      : "bg-tech-blue/20 text-tech-blue"
                  }`}>
                    {edu.status}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;