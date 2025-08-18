import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "manishsharma40344@gmail.com",
      href: "mailto:manishsharma40344@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 8504866930",
      href: "tel:+918504866930"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Jaipur, Rajasthan, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/manishsharma0024/",
      color: "text-tech-blue"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "#",
      color: "text-tech-purple"
    }
  ];

  return (
    <section className="py-20 bg-gradient-accent" id="contact">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Let's Work <span className="text-tech-blue">Together</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Ready to bring your next project to life with modern MERN Stack development? 
            Let's connect and discuss how we can create something amazing together.
          </motion.p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.href}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ rotate: 360 }}
                  className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4"
                >
                  <info.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">{info.label}</h3>
                <p className="text-gray-200">{info.value}</p>
              </motion.a>
            ))}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex justify-center space-x-6 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2, y: -10 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-white/10 backdrop-blur-sm rounded-full p-4 hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  <social.icon className="w-6 h-6 text-white" />
                </motion.a>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-white text-background hover:bg-gray-100 px-8 py-3 text-lg font-medium shadow-xl"
                onClick={() => window.location.href = 'mailto:manishsharma40344@gmail.com'}
              >
                <Mail className="w-5 h-5 mr-2" />
                Send me an email
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;