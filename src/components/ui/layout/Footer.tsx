import { Link } from "react-router";
import logo from "./logo.jpg";
export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10">
        <div className=" flex items-center justify-center mb-4 mx-auto space-x-3">
           <img className="w-20 h-20 rounded-full" src={logo} alt="logo"></img>
            <span className="text-2xl font-bold text-gray-900">Librarian</span>
          </div>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-10">
          {/* Logo & Brand */}
        

          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 flex-grow">
            {/* Quick Links */}
            <div>
              <h3 className="text-gray-900 text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link to="/" className="hover:text-blue-500 transition">Home</Link>
                </li>
                <li>
                  <Link to="/books" className="hover:text-blue-500 transition">Books</Link>
                </li>
                <li>
                  <Link to="/borrow-summary" className="hover:text-blue-500 transition">Borrow Summary</Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-blue-500 transition">Services</Link>
                </li>
                <li>
                  <Link to="/membership" className="hover:text-blue-500 transition">Membership</Link>
                </li>
              </ul>
            </div>

            {/* E-books */}
            <div>
              <h3 className="text-gray-900 text-lg font-semibold mb-4">E-books</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link to="/ebooks" className="hover:text-blue-500 transition">E-books</Link>
                </li>
                <li>
                  <Link to="/audiobooks" className="hover:text-blue-500 transition">Audiobooks</Link>
                </li>
              </ul>
            </div>

            {/* About Us */}
            <div>
              <h3 className="text-gray-900 text-lg font-semibold mb-4">About Us</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link to="/mission" className="hover:text-blue-500 transition">Our Mission</Link>
                </li>
                <li>
                  <Link to="/team" className="hover:text-blue-500 transition">Team</Link>
                </li>
                <li>
                  <Link to="/careers" className="hover:text-blue-500 transition">Careers</Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-gray-900 text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <Link to="/help-center" className="hover:text-blue-500 transition">Help Center</Link>
                </li>
                <li>
                  <Link to="/faqs" className="hover:text-blue-500 transition">FAQs</Link>
                </li>
                <li>
                  <Link to="/feedback" className="hover:text-blue-500 transition">Feedback</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="mt-10 border-t border-gray-300 pt-6 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Librarian. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
