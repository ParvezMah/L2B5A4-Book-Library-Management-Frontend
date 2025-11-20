import { Link } from "react-router";


export default function Hero() {
  return (
<section className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center bg-fixed bg-[url('../../public/backgroudImage2.jpg')]">

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-2xl leading-tight">
          Manage Your Library Effortlessly
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200 font-medium">
          Add, track, and organize books with a clean and modern digital library system.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">
          <Link
            to="/books"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 tFext-white font-semibold rounded-lg shadow-lg transition transform hover:scale-105 duration-300"
          >
            Browse Books
          </Link>

          <Link
            to="/create-book"
            className="px-8 py-3 bg-white hover:bg-gray-100 text-gray-900 font-semibold rounded-lg shadow-lg transition transform hover:scale-105 duration-300"
          >
            Add New Book +
          </Link>
        </div>
      </div>

      {/* Bottom Decorative Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
}
