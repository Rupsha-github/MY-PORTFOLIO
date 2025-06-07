document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        // UPDATE CSS VARIABLES FOR THE SPOTLIGHT EFFECT
        card.style.setProperty('--x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--y', `${e.clientY - rect.top}px`);
    })
})

// JS for the project videos will go here



//Form Handling
document.getElementById('contactForm').addEventListener(submit, function(e) {
    e.preventDefault();

    //show success message
    document.getElementById('successMessage').style.display = 'block';

    //Reset form for new inputs
    this.reset();

    //Remove success message after 3 seconds
    setTimeout(function() {
        document.getElementById('successMessage').style.display = 'none';
    }, 3000);
})