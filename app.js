// document.querySelectorAll('.card').forEach(card => {
//     card.addEventListener('mousemove', e => {
//         const rect = card.getBoundingClientRect();
//         // UPDATE CSS VARIABLES FOR THE SPOTLIGHT EFFECT
//         card.style.setProperty('--x', `${e.clientX - rect.left}px`);
//         card.style.setProperty('--y', `${e.clientY - rect.top}px`);
//     })
// })
document.querySelectorAll('.card').forEach(card => {
    let raf;
    const update = (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--y', `${e.clientY - rect.top}px`);
        raf = null;
    };
    card.addEventListener('mousemove', e => {
        if (!raf) raf = requestAnimationFrame(() => update(e));
    });
});

// JS for the project videos will go here



//Form Handling
// document.getElementById('contactForm').addEventListener("submit", function(e) {
//     e.preventDefault();

//     //show success message
//     document.getElementById('successMessage').style.display = 'block';

//     //Reset form for new inputs
//     this.reset();

//     //Remove success message after 3 seconds
//     setTimeout(function() {
//         document.getElementById('successMessage').style.display = 'none';
//     }, 3000);
// })
document.getElementById('contactForm').addEventListener("submit", function() {
    // Do not prevent default, let FormSubmit handle sending
    document.getElementById('successMessage').style.display = 'block';

    setTimeout(function() {
        document.getElementById('successMessage').style.display = 'none';
    }, 3000);
});