function printText() {
    const text = document.getElementById("textareas").value;
    const output = document.getElementById("output");
    const anim = document.querySelector('.my-animation2');
    
    // output.textContent = text;
    // output.style.display = "block";

    
    
    // if(!test){
    //     anim.style.visibility = 'visible';
    //     anim.style.opacity = 1;
    //     anim.style.animation = 'slideDown 5s ease-in-out forwards';
    // }
    // anim.addEventListener('animationend', () => {
    //     anim.style.visibility = 'hidden';
    //     anim.style.opacity = 0;
    //     anim.style.animation = '';
    //     test=true; // reset animation so it can run again
    // });

    
    // setTimeout(() => {
    //     output.style.display = "none";
    //     output.textContent = "";
    // }, 10000);
        // Show text
    output.textContent = text;
    output.style.display = 'block';

    // Show Santa animation
    anim.style.visibility = 'visible';
    anim.style.opacity = 1;

    // Function to start/restart animation
    function startAnimation() {
        anim.style.animation = 'none'; // reset animation
        anim.offsetHeight;             // trigger reflow
        anim.style.animation = 'slideDown 2s linear forwards';
    }

    startAnimation(); // initial start

    // Restart animation when it ends
    anim.addEventListener('animationend', startAnimation);

    // Hide text and animation after 10 seconds
    setTimeout(() => {
        output.style.display = 'none';
        anim.style.opacity = 0;
        anim.style.visibility = 'hidden';
        anim.style.animation = 'none';
        anim.removeEventListener('animationend', startAnimation);
    }, 10000);


function createSnowflakes(num) {
    for (let i = 0; i < num; i++) {
        const flake = document.createElement('img');
        flake.src = 'IMG/snowflake-1077428_640.png'; // your snowflake image
        flake.className = 'snowflake';

        // Random horizontal position (0% to 100% of screen)
        flake.style.left = Math.random() * 100 + 'vw';

        // Random size
        flake.style.width = (15 + Math.random() * 25) + 'px';

        // Random fall duration (speed)
        flake.style.animationDuration = (3 + Math.random() * 5) + 's';

        // Random delay so they don’t all start at once
        flake.style.animationDelay = Math.random() * 5 + 's';

        anim.appendChild(flake);
    }
}

// Create 20 snowflakes
createSnowflakes(20);
}
