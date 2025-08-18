import { Button } from "@/components/ui/button";
import { ExternalLink, Globe, Code } from "lucide-react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Rajasthan Demography Webapp",
      subtitle: "(Frontend)",
      description: "UI for Rajasthan's demographic data, Google Highcharts for stats, Leaflet.js maps.",
      technologies: ["React.js", "Google Highcharts", "Leaflet.js", "CSS"],
      link: "https://rajashtanfoundation.netlify.app/",
      type: "Frontend"
    },
    {
      title: "Food Delivery Webapp",
      subtitle: "(Zaika Foods)",
      description: "REST APIs (cart/order/user), JWT Auth, Stripe payments, real-time order verification.",
      technologies: ["MERN Stack", "JWT", "Stripe", "REST APIs"],
      link: "https://food-deliver-webapp.netlify.app/",
      type: "Full Stack"
    }
  ];

  return (
    <section className="py-20 bg-secondary/20" id="projects">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-8 text-foreground"
        >
          Featured <span className="text-tech-blue">Projects</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto"
        >
          Showcasing my expertise in MERN Stack development through real-world applications
        </motion.p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -10 }}
              className="group bg-card rounded-xl p-8 shadow-card border border-border hover:border-tech-blue/50 hover:shadow-glow transition-all duration-500"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-gradient-accent p-3 rounded-lg">
                    {project.type === "Full Stack" ? (
                      <Code className="w-6 h-6 text-white" />
                    ) : (
                      <Globe className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.type === "Full Stack" 
                        ? "bg-tech-green/20 text-tech-green" 
                        : "bg-tech-blue/20 text-tech-blue"
                    }`}>
                      {project.type}
                    </span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-card-foreground mb-2 group-hover:text-tech-blue transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-tech-green font-medium text-lg mb-4">{project.subtitle}</p>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-secondary text-secondary-foreground rounded-md text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  className="w-full bg-tech-blue hover:bg-tech-blue/90 text-white font-medium group-hover:shadow-glow transition-all duration-300"
                  onClick={() => window.open(project.link, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Project
                </Button>
              </motion.div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground text-lg">
            More projects coming soon! Follow my journey in 
            <span className="text-tech-blue font-semibold"> MERN Stack</span> development.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;