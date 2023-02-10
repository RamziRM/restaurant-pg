// Name - contact info

createContact = () => {
    const contact = document.createElement('div');
    contact.classList.add('contact');

    contact.appendChild(
        contactForm(
            "Don Mario",
            "+5491231232",
            'mario@luigipizza.com'
        )
    )

    contact.appendChild(
        contactForm(
            "Don Luigi",
            "+5412111223",
            'luigi@luigipizza.com'
        )
    )
};

// contact creation f()-- Name - number - email //inputs
function contactForm(fullName, number, email) {
    const contactInput = document.createElement('div');
    contactInput.classList.add('contact-input');

    const fullName = document.createElement('h3');
    fullName.textContent = fullName;

    const number = document.createElement('p');
    number.textContent = number;

    const email = document.createElement('p');
    email.textContent = email;

    contactInput.appendChild(fullName);
    contactInput.appendChild(Number);
    contactInput.appendChild(email);

    return contactInput;
}