import { Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="py-20 bg-secondary/30" id="experience">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-foreground"
        >
          Work <span className="text-tech-green">Experience</span>
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="bg-card rounded-lg p-8 shadow-card border border-border hover:border-tech-green/50 transition-all duration-300"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-tech-blue mb-2">Software Developer – Trainee</h3>
                <p className="text-xl text-card-foreground font-medium">Searching Yard Group</p>
              </div>
              <div className="mt-4 md:mt-0 text-muted-foreground">
                <div className="flex items-center mb-2">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>Dec 2024 – Jun 2025</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  <span>Jaipur, Rajasthan</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  className="w-2 h-2 bg-tech-green rounded-full mt-2 mr-4 flex-shrink-0"
                ></motion.div>
                <p className="text-card-foreground">
                  Developed & deployed a full-stack web app using <span className="text-tech-blue font-semibold">Next.js</span>, 
                  <span className="text-tech-purple font-semibold"> TypeScript</span>, 
                  <span className="text-tech-green font-semibold"> Node.js</span>, 
                  <span className="text-tech-blue font-semibold"> MongoDB</span> focusing on performance and user experience.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.0 }}
                  className="w-2 h-2 bg-tech-green rounded-full mt-2 mr-4 flex-shrink-0"
                ></motion.div>
                <p className="text-card-foreground">
                  Created a dynamic admin dashboard for backend management and data visualization.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                  className="w-2 h-2 bg-tech-green rounded-full mt-2 mr-4 flex-shrink-0"
                ></motion.div>
                <p className="text-card-foreground">
                  Collaborated with seniors for seamless frontend-backend integration and user experience optimization.
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                viewport={{ once: true }}
                className="flex items-start"
              >
                <motion.div 
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 2.0 }}
                  className="w-2 h-2 bg-tech-green rounded-full mt-2 mr-4 flex-shrink-0"
                ></motion.div>
                <p className="text-card-foreground">
                  Practical work in <span className="text-tech-blue font-semibold">Git</span>, 
                  <span className="text-tech-green font-semibold"> REST APIs</span>, modular architecture, and workflow optimization.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;