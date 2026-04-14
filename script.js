// ===============================
// PAGE LOAD (LOADER)
// ===============================
window.addEventListener("load", function () {
    const loader = document.getElementById("loader");

    if (loader) {
        setTimeout(() => {
            loader.style.display = "none";
        }, 0);
    }

    showContentWithDelay();
    startSlider();
    revealOnScroll();
});


// ===============================
// FADE-IN ANIMATION
// ===============================
function showContentWithDelay() {
    const elements = document.querySelectorAll('.fade-in');

    elements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('show');
        }, 800 + (index * 300));
    });
}


// ===============================
// IMAGE SLIDER (AUTO CHANGE)
// ===============================
let currentSlide = 0;

function startSlider() {
    const slides = document.querySelectorAll(".slide");

    if (!slides.length) return;

    // Make first slide visible on load
    slides[0].classList.add("active");

    setInterval(() => {
        slides[currentSlide].classList.remove("active");
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add("active");
    }, 3000);
}


// ===============================
// NAVIGATION
// ===============================
function goToSupport() {
    window.location.href = "support.html";
}


// ===============================
// CHAT TOGGLE  <-- THIS WAS MISSING
// ===============================
function toggleChat() {
    const chatBox = document.getElementById("chatBox");
    const notif = document.querySelector(".notif");

    if (!chatBox) return;

    if (chatBox.style.display === "block") {
        chatBox.style.display = "none";
    } else {
        chatBox.style.display = "block";
        if (notif) notif.style.display = "none";
        const chatBody = document.getElementById("chatBody");
        if (chatBody) chatBody.scrollTop = chatBody.scrollHeight;
    }
}


// ===============================
// CHATBOT (SMART)
// ===============================
function getBotReply(message) {
    message = message.toLowerCase().trim();

    if (message.match(/\b(hello|hi|hey|good morning|good afternoon|good evening|greetings)\b/)) {
        return "👋 Hello! Welcome to Dawnora Kyabirwa. How can we help you today?";
    }

    if (message.match(/\b(donat|support|give|contribut|fund|money|pay|help us)\b/)) {
        return "🙏 Thank you for wanting to support us! You can donate via:\n• MTN Uganda: 0782168324\n• Airtel Uganda: 0757321801\nOr visit our Support page for bank details.";
    }

    if (message.match(/\b(mobile money|mtn|airtel|momo)\b/)) {
        return "📱 Mobile Money details:\n• MTN Uganda: 0782168324\n• Airtel Uganda: 0757321801\nAccount Name: KISIGE ELVIS";
    }

    if (message.match(/\b(program|what do you do|services|activities|work|mission)\b/)) {
        return "💚 Our programs include:\n• Orphan Support\n• Medical Assistance\n• Rehabilitation\n• Education support\nVisit our Programs page to learn more!";
    }

    if (message.match(/\b(orphan|child|children|kids)\b/)) {
        return "👶 We provide care, food, clothing, and support for orphans and vulnerable children in our community.";
    }

    if (message.match(/\b(medical|health|hospital|treatment|sick|medicine)\b/)) {
        return "🏥 We help patients access medical treatment and care. Please contact us directly for urgent medical assistance.";
    }

    if (message.match(/\b(rehab|rehabilitation|disabled|disability)\b/)) {
        return "♿ We support individuals needing rehabilitation services. Reach out via our Contact page or WhatsApp.";
    }

    if (message.match(/\b(educat|school|fees|learn|student|tuition)\b/)) {
        return "📚 We assist with school fees and educational support for needy children. Contact us for more details.";
    }

    if (message.match(/\b(volunteer|join|help out|work with|partner)\b/)) {
        return "🤝 We'd love to have you volunteer with us! Please visit our Contact page or WhatsApp us to get started.";
    }

    if (message.match(/\b(where|location|address|find you|jinja|uganda)\b/)) {
        return "📍 We are located in Kyabirwa Village, Jinja, Uganda. You can also reach us via email or WhatsApp!";
    }

    if (message.match(/\b(contact|email|phone|call|reach|whatsapp)\b/)) {
        return "📞 You can reach us at:\n• Email: elviskisige96@gmail.com\n• Phone: +256 757-321-801\n• WhatsApp: Click the green icon on this page!";
    }

    if (message.match(/\b(thank|thanks|appreciate|grateful)\b/)) {
        return "😊 You're so welcome! It's people like you that make our work possible. God bless you!";
    }

    if (message.match(/\b(about|who are you|what is his grace|organisation|ngo)\b/)) {
        return "🌍 Dawnora Kyabirwa is an NGO in Jinja, Uganda. We help orphans, the disabled, medical cases, and vulnerable communities — restoring hope and transforming lives.";
    }

    return "💬 Thanks for reaching out! For more help, please contact us via WhatsApp (green icon below) or visit our Contact page. We'd love to hear from you! 🙏";
}


// ===============================
// SEND MESSAGE
// ===============================
function sendMessage() {
    let input = document.getElementById("userInput");
    let chatBody = document.getElementById("chatBody");

    if (!input || !chatBody) return;

    let message = input.value.trim();
    if (!message) return;

    let userMsg = document.createElement("p");
    userMsg.className = "user";
    userMsg.textContent = message;
    chatBody.appendChild(userMsg);

    input.value = "";
    chatBody.scrollTop = chatBody.scrollHeight;

    let typing = document.createElement("p");
    typing.className = "bot";
    typing.textContent = "Typing...";
    chatBody.appendChild(typing);
    chatBody.scrollTop = chatBody.scrollHeight;

    setTimeout(() => {
        typing.remove();

        let botMsg = document.createElement("p");
        botMsg.className = "bot";
        botMsg.style.whiteSpace = "pre-line";
        botMsg.textContent = getBotReply(message);

        chatBody.appendChild(botMsg);
        chatBody.scrollTop = chatBody.scrollHeight;
    }, 1000);
}


// ===============================
// ENTER KEY SUPPORT
// ===============================
document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("userInput");

    if (input) {
        input.addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                sendMessage();
            }
        });
    }
});


// ===============================
// SCROLL REVEAL
// ===============================
function revealOnScroll() {
    const elements = document.querySelectorAll(".fade-in");
    const windowHeight = window.innerHeight;

    elements.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < windowHeight - 100) {
            el.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
