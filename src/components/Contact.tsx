import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Let's Work <span className="text-tech-blue">Together</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Ready to bring your next project to life with modern MERN Stack development? 
            Let's connect and discuss how we can create something amazing together.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 border border-white/20"
              >
                <div className="bg-white/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{info.label}</h3>
                <p className="text-gray-200">{info.value}</p>
              </a>
            ))}
          </div>
          
          <div className="text-center">
            <div className="flex justify-center space-x-6 mb-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-sm rounded-full p-4 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1 border border-white/20"
                >
                  <social.icon className="w-6 h-6 text-white" />
                </a>
              ))}
            </div>
            
            <Button 
              size="lg" 
              className="bg-white text-background hover:bg-gray-100 px-8 py-3 text-lg font-medium shadow-xl"
              onClick={() => window.location.href = 'mailto:manishsharma40344@gmail.com'}
            >
              <Mail className="w-5 h-5 mr-2" />
              Send me an email
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;