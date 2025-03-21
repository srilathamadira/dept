// Event data
const events = {
    'cultural-fest': {
        title: 'Annual Cultural Fest 2024',
        date: 'February 15-17, 2024',
        images: [
            'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1505236858219-8359eb29e329?auto=format&fit=crop&q=80&w=1200'
        ],
        description: `Our Annual Cultural Fest 2024 was a grand celebration of creativity and talent. The three-day event featured:

• Musical performances by student bands
• Dance competitions with over 20 participating teams
• Art exhibitions showcasing student artwork
• Theater performances
• Food festival with international cuisines
• Celebrity guest performances

The event saw participation from over 5000 students from various colleges across the country.`
    },
    'tech-summit': {
        title: 'Tech Summit 2024',
        date: 'January 10-12, 2024',
        images: [
            'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=1200',
            'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&q=80&w=1200'
        ],
        description: `The Tech Summit 2024 brought together industry leaders, innovators, and students to explore emerging technologies. Highlights included:

• Keynote speeches from tech industry leaders
• Hands-on workshops on AI and Machine Learning
• Hackathon with 200+ participants
• Project showcase by final year students
• Networking sessions with industry recruiters
• Panel discussions on future of technology`
    }
};

// Initialize Swiper
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    }
});

// Modal functionality
const modal = document.getElementById('eventModal');
const closeButton = document.querySelector('.close-button');
const modalTitle = document.getElementById('modalTitle');
const modalDate = document.getElementById('modalDate');
const modalImages = document.getElementById('modalImages');
const modalDescription = document.getElementById('modalDescription');

// Event listeners for event cards
document.querySelectorAll('.event-card').forEach(card => {
    card.addEventListener('click', () => {
        const eventId = card.dataset.event;
        const event = events[eventId];
        
        modalTitle.textContent = event.title;
        modalDate.textContent = event.date;
        modalDescription.textContent = event.description;
        
        // Clear and populate images
        modalImages.innerHTML = '';
        event.images.forEach(imageUrl => {
            const img = document.createElement('img');
            img.src = imageUrl;
            img.alt = event.title;
            modalImages.appendChild(img);
        });
        
        modal.style.display = 'block';
    });
});

// Close modal
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Prevent modal close when clicking inside modal content
document.querySelector('.modal-content').addEventListener('click', (event) => {
    event.stopPropagation();
});

// Header video fallback
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('headerVideo');
    const header = document.querySelector('.video-header');

    // Fallback if video fails to load
    video.addEventListener('error', function() {
        header.style.backgroundImage = 'url("https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200")';
        header.style.backgroundSize = 'cover';
        header.style.backgroundPosition = 'center';
    });

    // CTA Button Scroll
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', function() {
        const firstSection = document.querySelector('.slider-section');
        firstSection.scrollIntoView({ behavior: 'smooth' });
    });
});
// Set the event date (YYYY-MM-DD format)
// Set the event date (YYYY-MM-DD format)
// Set the event date (YYYY-MM-DD format)
const eventDate = new Date('2024-12-15T09:00:00').getTime();

// Update the countdown every second
const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = eventDate - now;

    // Calculate time components
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Select and update the countdown values for each card
    document.querySelectorAll('.upcoming-card').forEach(card => {
        const timer = card.querySelector('.timer');

        if (timer) {
            // Update the individual time elements for each upcoming event card
            card.querySelector('.days').textContent = days.toString().padStart(2, '0');
            card.querySelector('.hours').textContent = hours.toString().padStart(2, '0');
            card.querySelector('.minutes').textContent = minutes.toString().padStart(2, '0');
            card.querySelector('.seconds').textContent = seconds.toString().padStart(2, '0');
        }
    });

    // If the countdown is complete, stop the timer
    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.querySelectorAll('.timer').forEach(timer => {
            timer.textContent = "The event has started!";
        });
    }
}, 1000);
document.getElementById("learnMoreBtn").onclick = function() {
    window.location.href = "volunteer-signup.html"; // Replace with your desired URL
}