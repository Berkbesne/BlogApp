import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        {/* Logo / Başlık */}
        <div className="text-2xl font-bold text-blue-700 hover:text-blue-900 transition-colors duration-300 cursor-pointer">
          <Link to="/">BlogApp</Link>
        </div>

        {/* Navigasyon Menüsü */}
        <nav className="flex space-x-8">
          <Link
            to="/"
            className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300"
          >
            Anasayfa
          </Link>
          <Link
            to="/about"
            className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300"
          >
            Hakkımızda
          </Link>
          <Link
            to="/contact"
            className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-300"
          >
            İletişim
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
