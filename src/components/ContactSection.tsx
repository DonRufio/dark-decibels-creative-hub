import { useState } from 'react';
import { Mail, Phone, MapPin, Eye } from 'lucide-react';
import { useToast } from '../components/ui/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [revealEmail, setRevealEmail] = useState(false);
  const [revealPhone, setRevealPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleRevealEmail = () => {
    setRevealEmail(true);
    console.log('Email revealed');
  };

  const handleRevealPhone = () => {
    setRevealPhone(true);
    console.log('Phone revealed');
  };

  return (
    <section id="contact" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <Mail className="text-primary w-6 h-6" />
              <div>
                <h3 className="font-semibold text-white">Email</h3>
                {revealEmail ? (
                  <p className="text-gray-400">contact@darkdecibel.com</p>
                ) : (
                  <button
                    onClick={handleRevealEmail}
                    className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Click to reveal email</span>
                  </button>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Phone className="text-primary w-6 h-6" />
              <div>
                <h3 className="font-semibold text-white">Phone</h3>
                {revealPhone ? (
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                ) : (
                  <button
                    onClick={handleRevealPhone}
                    className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Click to reveal phone</span>
                  </button>
                )}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <MapPin className="text-primary w-6 h-6" />
              <div>
                <h3 className="font-semibold text-white">Location</h3>
                <p className="text-gray-400">Los Angeles, CA</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full p-3 bg-[#0A0A0A] border border-gray-700 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full p-3 bg-[#0A0A0A] border border-gray-700 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
                rows={4}
                className="w-full p-3 bg-[#0A0A0A] border border-gray-700 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-primary text-black font-semibold rounded-lg hover:glow transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;