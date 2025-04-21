import {motion} from 'framer-motion';
import {
    LiaCertificateSolid,
    LiaFileSignatureSolid,
    LiaBrushSolid,
    LiaUsersSolid,
} from 'react-icons/lia';
import {useInView} from 'react-intersection-observer';

const features = [
    {
        icon: <LiaFileSignatureSolid size={32} className="text-blue-900/70"/>,
        title: 'Devis Gratuit',
        description: 'Sans engagement, rapide et transparent.',
    },
    {
        icon: <LiaCertificateSolid size={32} className="text-blue-900/70"/>,
        title: '+30 ans d’expérience',
        description: 'Un savoir-faire reconnu depuis des années.',
    },
    {
        icon: <LiaBrushSolid size={32} className="text-blue-900/70"/>,
        title: 'Fournisseurs de qualité',
        description: 'Des matériaux sélectionnés avec exigence.',
    },
    {
        icon: <LiaUsersSolid size={32} className="text-blue-900/70"/>,
        title: 'Retours clients positifs',
        description: 'Votre satisfaction est notre priorité.',
    },
];

const FeatureCard = ({icon, title, description, index}) => {
    const [ref, inView] = useInView({triggerOnce: true, threshold: 0.3});

    return (
        <motion.div
            ref={ref}
            className="bg-beige rounded-2xl shadow-md p-6 text-center flex flex-col items-center justify-between h-full"
            initial={{opacity: 0, y: 20}}
            animate={inView ? {opacity: 1, y: 0} : {}}
            transition={{
                duration: 0.6,
                delay: inView ? index * 0.1 : 0,
                ease: 'easeInOut',
            }}
        >
            <div className="mb-4" aria-hidden="true">{icon}</div>
            <h3 className="text-lg font-semibold text-darkblue/80 mb-2">{title}</h3>
            <p className="text-sm text-graydeep sm:text-base">{description}</p>
        </motion.div>
    );
};

const Features = () => {
    return (
        <section id="Nos Services" className="bg-lightgray py-20 px-4">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-4xl font-bold text-darkblue/60 mb-2 mes-travaux">
                    Nos services
                </h2>
                <div className="w-16 h-[3px] mx-auto bg-blue-900/60 rounded mb-10"/>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} index={index}/>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
