// Pooja Transport Service - Core Logic & Gamification

document.addEventListener('DOMContentLoaded', () => {
    initGamification();
    initAssistant();
});

// --- Gamification Logic ---
function initGamification() {
    const xpBar = document.querySelector('.xp-bar-fill');
    const coinCounter = document.querySelector('.coin-counter span');

    if (!xpBar || !coinCounter) return;

    // XP increases on scroll
    window.addEventListener('scroll', () => {
        let scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        xpBar.style.width = Math.min(82 + (scrollPercent / 10), 100) + '%';
    });
}

// Earn Coins Function (Shared)
function earnCoins(amount = 10) {
    const coinCounter = document.querySelector('.coin-counter span');
    if (coinCounter) {
        let current = parseInt(coinCounter.innerText);
        coinCounter.innerText = current + amount;
        
        const parent = coinCounter.parentElement;
        parent.style.transform = 'scale(1.2)';
        parent.style.transition = 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        setTimeout(() => parent.style.transform = 'scale(1)', 200);
    }
}

// Quick Select Items (Shared)
function addQuickItemShared(itemName, targetId) {
    const textarea = document.getElementById(targetId);
    if (textarea) {
        if (textarea.value) {
            textarea.value += ', ' + itemName;
        } else {
            textarea.value = itemName;
        }
        earnCoins(10);
    }
}

// --- Assistant Logic ---
function initAssistant() {
    const bubble = document.getElementById('assistantBubble');
    if (!bubble) return;

    const messages = [
        "Hi! I'm Pooja. 👋<br>Need a quick quote? I'm here to help!",
        "Moving to a new city? 🏠<br>Ask about our inter-city discounts!",
        "Safety First! 🛡️<br>We use 5-layer packing for all items.",
        "Track your move! 🚚<br>Get real-time updates on WhatsApp.",
        "Did you know? 💡<br>We offer Free Transit Insurance today!"
    ];
    
    let msgIndex = 0;
    setInterval(() => {
        bubble.style.opacity = '0';
        bubble.style.transform = 'translateY(10px)';
        
        setTimeout(() => {
            bubble.innerHTML = messages[msgIndex];
            bubble.style.opacity = '1';
            bubble.style.transform = 'translateY(0)';
            msgIndex = (msgIndex + 1) % messages.length;
        }, 300);
    }, 8000);
}

// --- Mobile Menu Toggle ---
function toggleMenu() {
    const drawer = document.getElementById('mobileDrawer');
    let overlay = document.querySelector('.mobile-overlay');
    
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.className = 'mobile-overlay';
        document.body.appendChild(overlay);
        overlay.addEventListener('click', toggleMenu);
    }

    if (drawer) {
        drawer.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = drawer.classList.contains('active') ? 'hidden' : '';
    }
}

// WhatsApp Quote Logic (Shared)
function sendWhatsAppQuote(data) {
    let message = "Hello Pooja Transport Service, I want to request a Shifting Quote." +
        "%0a%0a*--- Move Details ---*" +
        "%0a*Name:* " + data.name +
        "%0a*Mobile:* " + data.mobile +
        "%0a*From:* " + data.from +
        "%0a*To:* " + data.to +
        (data.date ? "%0a*Date:* " + data.date : "") +
        (data.floor ? "%0a*Floor:* " + data.floor : "") +
        "%0a*Items:* " + data.items;

    window.open("https://wa.me/919211396141?text=" + message, '_blank');
}

