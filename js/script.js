// Define variables
// Elements
const donutElement = document.querySelector("#donut");
const scoreElement = document.querySelector("#score");
const barContainerElement = document.querySelector(".bar-container");
const barForegroundElement = document.querySelector(".bar-container>.bar>.foreground");
const commentaryElement = document.querySelector("#commentary");

// Variables
let donutStrike = 0;
let lastShakeAngle = 0;
let score = 0;
let multiplier = 1;

// Reduce score to a readable format
const parseScore = (score) => {
    // If score is less than 1000, return it
    if (score < 1000) {
        return score;
    }

    // Define score units
    const scoreUnits = ["K", "M", "G", "T", "P", "E", "Z", "Y"];
    let scoreUnitIndex = -1;

    // Divide score by 1000 until it's less than 1000
    while (score >= 1000) {
        score /= 1000;
        scoreUnitIndex += 1;
    }

    // Convert score to string and remove decimals
    let scoreText = score.toString().substring(0, 4)
    if (scoreText.endsWith("."))
        scoreText = scoreText.substring(0, 3);

    return scoreText + scoreUnits[scoreUnitIndex];
};

// Register score end shake
scoreElement.addEventListener("animationend", () => {
    // Clear classList since we don't need any animation
    scoreElement.classList = "";
});

// Register donut click
donutElement.addEventListener("click", () => {
    donutStrike += 100;

    // Update score
    score += multiplier * multiplierItem.multiplier;
    scoreElement.innerText = parseScore(score);

    // Enable animation
    scoreElement.classList.add("shake");

    // Create falling donut
    for (let i = 0; i < multiplier; i++)
        createDonut();
});

//* Update function (frame tick: 50ms)
setInterval(() => {

    // Limit strike
    if (donutStrike > 2000) {
        donutStrike = 2000;
    }

    // Update strike and bar
    if (donutStrike > 0) {
        donutStrike -= 20;
        barContainerElement.classList.remove("hidden");

        const barProgress = donutStrike / 15;
        barForegroundElement.style.width = barProgress + "%";

        if (barProgress > 100) {
            multiplier = 4;
            barForegroundElement.style.backgroundColor = "red";
        }
        else if (barProgress > 75) {
            multiplier = 3;
            barForegroundElement.style.backgroundColor = "orange";
        }
        else if (barProgress > 50) {
            multiplier = 2;
            barForegroundElement.style.backgroundColor = "yellow";
        }
        else {
            barForegroundElement.style.backgroundColor = "white";
        }
    }
    else {
        barContainerElement.classList.add("hidden");
    }

    // Rotate shake angle
    lastShakeAngle += Math.PI * 1.2;

    // Let's do some trigonometry // // (merci l'option Maths Expertes)
    const random = {
        x: Math.cos(lastShakeAngle) * Math.min(donutStrike, 500),
        y: Math.sin(lastShakeAngle) * Math.min(donutStrike, 500)
    };

    // Apply transform
    donutElement.style.transform = `translate(${random.x}px, ${random.y}px)`;
}, 50);

// ------------------------------
// Commentary section
// ------------------------------

// Define a list of commentary
const commentary = [
    "WOW!",
    "CLIQUE CLIQUE CLIQUE!",
    "INCROYABLE!",
    "STRIKE!",
    "DOONUUUUUUUUUUTS!",
    "DONUT KILL",
    "DONUT ACE",
    "INSANE!!!",
    "ENCORE PLUS DE DONUTS!",
    "D. O. N. U. T. mode activated",
    "🍩🍩🍩!!"
];

// Every 5 seconds, change the commentary
let commentaryIndex = 0;
//* Update function (frame tick: 5s)
setInterval(() => {
    commentaryElement.innerText = commentary[commentaryIndex];

    // Loop through commentaries
    commentaryIndex += 1;
    // And reset index if we reach the end
    if (commentaryIndex >= commentary.length) {
        commentaryIndex = 0;
    }
}, 5000);

// ------------------------------
// Falling donuts section
// ------------------------------
const donutContainerElement = document.querySelector(".donut-container");

const createDonut = () => {
    // Create donut element
    const donut = document.createElement("img");
    donut.src = "img/icons/donut.png";
    donut.classList.add("falling-donut");

    // Random position
    donut.style.left = Math.floor(Math.random() * 100) + "vw";
    donutContainerElement.appendChild(donut);

    // Delete after 5 seconds (animation duration)
    setTimeout(() => {
        donutContainerElement.removeChild(donut);
    }, 5000);
}

// ------------------------------
// Shop section
// ------------------------------

// Multiplier variable
const multiplierItem = {
    price: 20,
    multiplier: 1
}

// Shop items list (a long list i know)
const shopItems = [
    {
        name: "Cursor",
        price: 10,
        owned: 0,
        dps: 1
    },
    {
        name: "Grandma",
        price: 100,
        owned: 0,
        dps: 10
    },
    {
        name: "Factory",
        price: 1000,
        owned: 0,
        dps: 100
    },
    {
        name: "Mine",
        price: 10000,
        owned: 0,
        dps: 1000
    },
    {
        name: "Shipment",
        price: 100000,
        owned: 0,
        dps: 10000
    },
    {
        name: "Donut Lab",
        price: 1000000,
        owned: 0,
        dps: 100000
    },
    {
        name: "Portal",
        price: 10000000,
        owned: 0,
        dps: 1000000
    },
    {
        name: "Donut Machine",
        price: 100000000,
        owned: 0,
        dps: 10000000
    },
    {
        name: "Donut Town",
        price: 1000000000,
        owned: 0,
        dps: 100000000
    },
    {
        name: "Donut City",
        price: 10000000000,
        owned: 0,
        dps: 1000000000
    },
    {
        name: "United States of Donuts",
        price: 100000000000,
        owned: 0,
        dps: 10000000000
    },
    {
        name: "Donut Continent",
        price: 1000000000000,
        owned: 0,
        dps: 100000000000
    },
    {
        name: "Donut World",
        price: 10000000000000,
        owned: 0,
        dps: 1000000000000
    },
    {
        name: "Donut Planet",
        price: 100000000000000,
        owned: 0,
        dps: 10000000000000
    },
    {
        name: "Donut-Sun System",
        price: 1000000000000000,
        owned: 0,
        dps: 100000000000000
    },
    {
        name: "Milky Donut Way",
        price: 10000000000000000,
        owned: 0,
        dps: 1000000000000000
    },
    {
        name: "Local Galactic Donut Group",
        price: 100000000000000000,
        owned: 0,
        dps: 10000000000000000
    },
    {
        name: "Donut Universe",
        price: 1000000000000000000,
        owned: 0,
        dps: 100000000000000000
    },
    {
        name: "Donut Multiverse",
        price: 10000000000000000000,
        owned: 0,
        dps: 1000000000000000000
    },
    {
        name: "Donut Dimension",
        price: 100000000000000000000,
        owned: 0,
        dps: 10000000000000000000
    },
    {
        name: "Donut Dimentionnal-Realm",
        price: 1000000000000000000000,
        owned: 0,
        dps: 100000000000000000000
    },
    {
        name: "The Ultimate Donut",
        price: 9999999999999999999999,
        owned: 0,
        dps: 9999999999999999999999
    }
]

// Elements
const shopElement = document.querySelector(".shop");
const dpsElement = document.querySelector("#dps");

// Update shop in the DOM (display)
const updateShop = () => {
    // Reset shop and define variables
    shopElement.innerHTML = "";
    let dps = 0;
    let shopHTML = ` 
        <div class="multiplier">
            <div class="info">
                <p class="name">Multiplier Boost</p>
                <p class="desc">+${multiplierItem.multiplier} 🍩/click</p>
            </div>
            <button class="buy-multiplier">${parseScore(multiplierItem.price)}🍩</button>
        </div>
        <div class="separator"></div>
    `;

    // Loop through shop items and add them to the shop
    for (let i = 0; i < shopItems.length; i++) {
        const item = shopItems[i];

        shopHTML += `
            <div>
                <div class="info">
                    <p class="name">${item.name} <span>(x${item.owned})</span></p>
                    <p class="desc">+${parseScore(item.dps)} 🍩/s</p>
                </div>
                <button class="buy">${parseScore(item.price)}🍩</button>
            </div>
        `;

        dps += item.dps * item.owned;

        // Hide next item if current item is not owned
        if (i < shopItems.length - 1 && item.owned === 0) {
            break;
        }
    }

    // Display shop
    shopElement.innerHTML = shopHTML;
    dpsElement.innerText = parseScore(dps) + " 🍩/s";

    // Add event listeners to buy buttons
    const buyButtons = document.querySelectorAll(".buy");
    for (let i = 0; i < buyButtons.length; i++) {

        buyButtons[i].addEventListener("click", () => {

            const item = shopItems[i];
            if (score >= item.price) {
                score -= item.price;

                scoreElement.innerText = parseScore(score);

                item.owned += 1;
                item.price = Math.floor(item.price * 1.15);

                updateShop();
            }
        });
    }

    // Same for multiplier button (as it's not in the shopItems array)
    const buyMultiplierButton = document.querySelector(".buy-multiplier");
    buyMultiplierButton.addEventListener("click", () => {
        if (score >= multiplierItem.price) {
            score -= multiplierItem.price;

            scoreElement.innerText = parseScore(score);

            multiplierItem.price = Math.floor(multiplierItem.price * 2.15);
            if (multiplierItem.multiplier < 10)
                multiplierItem.multiplier += 1;
            else
                multiplierItem.multiplier *= 2;

            updateShop();
        }
    });
}

updateShop();

//* Update function (frame tick: 1000ms)
setInterval(() => {
    // Add score based on owned items
    for (let i = 0; i < shopItems.length; i++) {
        const item = shopItems[i];

        score += item.owned * item.dps;
        scoreElement.innerText = parseScore(score);
    }
}, 1000);