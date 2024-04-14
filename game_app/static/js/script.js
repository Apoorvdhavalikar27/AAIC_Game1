document.addEventListener('DOMContentLoaded', function() {

    var playerNameElement = document.getElementById('player-name');
    var playerScoreElement = document.getElementById('player-score');

    debugger;
    var playerScore = parseInt(playerScoreElement.textContent);
    shootButton.addEventListener('click', function() {
        playerScore++;
        updateScore(playerScore);
    });

    function updateScore(score) {
        playerScore = score;
        playerScoreElement.textContent = playerScore;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    debugger;
    var gameArea = document.getElementById('game-area');
     console.log('DOM Loaded');
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to create an animal element
    function createAnimal() {
    console.log('Creating animal');
        var animal = document.createElement('div');
        animal.className = 'animal';
        // Set initial position randomly within the game area
        var xPos = getRandomNumber(0, gameArea.offsetWidth - 50); // 50 is the width of the animal
        var yPos = getRandomNumber(0, gameArea.offsetHeight - 50); // 50 is the height of the animal
        animal.style.left = xPos + 'px';
        animal.style.top = yPos + 'px';
        gameArea.appendChild(animal);
    }

    // Create an animal every second
//    setInterval(createAnimal, 1000);
});
document.addEventListener('DOMContentLoaded', function() {
    // Get the game area element
    var gameArea = document.getElementById('game-area');

    // Function to create a random number between min and max
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to create an animal element
    function createAnimal() {
        var animal = document.createElement('div');
        animal.className = 'animal';

        // Set initial position randomly within the game area
        var xPos = getRandomNumber(0, gameArea.offsetWidth - 50); // 50 is the width of the animal
        var yPos = getRandomNumber(0, gameArea.offsetHeight - 50); // 50 is the height of the animal
        animal.style.left = xPos + 'px';
        animal.style.top = yPos + 'px';

        gameArea.appendChild(animal);

        // Move the animal randomly
        var moveInterval = setInterval(function() {
            var deltaX = getRandomNumber(-10, 10); // Change in x-coordinate
            var deltaY = getRandomNumber(-10, 10); // Change in y-coordinate

            var currentLeft = parseInt(animal.style.left);
            var currentTop = parseInt(animal.style.top);

            var newLeft = currentLeft + deltaX;
            var newTop = currentTop + deltaY;

            // Ensure the new position is within the game area
            newLeft = Math.max(0, Math.min(gameArea.offsetWidth - 50, newLeft)); // 50 is the width of the animal
            newTop = Math.max(0, Math.min(gameArea.offsetHeight - 50, newTop)); // 50 is the height of the animal

            animal.style.left = newLeft + 'px';
            animal.style.top = newTop + 'px';
        }, 1000); // Move the animal every second

        // Stop moving the animal after a random duration
        setTimeout(function() {
            clearInterval(moveInterval);
            gameArea.removeChild(animal);
        }, getRandomNumber(5000, 15000)); // Random duration between 5 and 15 seconds
    }

    // Function to move existing animals
// Function to move each animal separately
function moveAnimals() {
    // Select all existing animal elements
    var animals = document.querySelectorAll('.animal');
    var bullets = document.querySelectorAll('.bullet');

    // Iterate through each animal and move them
    animals.forEach(function(animal) {
        // Calculate random movement
        var deltaX = getRandomNumber(-10, 10); // Change in x-coordinate
        var deltaY = getRandomNumber(-10, 10); // Change in y-coordinate

        var currentLeft = parseInt(animal.style.left);
        var currentTop = parseInt(animal.style.top);

        var newLeft = currentLeft + deltaX;
        var newTop = currentTop + deltaY;

        // Ensure the new position is within the game area
        newLeft = Math.max(0, Math.min(gameArea.offsetWidth - 0.5, newLeft)); // 50 is the width of the animal
        newTop = Math.max(0, Math.min(gameArea.offsetHeight - 0.5, newTop)); // 50 is the height of the animal

        animal.style.left = newLeft + 'px';
        animal.style.top = newTop + 'px';

        var animalRect = animal.getBoundingClientRect();

         bullets.forEach(function(bullet) {
            var bulletRect = bullet.getBoundingClientRect();
            if (collisionDetected(animalRect, bulletRect)) {
                // Remove the animal
                animal.parentNode.removeChild(animal);
                // Remove the bullet
                bullet.parentNode.removeChild(bullet);
                incrementScore();
                debugger;
                 if (animals.length == 1) {
                // Redirect to the end page
                window.location.href = '/end/' + incrementScore(); // Assuming getPlayerScore() retrieves the player's score
            }

            }

        });
    });
}
function collisionDetected(rect1, rect2) {
    return !(rect1.right < rect2.left ||
             rect1.left > rect2.right ||
             rect1.bottom < rect2.top ||
             rect1.top > rect2.bottom);
}

// Call the moveAnimals function at a regular interval
setInterval(moveAnimals, 150); // Adjust interval as needed



    // Create an animal every second
//    setInterval(createAnimal, 3000); // Changed interval to 3 seconds for easier testing
});
document.addEventListener('DOMContentLoaded', function() {
    // Get the game area element
    var gameArea = document.getElementById('game-area');

    // Get the gun symbol element
    var gunSymbol = document.getElementById('gun-symbol');

    // Function to create a bullet element
    function createBullet() {
        var bullet = document.createElement('div');
        bullet.className = 'bullet';
        bullet.style.position = 'absolute';
        bullet.style.width = '5px'; // Adjust bullet size as needed
        bullet.style.height = '5px'; // Adjust bullet size as needed
        bullet.style.backgroundColor = 'red'; // Adjust bullet color as needed

        // Position the bullet at the gun symbol's location
        bullet.style.left = gunSymbol.offsetLeft + 'px';
        bullet.style.top = gunSymbol.offsetTop + 'px';

        // Append the bullet to the game area
        gameArea.appendChild(bullet);

        // Move the bullet
        var moveInterval = setInterval(function() {
            // Move the bullet upwards
            bullet.style.top = (parseInt(bullet.style.top) - 5) + 'px';

            // Remove the bullet when it goes out of the game area
            if (parseInt(bullet.style.top) < 0) {
                clearInterval(moveInterval);
                gameArea.removeChild(bullet);
            }
        }, 50); // Adjust bullet speed as needed
    }

    // Event listener for clicking on the gun symbol
    document.getElementById('game-interface').addEventListener('click', function(event) {
//    if (event.target.id === 'gun-symbol') {
        console.log('Gun symbol clicked');
        // Fire a bullet
        createBullet();
//    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Get the game area element
    var gameArea = document.getElementById('game-area');

    // Get the gun symbol element
    var gunSymbol = document.getElementById('gun-symbol');

    // Function to create a bullet element
    function createBullet() {
        var bullet = document.createElement('div');
        bullet.className = 'bullet';
        bullet.style.position = 'absolute';
        bullet.style.width = '5px'; // Adjust bullet size as needed
        bullet.style.height = '5px'; // Adjust bullet size as needed
        bullet.style.backgroundColor = 'red'; // Adjust bullet color as needed

        // Position the bullet at the gun symbol's location
        bullet.style.left = gunSymbol.offsetLeft + 'px';
        bullet.style.top = gunSymbol.offsetTop + 'px';

        // Append the bullet to the game area
        gameArea.appendChild(bullet);

        // Move the bullet
        var moveInterval = setInterval(function() {
            // Move the bullet upwards
            bullet.style.top = (parseInt(bullet.style.top) - 5) + 'px';

            // Remove the bullet when it goes out of the game area
            if (parseInt(bullet.style.top) < 0) {
                clearInterval(moveInterval);
                gameArea.removeChild(bullet);
            }
        }, 100); // Adjust bullet speed as needed
    }

    // Event listener for clicking on the gun symbol
    gunSymbol.addEventListener('click', function() {
        console.log("Gun symbol clicked");
        var gameArea = document.getElementById('game-area');
    var gunSymbol = document.getElementById('gun-symbol');

        // Get the current left position of the gun symbol
        var currentLeft = parseInt(gunSymbol.style.left) || 0;
        console.log("Current left position:", currentLeft);

        // Calculate the new left position
        var newLeft = currentLeft + 10; // Adjust the movement distance as needed
        console.log("New left position:", newLeft);

        // Update the left position of the gun symbol
        gunSymbol.style.left = newLeft + 'px';

        // Fire a bullet
        createBullet();
    });
});

});

function incrementScore() {
    var playerScoreElement = document.getElementById('player-score');
    console.log('player-score',playerScoreElement)
    var currentScore = parseInt(playerScoreElement.textContent) || 0;
    var newScore = currentScore + 10;
    playerScoreElement.textContent = newScore;
    return  playerScoreElement.textContent-10;
}

document.addEventListener('DOMContentLoaded', function() {
    // Get the game area element
    var gameArea = document.getElementById('game-area');
    // Get the gun element
    var gun = document.getElementById('gun-symbol');

    // Event listener for mouse movement
    gameArea.addEventListener('mousemove', function(event) {
        // Calculate the new left position of the gun relative to the game area
        var newLeft = event.clientX - gameArea.getBoundingClientRect().left - (gun.offsetWidth / 2);
        // Ensure the new position is within the game area
        newLeft = Math.max(0, Math.min(gameArea.offsetWidth - gun.offsetWidth, newLeft));
        // Update the gun position
        gun.style.left = newLeft + 'px';
    });

    // Rest of your code...
});

