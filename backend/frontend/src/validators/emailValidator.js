export const validateEmail = (email) => {
    const errors = {};

    // Basic format validation using regex
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        errors.email = 'Please enter a valid email address.';
        return errors; // Exit early if the format is incorrect
    }

    // Check for restricted special characters (e.g., consecutive dots, spaces)
    if (/\s/.test(email)) {
        errors.email = 'Email must not contain spaces.';
        return errors;
    }

    if (email.includes('..')) {
        errors.email = 'Email must not contain consecutive dots.';
        return errors;
    }

    // Check if the email has a valid domain format (e.g., gmail.com)
    const validDomainRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const domain = email.split('@')[1];
    if (!validDomainRegex.test(domain)) {
        errors.email = 'Please enter a valid domain (e.g., gmail.com).';
        return errors;
    }

    // Check for common disposable email providers
    const disposableDomains = [
        'mailinator.com', 'guerrillamail.com', '10minutemail.com',
        'tempmail.com', 'trashmail.com', 'yopmail.com', 'getnada.com'
    ];
    if (disposableDomains.includes(domain)) {
        errors.email = 'Disposable email addresses are not allowed.';
        return errors;
    }

    // Check for known email providers with common misspellings
    const knownProviders = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
    const misspelledProvider = knownProviders.find(provider => {
        return provider.split('.')[0] === domain.split('.')[0] && provider !== domain;
    });
    if (misspelledProvider) {
        errors.email = `Did you mean "${misspelledProvider}"?`;
    }

    return errors;
};
