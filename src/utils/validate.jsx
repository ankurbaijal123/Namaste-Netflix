export const checkValidate = (email, password) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+]).{8,}$/;

    if (!emailRegex.test(email)) return "❌ Email ID is not valid";
    if (!passwordRegex.test(password)) return "❌ Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character.";

    return null;
};
