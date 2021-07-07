const Time = {
    HOUR_IN_MINUTES: 60,
}

const Char = {
    LOW_DASH: `_`,
}

const Register = {
    camelToKebab: (camel) => {
        let kebab = ``

        for (const char of camel) {
            const lowerCaseChar = char.toLowerCase()
            kebab += lowerCaseChar === char ? char : (Char.LOW_DASH + lowerCaseChar)
        }

        return kebab
    },
}

export {
    Time,
    Char,
    Register,
}
