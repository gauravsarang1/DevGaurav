import { useState } from "react";
import { 
  FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, 
  FaTwitter, FaInstagram, FaPaperPlane, FaUser, FaComment,
  FaRocket, FaHeart, FaLightbulb, FaCheckCircle, FaExclamationCircle
} from 'react-icons/fa';
import { HiSparkles, HiLocationMarker } from 'react-icons/hi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = async (templateParams) => {
    // EmailJS configuration
    const serviceId = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
    const templateId = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
    const publicKey = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key
    
    try {
      // Using EmailJS REST API
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          service_id: serviceId,
          template_id: templateId,
          user_id: publicKey,
          template_params: templateParams
        })
      });

      if (response.ok) {
        return { success: true };
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Email sending error:', error);
      return { success: false, error: error.message };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    setSubmitMessage('');

    // Validate form
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setSubmitStatus('error');
      setSubmitMessage('Please fill in all fields.');
      setIsSubmitting(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error');
      setSubmitMessage('Please enter a valid email address.');
      setIsSubmitting(false);
      return;
    }

    try {
      // Prepare email template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Gaurav Sarang', // Your name
        to_email: 'gauravsarang223@gmail.com' // Your email
      };

      // Send email
      const result = await sendEmail(templateParams);

      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage('Message sent successfully! I\'ll get back to you soon.');
        
        // Clear form after successful submission
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });

        // Clear success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('');
          setSubmitMessage('');
        }, 5000);
      } else {
        setSubmitStatus('error');
        setSubmitMessage('Failed to send message. Please try again or contact me directly.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setSubmitMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { 
      icon: <FaEnvelope />, 
      label: 'Email',
      value: 'gauravsarang223@gmail.com',
      href: 'mailto:gauravsarang223@gmail.com',
      color: 'from-red-500 to-pink-500'
    },
    { 
      icon: <FaPhone />, 
      label: 'Phone',
      value: '(+91) 95037 83937',
      href: 'tel:+919503783937',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      icon: <FaMapMarkerAlt />, 
      label: 'Location',
      value: 'Ameerpeth, Hyderabad',
      href: '#',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const socialLinks = [
    { 
      icon: <FaGithub />, 
      href: 'https://github.com/gauravsarang1', 
      label: 'GitHub',
      color: 'hover:bg-gray-800'
    },
    { 
      icon: <FaLinkedin />, 
      href: 'https://www.linkedin.com/in/gaurav-sarang-7070b42b8', 
      label: 'LinkedIn',
      color: 'hover:bg-blue-600'
    },
    { 
      icon: <FaTwitter />, 
      href: 'https://x.com/gaurav__sarang1', 
      label: 'Twitter',
      color: 'hover:bg-blue-400'
    },
    { 
      icon: <FaInstagram />, 
      href: 'https://www.instagram.com/gaurav__sarang/', 
      label: 'Instagram',
      color: 'hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500'
    }
  ];

  const quickMessages = [
    "Let's discuss a project",
    "I'd like to collaborate",
    "Tell me about your services",
    "I have a question"
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-1000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm mb-6">
            <FaRocket className="mr-2 text-orange-400" />
            Let's work together
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
            Get In Touch
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ready to bring your ideas to life? I'm always excited to discuss new projects and opportunities.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Left Column - Contact Info */}
            <div className="space-y-8">
              
              {/* Contact Information Cards */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <HiSparkles className="mr-3 text-yellow-400" />
                  Contact Information
                </h3>
                
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="block bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 group border border-white/20"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-white/60 text-sm font-medium">{item.label}</p>
                        <p className="text-white text-lg font-semibold">{item.value}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              {/* Social Links */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <FaHeart className="mr-2 text-red-400" />
                  Follow Me
                </h4>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={link.label}
                      className={`bg-white/20 backdrop-blur-sm text-white p-4 rounded-xl ${link.color} transition-all duration-300 hover:scale-110 hover:shadow-lg border border-white/30`}
                    >
                      <span className="text-xl">{link.icon}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Message Suggestions */}
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
                  <FaLightbulb className="mr-2 text-yellow-400" />
                  Quick Start
                </h4>
                <div className="space-y-3">
                  {quickMessages.map((message, index) => (
                    <button
                      key={index}
                      onClick={() => setFormData({...formData, subject: message})}
                      className="w-full text-left bg-white/10 hover:bg-white/20 text-white/80 hover:text-white p-3 rounded-lg transition-all duration-300 hover:scale-105 border border-white/20"
                    >
                      "{message}"
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Column - Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/20">
              <h3 className="text-2xl font-semibold mb-8 text-white text-center flex items-center justify-center">
                <FaComment className="mr-3 text-blue-400" />
                Send Me a Message
              </h3>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white/80 mb-2 font-medium">
                      <FaUser className="inline mr-2" />
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50 transition-all duration-300"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white/80 mb-2 font-medium">
                      <FaEnvelope className="inline mr-2" />
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50 transition-all duration-300"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-white/80 mb-2 font-medium">
                    <HiSparkles className="inline mr-2" />
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50 transition-all duration-300"
                    placeholder="What's this about?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-white/80 mb-2 font-medium">
                    <FaComment className="inline mr-2" />
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent text-white placeholder-white/50 resize-none transition-all duration-300"
                    placeholder="Tell me about your project, ideas, or how I can help you..."
                    required
                  />
                </div>
                
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? 'bg-gray-500 cursor-not-allowed'
                      : submitStatus === 'success'
                      ? 'bg-green-500 hover:bg-green-600'
                      : submitStatus === 'error'
                      ? 'bg-red-500 hover:bg-red-600'
                      : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 hover:scale-105 shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : submitStatus === 'success' ? (
                    <>
                      <FaCheckCircle />
                      <span>Message Sent!</span>
                    </>
                  ) : submitStatus === 'error' ? (
                    <>
                      <FaExclamationCircle />
                      <span>Try Again</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>

              {/* Status Messages */}
              {submitStatus && submitMessage && (
                <div className={`mt-6 p-4 backdrop-blur-sm border rounded-lg text-center ${
                  submitStatus === 'success' 
                    ? 'bg-green-500/20 border-green-400/30 text-green-300'
                    : 'bg-red-500/20 border-red-400/30 text-red-300'
                }`}>
                  <div className="flex items-center justify-center space-x-2">
                    {submitStatus === 'success' ? (
                      <FaCheckCircle className="text-green-400" />
                    ) : (
                      <FaExclamationCircle className="text-red-400" />
                    )}
                    <span>{submitMessage}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* EmailJS Setup Instructions */}
          <div className="mt-16 bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 max-w-4xl mx-auto">
            <h4 className="text-xl font-bold text-white mb-4 flex items-center">
              <FaLightbulb className="mr-2 text-yellow-400" />
              Setup Instructions
            </h4>
            <div className="text-white/80 space-y-4">
              <p>To enable email sending, you need to set up EmailJS:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4">
                <li>Go to <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">EmailJS.com</a> and create an account</li>
                <li>Create an email service (Gmail, Outlook, etc.)</li>
                <li>Create an email template with these variables: from_name, from_email, subject, message, to_name, to_email</li>
                <li>Replace YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, and YOUR_PUBLIC_KEY in the code</li>
                <li>Test your setup!</li>
              </ol>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 max-w-2xl mx-auto">
              <h4 className="text-2xl font-bold text-white mb-4">
                Ready to Start Something Amazing?
              </h4>
              <p className="text-white/80 mb-6">
                Whether it's a new project, collaboration, or just a chat about technology, 
                I'm always excited to connect with fellow creators and innovators.
              </p>
              <div className="flex justify-center">
                <div className="flex items-center space-x-2 text-white/60">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span>Usually responds within 24 hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Contact;