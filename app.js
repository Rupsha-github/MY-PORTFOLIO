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
document.getElementById('contactForm').addEventListener("submit", function(e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    fetch("https://formsubmit.co/fd35f2c44a498515e2711de8ec98f57a", {
        method: "POST",
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('successMessage').style.display = 'block';
            form.reset();
            setTimeout(() => {
                document.getElementById('successMessage').style.display = 'none';
            }, 3000);
        } else {
            alert("There was a problem sending your message. Please try again.");
        }
    })
    .catch(error => {
        alert("An error occurred. Please try again later.");
    });
});
