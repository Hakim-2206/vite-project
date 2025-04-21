import {motion} from 'framer-motion';
import {useInView} from 'react-intersection-observer';
import bg_experience from "/white.jpg";

const services = [
    "Travaux de Peinture",
    "Travaux de Réfection",
    "Maçonnerie légère",
    "Travaux de Menuiserie",
    "Agencement de Cuisine",
    "Travaux Divers",
];

const ExperienceSection = () => {
    const [textImgRef, textImgInView] = useInView({triggerOnce: true, threshold: 0.2});
    return (
        <section className="bg-lightgray py-2.5 drop-shadow-md">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">

                {/* Texte + Image */}
                <div className="flex flex-col md:flex-row items-center gap-12 mb-10" ref={textImgRef}>
                    <motion.div
                        className="md:w-1/2"
                        initial={{opacity: 0, x: -30}}
                        animate={textImgInView ? {opacity: 1, x: 0} : {}}
                        transition={{duration: 0.6, ease: 'easeOut'}}
                    >
                        <div className="mb-6">
                            <h2 className="text-3xl md:text-4xl text-darkblue/60 relative inline-block">
                                Plus de 30 ans d&apos;expérience
                                <span className="block w-16 h-[3px] mt-5 bg-blue-900/60 rounded"></span>
                            </h2>
                        </div>
                        <p className="text-base md:text-lg text-graydeep mb-5 leading-relaxed">
                            Avec plus de trois décennies de savoir-faire, l&apos;Entreprise Zaabi garantit un travail
                            soigné, des finitions impeccables et un respect total de votre environnement.
                        </p>
                        <ul className="space-y-3 text-graydeep text-sm md:text-base mt-4 pl-4 list-disc marker:text-blue-900/60">
                            <li>Travail professionnel et minutieux</li>
                            <li>Nettoyage complet après chaque intervention</li>
                            <li>Utilisation de matériaux haut de gamme</li>
                            <li>Respect des délais et satisfaction garantie</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className="md:w-1/2 relative"
                        initial={{opacity: 0, x: 30}}
                        animate={textImgInView ? {opacity: 1, x: 0} : {}}
                        transition={{duration: 0.6, ease: 'easeOut'}}
                    >
                        <div className="rounded-2xl overflow-hidden shadow-md relative">
                            <img
                                src={bg_experience}
                                alt=""
                                aria-hidden="true"
                                className="w-full h-full object-cover max-h-[450px]"
                            />
                            <div
                                className="absolute inset-0 bg-gradient-to-l from-lightgray/0 via-lightgray/40 to-lightgray/90 md:block hidden"/>
                        </div>
                    </motion.div>
                </div>

                <div className="mt-10 mb-20">
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 gap-4 text-center mb-6">
                        {services.map((item, index) => (
                            <div
                                key={index}
                                className="drop-shadow-2xl services-grid text-gray-300 text-base md:text-lg bg-darkblue/80 py-3 px-2 rounded-lg shadow-2xl hover:shadow-md transition antialiased break-words text-center"
                            >
                                {item}
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default ExperienceSection;
