import {motion} from 'framer-motion';
import bg_header from "/pexels.jpg";

const Header = () => {
    return (
        <section
            id={"Accueil"}
            className="shadow-2xl relative h-[80vh] bg-cover bg-center bg-no-repeat flex items-center justify-center text-offwhite"
            style={{
                backgroundImage: `url(${bg_header})`,
            }}
        >
            {/* Overlay sombre général */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 drop-shadow-md"></div>

            {/* Dégradé sombre en bas pour la transition */}
            <div
                className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-darkblue drop-shadow-lg"></div>

            {/* Contenu centré */}
            <div className="relative z-10 text-center px-4 max-w-[800px] mx-auto space-y-6">
                <motion.h1
                    className="text-5xl sm:text-4xl md:text-7xl font-bold text-gray-300 artisan-peintre"
                    initial={{x: -200, opacity: 0}}
                    animate={{x: 0, opacity: 1}}
                    transition={{duration: 0.8, ease: "easeOut"}}
                >
                    Artisan - Peintre
                </motion.h1>
                <motion.p
                    className="text-xl md:text-2xl text-gray-300"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 1, delay: 0.3}}
                >
                    L’élégance et la précision au service de vos projets.
                </motion.p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="#Contact"
                        className="bg-blue-900/60 hover:bg-blue-900/30 text-offwhite font-semibold px-6 py-4 rounded-md transition-all duration-500"
                    >
                        Demander un Devis
                    </a>
                    <a
                        href="#Nos Services"
                        className="bg-offwhite text-darkblue/50 hover:text-offwhite hover:bg-cobalt/10 font-semibold px-6 py-4 rounded-md transition-all duration-500"
                    >
                        Nos Services
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Header;
