import backgroundImage from '../assets/3d-rendering.jpg';
import {handleFormSubmit} from "../emailJS.js";
import {useRef, useState} from "react";

const ContactSection = () => {
    const formRef = useRef();
    const [error, setError] = useState("");

    return (
        <section
            className="relative bg-noir text-white py-20 px-4"
            id="Contact"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            {/* Dégradé de transition douce depuis la section précédente */}
            <div
                className="shadow-md absolute top-0 left-0 right-0 h-1 bg-gradient-to-b from-beige/80 to-transparent z-[2]"/>

            {/* Overlay sombre pour lisibilité */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/30 z-0 drop-shadow-md"/>

            {/* Contenu du formulaire */}
            <div className="relative z-10 max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-lightgray mb-4 text-center">Demande de Devis</h2>
                <span className=" mx-auto block w-16 h-[5px] mt-4 mb-6 bg-vert rounded"></span>
                <p className="text-beige mb-8 text-center">
                    Remplissez ce formulaire pour toute demande de devis.
                </p>

                {error && <div className="error-message text-red-500 text-center" aria-live="assertive">{error}</div>}
                <form
                    ref={formRef} onSubmit={(e) => handleFormSubmit(e, formRef, setError)}
                    className="grid grid-cols-1 gap-6 bg-transparent p-6 rounded-xl shadow-md backdrop-blur-lg antialiased">
                    {/* Nom & Prénom */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <label htmlFor="name" className="sr-only">Nom de l&#39;utilisateur</label>
                        <input
                            type="text"
                            name={"name"}
                            id={"name"}
                            placeholder={`Nom *`}
                            className="border border-gris p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-vert text-beige"
                            required
                        />
                        <label htmlFor="firstName" className="sr-only">Prénom de l&#39;utilisateur</label>
                        <input
                            type="text"
                            placeholder="Prénom *"
                            id={"firstName"}
                            name={"firstName"}
                            className="border border-gris p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-vert text-beige"
                            required
                        />
                    </div>

                    {/* Email */}
                    <label htmlFor="email" className="sr-only">Email de l&#39;utilisateur</label>
                    <input
                        type="email"
                        placeholder="Adresse e-mail *"
                        id={"email"}
                        name={"email"}
                        className="border border-gris p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-vert text-beige"
                        required
                    />

                    {/* Téléphone */}
                    <label htmlFor="phone" className="sr-only">Numéro de tel de l&#39;utilisateur</label>
                    <input
                        type="tel"
                        placeholder="Numéro de téléphone *"
                        id={"phone"}
                        name={"phone"}
                        className="border border-gris p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-vert text-beige"
                        required
                    />

                    {/* Sélecteur de travaux */}
                    <label htmlFor="requestType" className="sr-only">Type de Requête de l&#39;utilisateur</label>
                    <select
                        name={"requestType"}
                        id={"requestType"}
                        className="border border-gris p-3 bg-vert rounded-md text-beige focus:outline-none focus:ring-2 focus:ring-vert"
                        required
                    >
                        <option value="">Type de demande</option>
                        <option>Travaux de Peinture</option>
                        <option>Travaux de Réfection</option>
                        <option>Maçonnerie légère</option>
                        <option>Travaux de Menuiserie</option>
                        <option>Agencement de Cuisine</option>
                        <option>Travaux Divers</option>
                        <option>Autre</option>
                    </select>

                    {/* Message */}
                    <label htmlFor="message" className="sr-only">Message de l&#39;utilisateur</label>
                    <textarea
                        rows="5"
                        placeholder="Décrivez votre projet... *"
                        name={"message"}
                        id={"message"}
                        className="border border-gris p-3 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-vert text-beige"
                        required
                    ></textarea>

                    {/* Bouton */}
                    <button
                        type="submit"
                        className="bg-vert hover:bg-green-950/80 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 transform hover:scale-105 active:scale-95 active:translate-y-1"
                    >
                        Envoyer ma demande
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;
