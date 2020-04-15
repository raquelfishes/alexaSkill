var stopArr = ["Adios", "Mañana sera otro día", "Hasta luego lucas!"];
var stopIndex = Math.floor(Math.random() * stopArr.length);
var randomStop = stopArr[stopIndex];

const languageStrings = {
    es: {
        translation: {
            WELCOME_MSG: 'Bienvenido! Dime, cuando es naciste?',
            REGISTER_MSG: 'Naciste el {{day}} de {{month}} de {{year}}!',
            REJECTED_MSG: 'No pasa nada. Por favor dime la fecha de nuevo.',
            HELP_MSG: 'Puedes decirme el día, mes y año de tu nacimiento y tomaré nota de ello',
            GOODBYE_MSG: 'Hasta luego!',
            REFLECTOR_MSG: 'Acabas de activar {{intent}}',
            FALLBACK_MSG: 'Lo siento, no se nada sobre eso. Por favor inténtalo otra vez.',
            ERROR_MSG: 'Lo siento, ha habido un error. Por favor inténtalo otra vez.'
        }
    },
    en: {
        translation: {
            WELCOME_MSG: "Welcome, Let's have some fun with your birthday!",
            REGISTER_MSG: 'Your birthday is {{month}} {{day}} {{year}}',
            REJECTED_MSG: 'No problem. Please say the date again',
            HELP_MSG: "You can tell me your date of birth and I'll take note",
            GOODBYE_MSG: 'Goodbye!',
            REFLECTOR_MSG: 'You just triggered {{intent}}',
            FALLBACK_MSG: 'Sorry, I don\'t know about that. Please try again.',
            ERROR_MSG: 'Sorry, there was an error. Please try again.'
        }
    }
};

module.exports = languageStrings;