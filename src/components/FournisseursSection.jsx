import {GrValidate} from "react-icons/gr";

const FournisseursSection = () => {
    return (
        <section className="bg-offwhite py-20">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
                {/* Titre principal */}
                <div className="mb-10">
                    <h2 className="text-3xl md:text-4xl text-darkblue/60">
                        Des fournisseurs sélectionnés pour leur excellence
                    </h2>
                    <p className="text-base md:text-lg text-graydeep mt-4">
                        La qualité commence par les bons matériaux
                    </p>
                    <div className="w-16 h-[3px] mt-4 mx-auto bg-blue-900/60 rounded"/>
                </div>

                {/* Texte explicatif */}
                <div className="max-w-3xl mx-auto md:text-base text-graydeep leading-relaxed mb-12">
                    <p>
                        Depuis toujours, nous accordons une importance particulière au choix de nos partenaires.
                        Nos matériaux proviennent exclusivement de marques réputées pour leur durabilité,
                        leur rendu professionnel et leur respect de l’environnement.
                    </p>

                    {/* Liste avec icônes */}
                    <ul className="mt-8 space-y-5 text-sm md:text-base font-semibold flex flex-col items-center">
                        {[
                            "Peintures à haute tenue et faible impact écologique",
                            "Partenaires fiables et reconnus dans toute la France",
                            "Matériaux adaptés à chaque besoin et type de chantier",
                        ].map((text, i) => (
                            <li key={i} className="flex gap-3 text-darkblue/80">
                                <GrValidate className="text-softgreen mt-1 shrink-0" aria-hidden="true"
                                            focusable="false"/>
                                <span>{text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Carrousel logos fournisseurs */}
                <div className="w-full mt-20 drop-shadow-m">
                    <h3 className="text-[2rem] text-darkblue/60 mb-5 partners">
                        Nos partenaires de confiance
                    </h3>

                    <div className="w-16 h-[3px] mx-auto bg-blue-900/60 rounded mb-10"/>
                    <div className="flex flex-wrap md:flex-nowrap justify-center gap-6 md:gap-8 lg:gap-10">
                        {[
                            {src: "src/assets/zolpan1.png", alt: "Zolpan"},
                            {src: "src/assets/seigneurie.png", alt: "Seigneurie"},
                            {src: "src/assets/tollens.png", alt: "Tollens"},
                            {src: "src/assets/sikkens.png", alt: "Sikkens"},
                            {src: "src/assets/unikalo1.png", alt: "Unikalo"},
                            {src: "src/assets/guittet.png", alt: "Guittet"},
                        ].map(({src, alt}, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-4 md:p-6 w-32 md:w-40 lg:w-48 flex items-center justify-center"
                            >
                                <img src={src} alt={`Logo de${alt}`}
                                     className="max-h-16 md:max-h-20 lg:max-h-24 object-contain"/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FournisseursSection;
