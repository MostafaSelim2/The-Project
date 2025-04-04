const translations = {
    EN: {
        home: 'Home',
        about: 'About',
        contact: 'Contact us',
        selectlanguage: 'Select a Language',
        english: 'English',
        arabic: 'Arabic'
    },

    AR: {
        home: 'الصفحة الرئيسية',
        about: 'من نحن',
        contact: 'تواصل معنا',
        selectlanguage: 'إختر لغة',
        english: 'الإنجليزية',
        arabic: 'العربية'
    },
};

const languageselector = document.querySelector('select');

languageselector.addEventListener('change', (event) => {
    setlanguage(event.target.value);
    localStorage.setItem("lang", event.target.value);
});

document.addEventListener('DOMContentLoaded', () => {
    const language = localStorage.getItem("lang");
    setlanguage(language);
})

const setlanguage = (language) => {
    const elements = document.querySelectorAll("[data-il8n]");
    elements.forEach((element) => {
        const translationskey = element.getAttribute('data-il8n');
        element.textContent = translations[language][translationskey];
    });
    document.dir = language === "AR" ? "rtl" : "ltr";
};