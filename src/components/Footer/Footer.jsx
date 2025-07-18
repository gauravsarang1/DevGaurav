import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Send,
  ExternalLink,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h2 className="text-2xl font-bold text-white">HarshShop</h2>
            <p className="mt-4 text-gray-400">
              A modern e-commerce platform built with MERN stack, featuring product
              filters, cart, wishlist, and secure checkout. Created with ❤️ by
              <span className="text-white font-semibold"> Gaurav Sarang</span>.
            </p>
            <div className="flex mt-4 space-x-4">
              <a
                href="https://github.com/gauravsarang1"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="hover:text-gray-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/gaurav-sarang-7070b42b8"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="hover:text-gray-300" />
              </a>
              <a
                href="https://x.com/gaurav__sarang1"
                aria-label="Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="hover:text-gray-300" />
              </a>
              <a
                href="https://www.instagram.com/gaurav__sarang/"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="hover:text-gray-300" />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Stay Updated</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to get the latest updates on new features and releases.
            </p>
            <form className="flex items-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 w-full rounded-l-md bg-gray-800 text-white focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">Quick Links</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/shop" className="hover:text-white">
                  Shop
                </a>
              </li>
              <li>
                <a href="/cart" className="hover:text-white">
                  Cart
                </a>
              </li>
              <li>
                <a href="/wishlist" className="hover:text-white">
                  Wishlist
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} DevGaurav. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="/privacy-policy" className="hover:text-white flex items-center">
              Privacy Policy <ExternalLink className="ml-1 w-4 h-4" />
            </a>
            <a href="/terms-of-service" className="hover:text-white flex items-center">
              Terms of Service <ExternalLink className="ml-1 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
