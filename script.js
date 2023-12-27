// script.js

document.getElementById("adoptionForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your adoption inquiry! We will get back to you soon.");
    // You can add further logic here, such as sending the form data to a server.
  });
  



  // JavaScript for star rating filter
const stars = document.querySelectorAll('.star');
const testimonials = document.querySelectorAll('.testimonial-card');

stars.forEach(star => {
  star.addEventListener('click', filterTestimonials);
});

function filterTestimonials(event) {
  const selectedRating = event.target.getAttribute('data-rating');
  
  testimonials.forEach(testimonial => {
    const testimonialRating = testimonial.getAttribute('data-rating');

    if (selectedRating === testimonialRating || selectedRating === 'reset') {
      testimonial.style.display = 'flex';
    } else {
      testimonial.style.display = 'none';
    }
  });
}

function resetFilter() {
  testimonials.forEach(testimonial => {
    testimonial.style.display = 'flex';
  });
}
