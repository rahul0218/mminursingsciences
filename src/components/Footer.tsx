import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', path: '/about' },
    { name: 'Admissions', path: '/contact' },
    { name: 'Courses', path: '/courses' },
    { name: 'Faculty', path: '/faculty' },
  ];

  const resources = [
    { name: 'Library', path: '#' },
    { name: 'Student Portal', path: '#' },
    { name: 'Alumni', path: '#' },
    { name: 'Careers', path: '#' },
  ];

  return (
    <footer className="bg-dark-blue text-border-gray">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Institute Info */}
          <div className="md:col-span-2 lg:col-span-1">
             <Link to="/" className="flex items-center gap-3 mb-4">
                <img src="/images/logo.png" alt="MMINS Logo" className="h-8 w-8" />
                <span className="text-xl font-bold text-white">Maheshtala Municipal Institute Of Nursing Sciences</span>
             </Link>
             <p className="text-sm">Maheshtala Municipal Institute Of Nursing Sciences. Fostering excellence in nursing education and healthcare leadership.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="text-sm hover:text-white transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-4">Resources</h3>
            <ul className="space-y-2">
              {resources.map(link => (
                <li key={link.name}>
                  <a href={link.path} className="text-sm hover:text-white transition-colors">{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-white uppercase mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-text-gray flex-shrink-0" />
                <span className="text-sm">B1-38/1, New Santoshpur, Block-B, P.O. - Santoshpur, P.S.-Maheshtala, Kolkata-700142</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-text-gray" />
                <span className="text-sm">+91-8334919514</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-text-gray" />
                <span className="text-sm">maheshtalanursingschool@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-gray/50 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-text-gray">&copy; {new Date().getFullYear()} Maheshtala Municipal Institute Of Nursing Sciences. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <a href="#" className="text-text-gray hover:text-white"><Facebook size={20} /></a>
            <a href="#" className="text-text-gray hover:text-white"><Twitter size={20} /></a>
            <a href="#" className="text-text-gray hover:text-white"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
