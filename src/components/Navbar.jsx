import {useState, useEffect} from "react";
import {FiMenu, FiX, FiMapPin} from "react-icons/fi";
import {Link} from "react-router";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 drop-shadow-md transition-all duration-300 ${
                scrolled
                    ? "bg-transparent backdrop-blur-md border-b border-white/10 shadow-sm"
                    : "bg-darkblue shadow-lg"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center gap-3 text-xl logo-name text-gray-400 tracking-wide">
            <span>
              Entreprise{" "}
                <span
                    className={`${scrolled ? "text-gray-400" : "text-offwhite"}`}
                >
                {" "}
                    Zaabi
              </span>
            </span>
                        <span className="flex items-center text-xs text-gray-400 lieu">
              <FiMapPin className="text-cobalt/70 mr-1"/>
              Nice et alentours
            </span>
                    </div>

                    {/* Menu Desktop */}
                    <nav className="hidden md:flex space-x-8 nav-item">
                        {["Accueil", "Nos Services", "Contact", "Mentions Légales"].map((item, index) => {
                            const isMentions = item === "Mentions Légales";

                            return isMentions ? (
                                <Link
                                    key={index}
                                    to="/mentions-legales"
                                    className="relative group font-semibold text-sm sm:text-base transition-colors duration-300"
                                >
                                <span
                                    className={`${scrolled ? "text-mocha" : "text-gray-300"} group-hover:text-mocha/80 transition-colors`}
                                >
                                    {item}
                                </span>
                                    <span
                                        className="absolute left-0 -bottom-1 h-[1px] bg-lightgray max-w-0 group-hover:max-w-full transition-all duration-300 w-full"></span>
                                </Link>
                            ) : (
                                <a
                                    key={index}
                                    href={`/#${item}`}
                                    className="relative group font-semibold text-sm sm:text-base transition-colors duration-300"
                                >
                                <span
                                    className={`${scrolled ? "text-mocha" : "text-gray-300"} group-hover:text-mocha/80 transition-colors`}
                                >
                                    {item}
                                </span>
                                    <span
                                        className="absolute left-0 -bottom-1 h-[1px] bg-lightgray max-w-0 group-hover:max-w-full transition-all duration-300 w-full"></span>
                                </a>
                            );
                        })}
                    </nav>

                    {/* Burger menu mobile */}
                    <button
                        className="md:hidden text-gray-400 focus:outline-none cursor-pointer"
                        onClick={() => setOpen(!open)}
                        aria-label="Menu"
                    >
                        {open ? <FiX size={24}/> : <FiMenu size={24}/>}
                    </button>
                </div>
            </div>

            {open && (
                <div
                    className={`text-center sticky top-0 z-50 drop-shadow-md transition-all duration-300 ${
                        scrolled
                            ? "bg-darkblue/30 backdrop-blur-md border-b border-white/10 shadow-sm"
                            : "bg-darkblue shadow-lg"
                    }`}
                    role="dialog"
                    aria-labelledby="mobileMenuTitle"
                    aria-hidden={!open}
                >
                    <nav
                        className="flex flex-col space-y-3 px-4 py-4 nav-item"
                        aria-labelledby="mobileMenuTitle"
                    >
                        {/* Titre du menu pour l'accessibilité */}
                        <h2 id="mobileMenuTitle" className="sr-only">
                            Menu principal
                        </h2>

                        {["Accueil", "Nos Services", "Contact", "Mentions Légales"].map((item, index) => {
                            const isMentions = item === "Mentions Légales";

                            return isMentions ? (
                                <Link
                                    key={index}
                                    to="/mentions-legales"
                                    onClick={() => setOpen(false)}
                                    className="text-gray-300 hover:text-gray-500 hover:underline underline-offset-4 transition-all duration-300 font-medium"
                                    tabIndex={0} // Assure que ce lien est accessible par tabulation
                                    aria-label={item}
                                >
                                    {item}
                                </Link>
                            ) : (
                                <a
                                    key={index}
                                    href={`/#${item}`}
                                    onClick={() => setOpen(false)}
                                    className="text-gray-300 hover:text-gray-500 hover:underline underline-offset-4 transition-all duration-300 font-medium"
                                    tabIndex={0} // Assure que ce lien est accessible par tabulation
                                    aria-label={item}
                                >
                                    {item}
                                </a>
                            );
                        })}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;
