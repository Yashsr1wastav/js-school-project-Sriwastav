// Timeline App JavaScript
class TimelineApp {
    constructor() {
        this.events = [];
        this.modal = document.getElementById('modal');
        this.timelineContainer = document.querySelector('.timeline-container');
        this.themeToggle = document.getElementById('themeToggle');
        this.isDarkMode = false;
        
        this.init();
    }

    async init() {
        await this.loadEvents();
        this.renderEvents();
        this.setupEventListeners();
        this.setupThemeToggle();
    }

    async loadEvents() {
        try {
            const response = await fetch('data/events.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            this.events = data.events.sort((a, b) => a.year - b.year);
        } catch (error) {
            console.error('Error loading events:', error);
            this.showErrorMessage('Failed to load timeline events. Please check if data/events.json exists.');
        }
    }

    renderEvents() {
        if (this.events.length === 0) {
            this.timelineContainer.innerHTML = '<p>No events to display.</p>';
            return;
        }

        this.timelineContainer.innerHTML = '';
        
        this.events.forEach((event, index) => {
            const eventCard = this.createEventCard(event, index);
            this.timelineContainer.appendChild(eventCard);
        });
    }

    createEventCard(event, index) {
        const article = document.createElement('article');
        article.className = 'event-card';
        article.dataset.eventId = event.id;
        
        // Add staggered animation delay
        article.style.animationDelay = `${index * 0.1}s`;
        
        article.innerHTML = `
            <header class="event-header">
                <span class="event-year">${event.year}</span>
                <span class="event-category">${event.category}</span>
            </header>
            <figure class="event-figure">
                <img src="${event.imageURL}" alt="${event.title}" 
                     onerror="this.src='assets/placeholder.jpg'" />
                <figcaption class="event-caption">
                    <h2>${event.title}</h2>
                    <p>${this.truncateText(event.description, 100)}</p>
                    <button class="learn-more-btn" data-event-id="${event.id}">
                        Learn More
                    </button>
                </figcaption>
            </figure>
        `;
        
        return article;
    }

    setupEventListeners() {
        // Event delegation for Learn More buttons
        this.timelineContainer.addEventListener('click', (e) => {
            if (e.target.classList.contains('learn-more-btn')) {
                const eventId = parseInt(e.target.dataset.eventId);
                this.openModal(eventId);
            }
        });

        // Modal close functionality
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal || e.target.classList.contains('close-modal')) {
                this.closeModal();
            }
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.style.display === 'block') {
                this.closeModal();
            }
        });

        // Add hover effects to event cards
        this.timelineContainer.addEventListener('mouseenter', (e) => {
            if (e.target.closest('.event-card')) {
                e.target.closest('.event-card').classList.add('hover-effect');
            }
        }, true);

        this.timelineContainer.addEventListener('mouseleave', (e) => {
            if (e.target.closest('.event-card')) {
                e.target.closest('.event-card').classList.remove('hover-effect');
            }
        }, true);
    }

    openModal(eventId) {
        const event = this.events.find(e => e.id === eventId);
        if (!event) return;

        const modalContent = `
            <div class="modal-content">
                <button class="close-modal" aria-label="Close modal">&times;</button>
                <div class="modal-header">
                    <span class="modal-year">${event.year}</span>
                    <span class="modal-category">${event.category}</span>
                </div>
                <div class="modal-body">
                    <img src="${event.imageURL}" alt="${event.title}" 
                         class="modal-image" onerror="this.src='assets/placeholder.jpg'" />
                    <h2 class="modal-title">${event.title}</h2>
                    <p class="modal-description">${event.description}</p>
                </div>
                <div class="modal-footer">
                    <button class="close-modal modal-btn">Close</button>
                </div>
            </div>
        `;

        this.modal.innerHTML = modalContent;
        this.modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
        
        // Focus management for accessibility
        const closeButton = this.modal.querySelector('.close-modal');
        closeButton.focus();
    }

    closeModal() {
        this.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        this.modal.innerHTML = '';
    }

    setupThemeToggle() {
        this.themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });
    }

    toggleTheme() {
        this.isDarkMode = !this.isDarkMode;
        document.body.classList.toggle('dark-theme', this.isDarkMode);
        
        this.themeToggle.textContent = this.isDarkMode ? '☀️ Light Theme' : '🌙 Dark Theme';
        
        // Store preference in localStorage
        localStorage.setItem('timeline-theme', this.isDarkMode ? 'dark' : 'light');
    }

    loadThemePreference() {
        const savedTheme = localStorage.getItem('timeline-theme');
        if (savedTheme === 'dark') {
            this.isDarkMode = true;
            document.body.classList.add('dark-theme');
            this.themeToggle.textContent = '☀️ Light Theme';
        }
    }

    truncateText(text, maxLength) {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    }

    showErrorMessage(message) {
        this.timelineContainer.innerHTML = `
            <div class="error-message">
                <h3>⚠️ Error</h3>
                <p>${message}</p>
            </div>
        `;
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const app = new TimelineApp();
    app.loadThemePreference();
});

// Add smooth scrolling for better UX
document.addEventListener('DOMContentLoaded', () => {
    // Animate timeline cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe all event cards
    setTimeout(() => {
        document.querySelectorAll('.event-card').forEach(card => {
            observer.observe(card);
        });
    }, 100);
});