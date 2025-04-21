const MentionsLegales = () => {

    return (
        <div className="max-w-7xl mx-auto px-6 py-10 leading-relaxed text-gray-800 mentions bg-offwhite">
            <h1 className="text-3xl font-semibold text-center text-mocha mb-10 underline underline-offset-8">Mentions
                légales</h1>

            {/* Éditeur du site */}
            <section className="mb-10">
                <h2 className="text-xl font-semibold text-mocha mb-2">Éditeur du site</h2>
                <p>
                    Le présent site est édité et développé par <strong>Hakim Zaabi</strong>, développeur informatique
                    basé à Nice.
                </p>
                <p>
                    Adresse : Nice, France<br/>
                    Téléphone : <a href="tel:0667329097" className="text-darkblue hover:text-mocha underline">06 67 32
                    90 97</a><br/>
                    Email : <a href="mailto:hakim.hakim2206@gmail.fr"
                               className="text-darkblue hover:text-mocha underline">hakim.hakim2206@gmail.fr</a><br/>
                    <br/>
                    SIRET Entreprise Zaabi: 440 576 940 00017
                </p>
            </section>

            {/* Hébergeur */}
            <section className="mb-10">
                <h2 className="text-xl font-semibold text-mocha mb-2">Hébergement</h2>
                <p>
                    Le site est hébergé par : <br/>
                    <strong>Vercel Inc.</strong><br/>
                    Adresse : 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br/>
                    Site : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer"
                              className="text-darkblue hover:text-mocha underline">https://vercel.com</a>
                </p>
            </section>

            {/* Propriété intellectuelle */}
            <section className="mb-10">
                <h2 className="text-xl font-semibold text-mocha mb-2">Propriété intellectuelle</h2>
                <p>
                    L&#39;ensemble du contenu du site (textes, images, graphismes, logo, icônes, etc.) est la propriété
                    exclusive de Hafed et Hakim Zaabi
                    sauf mention contraire. Toute reproduction, distribution, modification, adaptation, retransmission
                    ou publication, même partielle,
                    de ces différents éléments est strictement interdite sans l&#39;accord écrit préalable des
                    auteurs.
                </p>
            </section>

            {/* Données personnelles */}
            <section className="mb-10">
                <h2 className="text-xl font-semibold text-mocha mb-2">Données personnelles</h2>
                <p>
                    Les informations personnelles éventuellement recueillies via les formulaires du site sont utilisées
                    uniquement
                    dans le cadre des demandes effectuées. Aucune information personnelle n&#39;est cédée à des tiers.
                </p>
                <p className="mt-2">
                    Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d’un droit
                    d’accès, de rectification et de suppression
                    des données vous concernant. Pour exercer ce droit, vous pouvez contacter : <a
                    href="mailto:hakim.hakim2206@gmail.fr"
                    className="text-darkblue hover:text-mocha underline">hakim.hakim2206@gmail.fr</a>
                </p>
            </section>

            {/* Cookies */}
            <section className="mb-10">
                <h2 className="text-xl font-semibold text-mocha mb-2">Cookies</h2>
                <p>
                    Ce site peut utiliser des cookies à des fins de mesure d’audience ou d’amélioration de l’expérience
                    utilisateur. Vous pouvez configurer votre navigateur
                    pour refuser ces cookies si vous le souhaitez.
                </p>
            </section>

            {/* Responsabilité */}
            <section className="mb-10">
                <h2 className="text-xl font-semibold text-mocha mb-2">Responsabilité</h2>
                <p>
                    Le site est mis à jour régulièrement, mais peut contenir des inexactitudes ou des omissions. Hakim
                    Zaabi ne pourra être tenu responsable
                    de l’utilisation faite des informations diffusées sur ce site.
                </p>
            </section>

            {/* Loi applicable */}
            <section className="mb-10">
                <h2 className="text-xl font-semibold text-mocha mb-2">Loi applicable</h2>
                <p>
                    Le contenu de ce site est régi par la législation française. Tout litige sera soumis aux
                    juridictions compétentes.
                </p>
            </section>
        </div>
    );
};

export default MentionsLegales;
