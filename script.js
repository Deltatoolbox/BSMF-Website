// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(26, 26, 26, 0.98)';
    } else {
        navbar.style.background = 'rgba(26, 26, 26, 0.95)';
    }
});

// Gallery Upload Functionality
const imageUpload = document.getElementById('imageUpload');
const galleryGrid = document.getElementById('galleryGrid');
const uploadArea = document.querySelector('.upload-area');

// Drag and drop functionality
uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = '#8b4513';
    uploadArea.style.backgroundColor = 'rgba(139, 69, 19, 0.1)';
});

uploadArea.addEventListener('dragleave', (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = 'rgba(255, 255, 255, 0.3)';
    uploadArea.style.backgroundColor = 'transparent';
});

uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.style.borderColor = 'rgba(255, 255, 255, 0.3)';
    uploadArea.style.backgroundColor = 'transparent';
    
    const files = e.dataTransfer.files;
    handleFiles(files);
});

// File input change
imageUpload.addEventListener('change', (e) => {
    const files = e.target.files;
    handleFiles(files);
});

// Handle uploaded files
function handleFiles(files) {
    Array.from(files).forEach(file => {
        if (file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = (e) => {
                addImageToGallery(e.target.result, file.name);
            };
            reader.readAsDataURL(file);
        }
    });
}

// Add image to gallery
function addImageToGallery(src, filename) {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery-item fade-in-up';
    
    const img = document.createElement('img');
    img.src = src;
    img.alt = filename;
    
    // Add click to view larger
    img.addEventListener('click', () => {
        openImageModal(src, filename);
    });
    
    galleryItem.appendChild(img);
    galleryGrid.appendChild(galleryItem);
    
    // Show success message
    showNotification('Image uploaded successfully!', 'success');
}

// Image modal for viewing larger images
function openImageModal(src, filename) {
    // Create modal
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        cursor: pointer;
    `;
    
    const img = document.createElement('img');
    img.src = src;
    img.alt = filename;
    img.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
        border-radius: 10px;
    `;
    
    modal.appendChild(img);
    document.body.appendChild(modal);
    
    // Close modal on click
    modal.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
}

// Notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 5px;
        color: white;
        font-weight: 600;
        z-index: 10001;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        ${type === 'success' ? 'background: #388e3c;' : 'background: #d32f2f;'}
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Contact form handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const message = contactForm.querySelector('textarea').value;
        
        // Simple validation
        if (!name || !email || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Simulate form submission
        showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
        contactForm.reset();
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Discord link functionality (placeholder)
document.querySelectorAll('.btn-discord, a[href="#discord"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        // Replace with actual Discord invite link
        const discordUrl = 'https://discord.gg/your-invite-link';
        showNotification('Opening Discord...', 'info');
        setTimeout(() => {
            window.open(discordUrl, '_blank');
        }, 1000);
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Add loading animation to page
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Add fade-in animation to all sections
    document.querySelectorAll('section').forEach((section, index) => {
        setTimeout(() => {
            section.classList.add('fade-in-up');
        }, index * 200);
    });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    // ESC key to close modals
    if (e.key === 'Escape') {
        const modal = document.querySelector('.image-modal');
        if (modal) {
            document.body.removeChild(modal);
        }
    }
});

// Add some interactive hover effects
document.querySelectorAll('.event-card, .member-card, .rule-card, .mission-card, .blog-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-5px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// Stats counter animation
function animateStats() {
    const stats = document.querySelectorAll('.stat-number');
    stats.forEach(stat => {
        const target = parseInt(stat.textContent.replace(/[^\d]/g, ''));
        const increment = target / 50;
        let current = 0;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            stat.textContent = Math.floor(current) + (stat.textContent.includes('+') ? '+' : '');
        }, 30);
    });
}

// Trigger stats animation when stats section is visible
const statsSection = document.querySelector('.stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateStats();
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
}

// Add some military-themed sound effects (optional)
function playClickSound() {
    // Create a simple click sound
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
}

// Add click sound to buttons (optional - can be disabled)
document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Uncomment the next line if you want click sounds
        // playClickSound();
    });
});

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
    console.log('BSMF Website loaded successfully!');
    
    // Add some dynamic content loading simulation
    setTimeout(() => {
        showNotification('Welcome to BSMF!', 'success');
    }, 1000);
}); 