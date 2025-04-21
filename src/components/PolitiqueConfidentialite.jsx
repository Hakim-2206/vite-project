const PolitiqueConfidentialite = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-offwhite">
            <h1 className="text-3xl font-semibold text-center text-mocha mb-8 underline underline-offset-8">
                Politique de confidentialité
            </h1>

            <section className="space-y-6 text-gray-500">
                <h2 className="text-xl font-semibold text-mocha">1. Introduction</h2>
                <p>
                    Cette politique de confidentialité a pour objectif de vous informer sur la manière dont nous
                    collectons, utilisons, stockons et protégeons vos informations personnelles lors de votre navigation
                    sur notre site web.
                </p>
                <p>
                    Nous respectons votre vie privée et nous engageons à protéger vos données personnelles conformément
                    à la législation en vigueur, notamment le <strong>Règlement Général sur la Protection des Données
                    (RGPD)</strong>.
                </p>

                <h2 className="text-xl font-semibold text-mocha">2. Collecte des informations</h2>
                <p>
                    Nous collectons les informations suivantes lorsque vous interagissez avec notre site :
                </p>
                <ul className="list-disc pl-5">
                    <li><strong>Informations de navigation</strong> : Nous recueillons des informations anonymes sur la
                        manière dont vous naviguez sur notre site, notamment les pages que vous consultez et la durée de
                        votre visite. Ces données ne permettent pas de vous identifier personnellement.
                    </li>
                    <li><strong>Cookies </strong>
                        : Nous n&#39;utilisons pas de cookies sur ce site à des fins de suivi ou d&#39;amélioration de
                        l&#39;expérience utilisateur.
                        Si des cookies étaient introduits à l&#39;avenir, un bandeau de consentement vous informerait de
                        leur présence et vous demanderait votre consentement.
                    </li>
                </ul>

                <h2 className="text-xl font-semibold text-mocha">3. Utilisation des informations</h2>
                <p>
                    Les informations que nous collectons sont utilisées pour :
                </p>
                <ul className="list-disc pl-5">
                    <li>Améliorer l&#39;expérience de navigation sur notre site.</li>
                    <li>Analyser l’audience de notre site afin d’améliorer nos contenus et services.</li>
                </ul>

                <h2 className="text-xl font-semibold text-mocha">4. Partage des données</h2>
                <p>
                    Nous ne partageons pas vos informations personnelles avec des tiers, sauf dans les cas suivants :
                </p>
                <ul className="list-disc pl-5">
                    <li>Si la loi l&#39;exige (par exemple, en cas de demande des autorités compétentes).</li>
                    <li>Si nous faisons appel à des prestataires de services qui traitent des données pour notre compte
                        (hébergeur, services d&#39;analyse, etc.), mais uniquement dans le cadre des services fournis et
                        sous des conditions strictes de confidentialité.
                    </li>
                </ul>

                <h2 className="text-xl font-semibold text-mocha">5. Sécurité des données</h2>
                <p>
                    Nous mettons en place des mesures de sécurité appropriées pour protéger vos données contre tout
                    accès non autorisé, modification ou destruction. Toutefois, aucune méthode de transmission sur
                    Internet n&#39;est totalement sécurisée, et nous ne pouvons garantir la sécurité absolue des
                    informations transmises.
                </p>

                <h2 className="text-xl font-semibold text-mocha">6. Conservation des données</h2>
                <p>
                    Les données collectées via notre site sont conservées pendant la durée nécessaire pour atteindre les
                    objectifs pour lesquels elles ont été collectées, à moins qu’une durée plus longue ne soit requise
                    par la législation.
                </p>

                <h2 className="text-xl font-semibold text-mocha">7. Vos droits</h2>
                <p>
                    Conformément à la législation en vigueur, vous disposez des droits suivants :
                </p>
                <ul className="list-disc pl-5">
                    <li><strong>Droit d’accès</strong> : Vous avez le droit d’obtenir une copie de vos données
                        personnelles que nous avons collectées.
                    </li>
                    <li><strong>Droit de rectification</strong> : Vous pouvez demander à corriger toute information
                        incorrecte ou incomplète vous concernant.
                    </li>
                    <li><strong>Droit à l’effacement</strong> : Vous avez le droit de demander l’effacement de vos
                        données personnelles, sous réserve des exceptions prévues par la loi.
                    </li>
                    <li><strong>Droit à la limitation du traitement</strong> : Vous pouvez demander la suspension
                        temporaire du traitement de vos données.
                    </li>
                    <li><strong>Droit d’opposition</strong> : Vous pouvez vous opposer au traitement de vos données pour
                        des raisons légitimes.
                    </li>
                </ul>
                <p>
                    Si vous souhaitez exercer l’un de ces droits, veuillez nous contacter via notre formulaire de
                    contact ou en nous envoyant un e-mail à <strong><a
                    href="mailto:hakim.hakim2206@gmail.fr">hakim.hakim2206@gmail.fr</a></strong>.
                </p>

                <h2 className="text-xl font-semibold text-mocha">8. Modifications de cette politique de
                    confidentialité</h2>
                <p>
                    Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute
                    modification sera publiée sur cette page, et la date de mise à jour sera indiquée en bas de la page.
                </p>

                <h2 className="text-xl font-semibold text-mocha">9. Contact</h2>
                <p>
                    Pour toute question ou demande concernant cette politique de confidentialité, vous pouvez nous
                    contacter à l’adresse suivante :
                </p>
                <p>
                    <strong>Hakim Zaabi</strong><br/>
                    <strong>Entreprise Zaabi</strong><br/>
                    E-mail : <a href="mailto:hakim.hakim2206@gmail.fr"
                                className="text-mocha">hakim.hakim2206@gmail.fr</a><br/>
                    Téléphone : 06 67 32 90 97
                </p>
            </section>

            <footer className="mt-10 text-center text-gray-500 text-xs">
                <p>Dernière mise à jour : Avril 2025</p>
            </footer>
        </div>
    );
};

export default PolitiqueConfidentialite;
