import Header from "./components/Header";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-100 to-blue-50 text-gray-800">
      {/* Header */}
      <Header />

      {/* Ana içerik */}
      <main className="flex-grow max-w-7xl mx-auto p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-blue-200 text-blue-700 text-center py-4 shadow-inner">
        © 2025 BlogApp. Tüm hakları saklıdır.
      </footer>
    </div>
  );
}

export default App;
