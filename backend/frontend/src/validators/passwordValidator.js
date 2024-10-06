
 

export const validatePassword = (password, confirmPassword, name, email) => {
    const errors = {};

    // Minimum length validation (8 characters)
    if (password.length < 8) {
        errors.password = 'Password must be at least 8 characters long.';
        return errors; // Exit early to avoid other checks
    }

    // Check for any white spaces in the password
    if (/\s/.test(password)) {
        errors.password = 'Password must not contain any spaces.';
        return errors; // Exit early to avoid other checks
    }

    // Password similarity to user attributes (e.g., name, email)
    if (name && password.toLowerCase().includes(name.toLowerCase())) {
        errors.password = 'Password is too similar to your name.';
    }

    if (email && password.toLowerCase().includes(email.split('@')[0].toLowerCase())) {
        errors.password = 'Password is too similar to your email.';
    }

    // Enhanced password validation with regex for complexity
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*?])[A-Za-z\d!@#$%^&*?]{8,}$/;
    if (!passwordRegex.test(password)) {
        errors.password = `Password must contain at least one uppercase letter, 
        one lowercase letter, one number, and one special character (!@#$%^&*?)`;
    }

    // Confirm Password validation
    if (password !== confirmPassword) {
        errors.confirmPassword = 'Passwords do not match.';
    }

    return errors;
};
