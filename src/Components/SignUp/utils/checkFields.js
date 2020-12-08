const checkFields = (value) => ({
    username: () => {
        /**
         * Only alpha numeric, 6 - 20 Chars
         */
        const re = /^[a-z0-9_-]{6,20}$/;
        const isUsernameValid = re.test(value);
        return isUsernameValid;
    },
    password: () => {
        /**
         * Should have 1 lowercase and 1 uppercase letter, and 1 number. 8 - 30 Chars
         */
        const re = /(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,30}$/;
        const isPasswordValid = re.test(value);
        return isPasswordValid;
    },
});

export default checkFields;