// Particle system for title screen
class ParticleSystem {
    constructor(container, count = 50) {
        this.container = container;
        this.particles = [];
        this.init(count);
    }

    init(count) {
        for (let i = 0; i < count; i++) {
            this.createParticle();
        }
    }

    createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const x = Math.random() * window.innerWidth;
        const delay = Math.random() * 10;
        const duration = 10 + Math.random() * 10;
        
        particle.style.left = x + 'px';
        particle.style.animationDelay = delay + 's';
        particle.style.animationDuration = duration + 's';
        
        this.container.appendChild(particle);
        
        setTimeout(() => {
            if (particle.parentNode) {
                particle.remove();
                this.createParticle();
            }
        }, (delay + duration) * 1000);
    }
}

// Screen management
const screens = {
    title: document.getElementById('title-screen'),
    login: document.getElementById('login-screen'),
    settings: document.getElementById('settings-screen'),
    loading: document.getElementById('loading-screen'),
    game: document.getElementById('game-ui')
};

function showScreen(screenName) {
    Object.values(screens).forEach(screen => {
        screen.classList.remove('active');
    });
    
    if (screens[screenName]) {
        screens[screenName].classList.add('active');
    }
}

// Navigation functions
window.showLogin = () => showScreen('login');
window.showSettings = () => showScreen('settings');
window.showCredits = () => alert('VRChat Websim Edition\n\nCreated for educational purposes');
window.showTitle = () => showScreen('title');

// Initialize particles
document.addEventListener('DOMContentLoaded', () => {
    const particlesContainer = document.getElementById('particles');
    new ParticleSystem(particlesContainer, 30);

    // Handle login form
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showScreen('loading');
            
            // Simulate loading
            setTimeout(() => {
                showScreen('game');
                initGame();
            }, 3000);
        });
    }
});

// Simple game initialization
function initGame() {
    console.log('Game initialized');
    // Here you would typically initialize Three.js scene, etc.
}

