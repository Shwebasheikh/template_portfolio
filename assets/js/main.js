/* Code to animate the progress bars */
window.addEventListener('scroll', () => {
    const skillContainer = document.querySelector('.skill-container');
    const skillSectionPosition = skillContainer.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
  
    if (skillSectionPosition < screenPosition) {
      const progressBars = document.querySelectorAll('.progress-bar');
      progressBars.forEach((bar) => {
        const value = bar.getAttribute('aria-valuenow');
        bar.style.width = `${value}%`;
      });
    }
  });



// navbar 

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }