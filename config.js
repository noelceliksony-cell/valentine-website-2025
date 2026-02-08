// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Hauptüberschrift (danach kommt automatisch ", my love…")
    valentineName: "Samira esgham, will you be my Valentine?",

    // Browser-Tab
    pageTitle: "Samira esgham 💝",

    // Hintergrund-Emojis
    floatingEmojis: {
        hearts: ['❤️', '💖', '💘', '💝', '💕'],
        bears: ['🥰', '😍']
    },

    // Fragen
    questions: {
        first: {
            text: "یه کم منو دوست داری؟",
            yesBtn: "آره 💖",
            noBtn: "نه 🙈",
            secretAnswer: "من فقط دوستت ندارم، عاشقت شدم ❤️ 👇"
        },
        second: {
            text: "Wie sehr schlägt dein Herz für mich?",
            startText: "So sehr",
            nextBtn: "Weiter ❤️"
        },
        third: {
            text: "می‌خوای ۱۴ فوریه ولنتاین من باشی؟",
            yesBtn: "آره، همیشه ❤️",
            noBtn: "بذار فکر کنم 😌"
        }
    },

    // Love Meter (Samira + Noel Forever-Vibe)
    loveMessages: {
        extreme: "Samira ❤️ Noel",
        high: "پر از عشق و آرامش 💞",
        normal: "یه حس قشنگ و گرم 🌸"
    },

    // Nach dem Ja
    celebration: {
        title: "من خوشبخت‌ترین آدم دنیام 💖",
        message: "Samira + Noel. Always. ♾️",
        emojis: "❤️💗💞✨🌹"
    },

    // Valentinstag-Farben
    colors: {
        backgroundStart: "#ff758c",
        backgroundEnd: "#ff7eb3",
        buttonBackground: "#e63946",
        buttonHover: "#ff4d6d",
        textColor: "#ffffff"
    },

    animations: {
        floatDuration: "14s",
        floatDistance: "60px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.7
    },

    // Musik komplett aus
    music: {
        enabled: false
    }
};

window.VALENTINE_CONFIG = CONFIG;
