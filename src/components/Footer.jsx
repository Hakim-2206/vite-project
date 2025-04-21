import {Mail, Phone, MapPin} from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-darkblue text-beige py-6 sm:py-8 drop-shadow-2xl">
            <div
                className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-6 sm:gap-8 text-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

                {/* Colonne 1 - Présentation (masquée sur mobile) */}
                <div className="sm:hidden md:block text-left">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-400 mb-2 sm:mb-3">Entreprise Zaabi</h2>
                    <p className="text-xs sm:text-sm text-gray-300 mb-3 sm:mb-4">
                        Artisan peintre à Nice, offrant des services de rénovation intérieure et extérieure avec
                        expertise et soin.
                    </p>
                    <div className="border-t border-gray-400 w-12 mt-4 sm:mt-6"></div>
                </div>

                {/* Colonne 2 - Contact */}
                <div>
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Contact</h4>
                    <ul className="space-y-2 sm:space-y-3 text-xs text-gray-300">
                        <li className="flex justify-center items-center gap-2">
                            <Mail size={18} className="text-mocha"/>
                            <a href="mailto:hafed.zaabi@hotmail.fr"
                               title="Envoyer un email"
                               className="hover:text-mocha transition-colors hover:underline hover:decoration-2">
                                hafed.zaabi@hotmail.fr
                            </a>
                        </li>
                        <li className="flex justify-center items-center gap-2">
                            <Phone size={16} className="text-mocha"/>
                            <a href="tel:0610312085"
                               title="Appeler"
                               className="hover:text-mocha transition-colors hover:underline hover:decoration-2">
                                06 10 31 20 85
                            </a>
                        </li>
                        <li className="flex justify-center items-center gap-2">
                            <MapPin size={16} className="text-mocha"/>
                            <span>Nice, France</span>
                        </li>
                    </ul>
                </div>

                {/* Colonne 3 - Liens utiles */}
                <div className="md:text-left">
                    <h4 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">Liens
                        utiles</h4>
                    <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-gray-300">
                        <li>
                            <a href="#Nos Services" className="relative group inline-block">
                                <span className="hover:text-mocha transition-colors">Nos services</span>
                                <span
                                    className="block h-[1px] max-w-0 group-hover:max-w-full transition-all duration-300 bg-mocha"></span>
                            </a>
                        </li>
                        <li>
                            <a href="/mentions-legales" className="relative group inline-block">
                                <span className="hover:text-mocha transition-colors">Mentions légales</span>
                                <span
                                    className="block h-[1px] max-w-0 group-hover:max-w-full transition-all duration-300 bg-mocha"></span>
                            </a>
                        </li>
                        <li>
                            <a href="/politique-confidentialite" className="relative group inline-block">
                                <span className="hover:text-mocha transition-colors">Politique de confidentialité</span>
                                <span
                                    className="block h-[1px] max-w-0 group-hover:max-w-full transition-all duration-300 bg-mocha"></span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Séparation et Bas de page */}
            <div className="mt-6 sm:mt-8">
                <div className="border-t border-gray-600 w-full mx-auto"></div>
                <div className="text-center mt-3 sm:mt-4 text-xs sm:text-sm text-gray-400">
                    © {new Date().getFullYear()} Entreprise Zaabi. Tous droits réservés.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
