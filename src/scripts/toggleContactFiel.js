function toggleContactField() {
    const contactChoice = document.getElementById("contact").value;
    const emailField = document.getElementById("emailField");
    const phoneField = document.getElementById("phoneField");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const instruction = document.getElementById("instruction");

    // Réinitialiser l'affichage et les champs requis
    emailField.style.display = "none";
    phoneField.style.display = "none";
    emailInput.required = false;
    phoneInput.required = false;

    // Afficher le champ choisi et rendre le champ requis
    if (contactChoice === "email") {
        emailField.style.display = "block";
        emailInput.required = true;
        instruction.textContent = "Veuillez entrer votre adresse email.";
    } else if (contactChoice === "téléphone") {
        phoneField.style.display = "block";
        phoneInput.required = true;
        instruction.textContent = "Veuillez entrer votre numéro de téléphone.";
    } else {
        instruction.textContent = "";
    }
}