// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    valentineName: "Eshgham, will you be my Valentine? — Yours, Noel",

    pageTitle: "Eshgham, will you be my Valentine? 💝",

    floatingEmojis: {
        hearts: ['❤️', '💖', '💘', '💝', '💕'],
        bears: ['🥰', '😍']
    },

    questions: {
        first: {
            text: "یه کم منو دوست داری؟",
            yesBtn: "آره 💖",
            noBtn: "نه 🙈",
            secretAnswer: "من فقط دوستت ندارم، عاشقت شدم ❤️⬇️ روی دکمه بزن"
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

    loveMessages: {
        extreme: "قلبم کامل مال توئه ❤️",
        high: "پر از عشق و آرامش 💞",
        normal: "یه حس قشنگ و گرم 🌸"
    },

    celebration: {
        title: "من خوشبخت‌ترین آدم دنیام 💖",
        message: "از اینکه گفتی بله، دلم پر از عشقه.",
        emojis: "❤️💗💞✨🌹"
    },

    // Klassisches Valentine-Design (rot / rosa)
    colors: {
        backgroundStart: "#ff758c",   // warmes Rosa
        backgroundEnd: "#ff7eb3",     // Valentine Pink
        buttonBackground: "#e63946",  // sattes Rot
        buttonHover: "#ff4d6d",       // helleres Rot
        textColor: "#ffffff"          // weiß für Kontrast
    },

    animations: {
        floatDuration: "14s",
        floatDistance: "60px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.7
    },

    // Musik komplett deaktiviert
    music: {
        enabled: false
    }
};

window.VALENTINE_CONFIG = CONFIG;
