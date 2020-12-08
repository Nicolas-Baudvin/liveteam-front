const inputsArray = [
    { type: "email", label: "Email", tooltip: "L'email doit être valide et contenir 100 caractères maximum", code: "email" },
    { type: "text", label: "Pseudonyme", tooltip: "Le pseudonyme doit contenir entre 6 et 20 caractères et uniquement des caractères alphanumériques", code: "username" },
    { type: "password", label: "Mot de passe", tooltip: "Le mot de passe doit faire entre 8 et 30 caractères et doit contenir une lettre majuscule, une lettre minuscule et un chiffre", code: "password" },
    { type: "password", label: "Confirmation mot de passe", tooltip: "Mot de passe identique au champs mot de passe du dessus", code: "confPass" }
];

export default inputsArray;