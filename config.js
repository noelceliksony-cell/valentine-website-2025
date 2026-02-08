// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    valentineName: "Eshgham, will you be my Valentine? — Yours, Noel",

    pageTitle: "esgham, will you be my valentine? 💝",

    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓'],
        bears: ['😽', '😻']
    },

    questions: {
        first: {
            text: "یه کم منو دوست داری؟",
            yesBtn: "آره 💖",
            noBtn: "نه 🙈",
            secretAnswer: "من فقط دوستت ندارم، عاشقت شدم ❤️"
        },
        second: {
            text: "Wie sehr schlägt dein Herz für mich?",
            startText: "sehr",
            nextBtn: "seeeeehrrrrrrrr ❤️"
        },
        third: {
            text: "می‌خوای ۱۴ فوریه ولنتاین من باشی؟",
            yesBtn: "آره، همیشه ❤️",
            noBtn: "بذار فکر کنم 😌"
        }
    },

    loveMessages: {
        extreme: "بی‌دلیل دارم لبخند می‌زنم 🥰",
        high: "پر از حس خوب 💞",
        normal: "یه خوشحالی آروم 🌸"
    },

    celebration: {
        title: "من خوشبخت‌ترین آدم دنیام 💖",
        message: "مرسی که گفتی بله. با تو همه‌چیز درست به نظر میاد.",
        emojis: "💗✨🥰🌸💞"
    },

    colors: {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    },

    animations: {
        floatDuration: "15s",
        floatDistance: "50px",
        bounceSpeed: "0.5s",
        heartExplosionSize: 1.5
    },

    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3",
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.5
    }
};

window.VALENTINE_CONFIG = CONFIG;
