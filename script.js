document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Dropdown Menu Toggle on Mobile
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    
    dropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                e.preventDefault();
                const dropdownMenu = this.nextElementSibling;
                dropdownMenu.classList.toggle('active');
                this.classList.toggle('active');
            }
        });
    });
    
    // Header Scroll Effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
        } else {
            header.style.padding = '15px 0';
        }
    });
    
    // Currency Converter Functionality
    const convertBtn = document.querySelector('.convert-btn');
    const amountInput = document.getElementById('amount');
    const fromCurrency = document.getElementById('from-currency');
    const toCurrency = document.getElementById('to-currency');
    const conversionResult = document.querySelector('.conversion-result');
    const resultDate = document.querySelector('.result-date');
    const swapIcon = document.querySelector('.swap-icon');
    
    // Sample exchange rates (would be replaced with API data in a real application)
    const exchangeRates = {
        'USD': {
            'EUR': 0.92,
            'GBP': 0.79,
            'JPY': 154.21,
            'CAD': 1.37,
            'AUD': 1.52
        },
        'EUR': {
            'USD': 1.09,
            'GBP': 0.86,
            'JPY': 168.23,
            'CAD': 1.49,
            'AUD': 1.66
        },
        'GBP': {
            'USD': 1.26,
            'EUR': 1.16,
            'JPY': 194.87,
            'CAD': 1.72,
            'AUD': 1.92
        },
        'JPY': {
            'USD': 0.0065,
            'EUR': 0.0059,
            'GBP': 0.0051,
            'CAD': 0.0089,
            'AUD': 0.0099
        },
        'CAD': {
            'USD': 0.73,
            'EUR': 0.67,
            'GBP': 0.58,
            'JPY': 112.24,
            'AUD': 1.11
        },
        'AUD': {
            'USD': 0.66,
            'EUR': 0.60,
            'GBP': 0.52,
            'JPY': 101.12,
            'CAD': 0.90
        }
    };
    
    // Initial conversion
    updateConversionResult();
    
    if (convertBtn) {
        convertBtn.addEventListener('click', updateConversionResult);
    }
    
    if (swapIcon) {
        swapIcon.addEventListener('click', function() {
            const temp = fromCurrency.value;
            fromCurrency.value = toCurrency.value;
            toCurrency.value = temp;
            updateConversionResult();
        });
    }
    
    function updateConversionResult() {
        const amount = amountInput.value;
        const from = fromCurrency.value;
        const to = toCurrency.value;
        
        if (from === to) {
            conversionResult.textContent = `${amount} ${from} = ${amount} ${to}`;
        } else {
            const rate = exchangeRates[from][to];
            const result = (amount * rate).toFixed(2);
            conversionResult.textContent = `${amount} ${from} = ${result} ${to}`;
        }
        
        // Update date to current date
        const currentDate = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        resultDate.textContent = `Last updated: ${currentDate.toLocaleDateString('en-US', options)}`;
    }
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Testimonial slider (simple version)
    let testimonialItems = document.querySelectorAll('.testimonial-item');
    let currentIndex = 0;
    
    // Only setup auto-rotation if there are more than one testimonial
    if (testimonialItems.length > 1) {
        // Initial setup
        showTestimonial(currentIndex);
        
        // Auto-rotate testimonials every 5 seconds
        setInterval(() => {
            currentIndex = (currentIndex + 1) % testimonialItems.length;
            showTestimonial(currentIndex);
        }, 5000);
    }
    
    function showTestimonial(index) {
        testimonialItems.forEach((item, i) => {
            // On mobile, just show/hide
            if (window.innerWidth <= 768) {
                item.style.display = i === index ? 'block' : 'none';
            } else {
                // On desktop, they're already all visible due to flex layout
                item.style.opacity = i === index ? '1' : '0.7';
                item.style.transform = i === index ? 'scale(1.05)' : 'scale(1)';
            }
        });
    }
    
    // Newsletter form submission (dummy functionality)
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            
            if (emailInput.value) {
                // Show success message
                const successMessage = document.createElement('p');
                successMessage.textContent = 'Thank you for subscribing to our newsletter!';
                successMessage.style.color = 'green';
                successMessage.style.fontWeight = 'bold';
                
                // Replace the form with the success message
                this.parentNode.replaceChild(successMessage, this);
                
                // Reset form (not needed since we removed it)
                // this.reset();
            }
        });
    }
});