// Pooja Transport Service - Core Business Logic

document.addEventListener('DOMContentLoaded', () => {
    // Only essential business features
    initMobileMenu();
});

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

function initMobileMenu() {
    // Mobile menu initialization if needed
}

// Quick Select Items (Purely functional)
function addQuickItemShared(itemName, targetId) {
    const textarea = document.getElementById(targetId);
    if (textarea) {
        if (textarea.value) {
            textarea.value += ', ' + itemName;
        } else {
            textarea.value = itemName;
        }
    }
}

// WhatsApp Quote Logic
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
