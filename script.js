window.onload = function() {
    let scenePosition = 0;
    let isMoving = false;
    let stage = 0;
    let totoroFrame = 1;
    let catbusFrame = 1;
    const scene = document.getElementById('scene');
    const totoro = document.getElementById('totoro');
    const catbus = document.getElementById('catbus');
    const sceneWidth = 6500;

    function animateTotoro() {
        totoroFrame = (totoroFrame % 12) + 1;
        totoro.src = `totoro${totoroFrame}.png`;
    }
    function animateCatbus() {
        catbusFrame = (catbusFrame % 12) + 1;
        catbus.src = `cat${catbusFrame}.png`;
    }
    
    function moveScene() {
        if (stage === 0) {
            let leftPosition = parseInt(getComputedStyle(totoro).left);
            if (leftPosition < window.innerWidth * 0.4) {
                totoro.style.left = `${leftPosition + 5}px`;
                animateTotoro();
            } else {
                stage = 1;
                totoro.style.display = 'none';
            }
        } else if (stage === 1) {
            stage = 2;
        }
    }
    let trees = [
{ src: 'tree1.png', left: 150, width: 250, bottom: 22, zIndex: 3, opacity: 1 },
{ src: 'tree8.png', left: 120, width: 150, bottom: 24, zIndex: 3, opacity: 0.8 }, 
{ src: 'tree3.png', left: 450, width: 200, bottom: 0, zIndex: 3, opacity: 1 },
{ src: 'tree5.png', left: 700, width: 150, bottom: 16, zIndex: 2, opacity: 0.5 },

{ src: 'tree5.png', left: 620, width: 170, bottom: 16, zIndex: 2, opacity: 0.5 },
{ src: 'tree5.png', left: 500, width: 150, bottom: 16, zIndex: 2, opacity: 0.3 },
{ src: 'tree5.png', left: 730, width: 100, bottom: 16, zIndex: 7, opacity: 1 },
{ src: 'tree7.png', left: 350, width: 225, bottom: 17, zIndex: 2, opacity: 0.5 }, 

{ src: 'tree5.png', left: 900, width: 170, bottom: 0, zIndex: 2, opacity: 0.5 },
{ src: 'tree5.png', left: 1100, width: 150, bottom: 0, zIndex: 2, opacity: 0.3 },
{ src: 'tree5.png', left: 1200, width: 100, bottom: 0, zIndex: 7, opacity: 0.4 },
{ src: 'tree7.png', left: 1350, width: 225, bottom: 0, zIndex: 2, opacity: 0.5 }, 
{ src: 'landbg2.png', left: 1450, width: 400, bottom: 10, zIndex: 2, opacity: 0.6 },
{ src: 'landbg2.png', left: 2450, width: 450, bottom: 25, zIndex: 2, opacity: 0.6 },
{ src: 'landbg2.png', left: 5000, width: 450, bottom: 10, zIndex: 2, opacity: 0.8 },    
{ src: 'landbg1.png', left: 4000, width: 1115, bottom: 10, zIndex: 2, opacity: 0.5 }, 
{ src: 'landbg1.png', left: 6100, width: 1115, bottom: 15, zIndex: 2, opacity: 0.5 },
{ src: 'landbg1.png', left: 6550, width: 1000, bottom: 15, zIndex: 2, opacity: 0.8 },  
{ src: 'tree1.png', left: 800, width: 130, bottom: 12, zIndex: 8, opacity:1 },
{ src: 'tree8.png', left: 1840, width: 140, bottom: 17, zIndex: 7, opacity: 1 }, 
{ src: 'tree8.png', left: 2220, width: 150, bottom: 17, zIndex: 3, opacity: 1 },
{ src: 'tree8.png', left: 2120, width: 200, bottom: 17, zIndex: 2, opacity: 0.4 },
{ src: 'tree3.png', left: 2150, width: 120, bottom: 7, zIndex: 6, opacity: 1 },
{ src: 'tree3.png', left: 2450, width: 150, bottom: 7, zIndex: 6, opacity: 1 },
{ src: 'tree3.png', left: 3050, width: 150, bottom: 7, zIndex: 6, opacity: 1 },
{ src: 'tree3.png', left: 4350, width: 130, bottom: -7, zIndex: 7, opacity: 1 },
{ src: 'tree4.png', left: 4690, width: 120, bottom: 5, zIndex: 5, opacity: 1 },
{ src: 'tree4.png', left: 4750, width: 90, bottom: 5, zIndex: 4, opacity: 1 },
{ src: 'tree3.png', left: 5250, width: 150, bottom: 0, zIndex: 6, opacity: 1 },
{ src: 'tree5.png', left: 5350, width: 110, bottom: 5, zIndex: 6, opacity: 1 },
{ src: 'tree5.png', left: 5150, width: 130, bottom: 5, zIndex: 6, opacity: 1 },
{ src: 'tree5.png', left: 5020, width: 160, bottom: 0, zIndex: 6, opacity: 1 },
{ src: 'tree7.png', left: 6090, width: 120, bottom: 10, zIndex: 6, opacity: 1 },
{ src: 'tree7.png', left: 6350, width: 130, bottom: 10, zIndex: 6, opacity: 1 },
{ src: 'tree6.png', left: 6310, width: 100, bottom: 10, zIndex: 6, opacity: 1 },
{ src: 'tree4.png', left: 6790, width: 120, bottom: 15, zIndex: 6, opacity: 1 },
{ src: 'tree7.png', left: 6850, width: 130, bottom: 11, zIndex: 6, opacity: 1 },
{ src: 'tree1.png', left: 7150, width: 130, bottom: 15, zIndex: 6, opacity: 1 },
{ src: 'tree2.png', left: 7250, width: 130, bottom: 15, zIndex: 6, opacity: 1 },
{ src: 'tree7.png', left: 7350, width: 130, bottom: 12, zIndex: 6, opacity: 1 },

{ src: 'bush2.png', left: 2550, width: 90, bottom:22, zIndex: 11, opacity: 1 },
{ src: 'bush2.png', left: 3780, width: 80, bottom:22, zIndex: 11, opacity: 1 },
{ src: 'bush2.png', left: 5610, width: 60, bottom:14, zIndex: 11, opacity: 1 },
{ src: 'bush2.png', left: 6080, width: 60, bottom:15, zIndex: 10, opacity: 1 },
{ src: 'bush2.png', left: 7400, width: 60, bottom: 18, zIndex: 6, opacity: 1 },


];

function addTrees() {
let scene = document.getElementById('scene'); // Ensure scene is defined in your HTML
trees.forEach(treeData => {
    let tree = document.createElement('img');
    tree.src = treeData.src;
    tree.classList.add('tree');
    tree.style.left = `${treeData.left}px`;
    tree.style.width = `${treeData.width}px`;
    tree.style.bottom = `${treeData.bottom}vh`;
    tree.style.zIndex = treeData.zIndex;
    tree.style.opacity = treeData.opacity; // Set opacity
    scene.appendChild(tree);
});
}
addTrees();


function addHouses() {
let houses = [
    
    { src: 'house2.png', left: 1740, width: 300, bottom: 10, zIndex: 4 },
    { src: 'house3.png', left: 1600, width: 300, bottom: 10, zIndex: 4 },
    { src: 'house4.png', left: 2160, width: 350, bottom: 19, zIndex: 4 },
    { src: 'house5.png', left: 4100, width: 270, bottom: 4, zIndex: 4 }, 
    { src: 'house6.png', left: 6200, width: 175, bottom: 15, zIndex: 4 }, 
    { src: 'house7.png', left: 4800, width: 255, bottom: 6, zIndex: 4 }, 
    { src: 'house8.png', left: 6500, width: 265, bottom: 15, zIndex: 4 }, 
];

houses.forEach(houseData => {
    let house = document.createElement('img');
    house.src = houseData.src;
    house.classList.add('house');
    house.style.left = `${houseData.left}px`;
    house.style.width = `${houseData.width}px`;
    house.style.bottom = `${houseData.bottom}vh`;
    house.style.zIndex = houseData.zIndex;
    scene.appendChild(house);
});
}

// Call the function to add houses
addHouses();
function addStations() {
let stations = [
    { src: 'station1.png', left: 500, bottom: 20, width: 300, zIndex: 9 }, // Station 1

    { src: 'station2.png', left: 1900, bottom: 16, width: 350, zIndex: 6 }, // Station 2

    { src: 'station3.png', left: 2800, bottom: 18, width: 280, zIndex: 6 }, // Station 3

    { src: 'station4.png', left: 4400, bottom: 6, width: 400, zIndex: 6 }, // Station 4

    { src: 'station5.png', left: 5350, bottom: 10, width: 300, zIndex: 6 }, // Final station
    { src: 'station1.png', left: 6900, bottom: 15, width: 300, zIndex: 9 }, // Station 1


];

stations.forEach(stationData => {
    let station = document.createElement('img');
    station.src = stationData.src;
    station.classList.add('station');
    station.style.left = `${stationData.left}px`;
    station.style.bottom = `${stationData.bottom}vh`;
    station.style.width = `${stationData.width}px`; // Manual width control
    station.style.zIndex = stationData.zIndex;

    scene.appendChild(station);
});
}

// Call the function
addStations();


    function moveBus() {
        if (stage === 2 && scenePosition > -sceneWidth) {
scenePosition -= 20;
scene.style.transform = `translateX(${scenePosition}px)`; // Moves scene

animateCatbus(); // Animate Catbus movement

// Adjust Catbus height smoothly
let catbusHeight;
if (scenePosition > -100) {
catbusHeight = 95; // First 100px, height remains 95px
} else if (scenePosition > -200) {
// Gradually decrease from 90px to 25px over 100px
let progress = (scenePosition + 100) / -100;
catbusHeight = 90 - progress * 65; // Interpolates from 90px to 25px (turn1)

} else if (scenePosition > -500) {
catbusHeight = 30; // Stay at 30px for 400px
} else if (scenePosition > -900) {
// Gradually increase from 30px to 45px over 300px (turn2)
let progress = (scenePosition + 500) / -300;

catbusHeight = 30 + progress * 15; // Interpolates from 30px to 45px
} else if (scenePosition > -1300) {
// Gradually increase from 45px to 70px over 300px (turn2b)
let progress = (scenePosition + 800) / -300;
catbusHeight = 45 + progress * 30; // Interpolates from 45px to 70px
} else if (scenePosition > -3250) {
catbusHeight = 95; // Stay at 95px for 1000px
} else if (scenePosition > -3350) { 
// Gradually decrease from 95px to 45px over 100px (turn3) 
let progress = (scenePosition + 3250) / -100;
catbusHeight = 95 - progress * 50; // Interpolates from 95px to 45px
} else if (scenePosition > -3450) {
// Gradually decrease from 45px to 25px over 100px
let progress = (scenePosition + 3350) / -100;
catbusHeight = 45 - progress * 20; // Interpolates from 45px to 25px
} else if (scenePosition > -4000) {
catbusHeight = 25; // Stay at 25px for 500px
} else if (scenePosition > -4250) {
// Gradually increase from 25px to 50px over 100px
let progress = (scenePosition + 4000) / -200;
catbusHeight = 25 + progress * 25; // Interpolates from 25px to 50px
} else if (scenePosition > -4250) {
catbusHeight = 50; // Stay at 50px for 100px
} else if (scenePosition > -4350) {
// Gradually increase from 50px to 65px over 100px
let progress = (scenePosition + 4250) / -100;
catbusHeight = 50 + progress * 15; // Interpolates from 50px to 65px
} else {
catbusHeight = 72; // Stay at 65px after -4250px
}

catbus.style.bottom = `${catbusHeight}px`; // Apply calculated height
catbus.style.zIndex = "5"; // Ensure z-index remains 5 during movement


// Stop when scene reaches the end
if (scenePosition <= -sceneWidth) {
    stage = 3;
    totoro.style.display = 'block';
}
}function addStationText() {
let stationTexts = [
    { title: "Welcome !", info: "I am Suhani....", left: 800, bottom: 60, hasButton: false },
    { title: "About Me", info: "...and I am an engineer.", left: 1650, bottom: 80, hasButton: true, moreInfo: "Hi, I’m Suhani! I’m a DevSecOps engineer with a passion for building secure and scalable systems. When I’m not working on tech projects, you’ll usually find me hanging out with my cats. I’m always eager to learn and take on new challenges, so if you want to connect or collaborate, feel free to reach out!" },
    { title: "Projects", info: "....and these are my projects....", left: 3050, bottom: 70, hasButton: true, moreInfo: "" },
    { title: "Skills", info: "I have a few skills....", left: 4150, bottom: 70, hasButton: true, moreInfo: `
    <div style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; ">
        <button class="skill-button">DevSecOps</button>
        <button class="skill-button">Cloud Computing</button>
        <button class="skill-button">Docker</button>
        <button class="skill-button">Kubernetes</button>
        <button class="skill-button">CI/CD</button>
        <button class="skill-button">Cybersecurity</button>
        <button class="skill-button">Git</button>
        <button class="skill-button">Linux</button>
        <button class="skill-button">MongoDB</button>
        <button class="skill-button">Node.js</button>
        <button class="skill-button">Java</button>
        <button class="skill-button">Azure</button>
    </div>
` 

     },
    { title: "Certifications", info: "Here are my certifications!", left: 5800, bottom: 50, hasButton: true, moreInfo: `
    <div style="display: flex; flex-wrap: wrap; gap: 10px; justify-content: center;">
<figure style="text-align: center;">
    <img src="ceh.png" alt="CEH Badge" style="width: 100px; height: auto;" />
    <figcaption style="font-size: 12px; color: #333;">CEH</figcaption>
</figure>
<figure style="text-align: center;">
    <img src="cnd.png" alt="CND Badge" style="width: 100px; height: auto;" />
    <figcaption style="font-size: 12px; color: #333;">CND</figcaption>
</figure>
<figure style="text-align: center;">
    <img src="cscu.png" alt="CSCU Badge" style="width: 100px; height: auto;" />
    <figcaption style="font-size: 12px; color: #333;">CSCU</figcaption>
</figure>
<figure style="text-align: center;">
    <img src="german3.png" alt="German 3 Badge" style="width: 100px; height: auto;" />
    <figcaption style="font-size: 12px; color: #333;">German 3</figcaption>
</figure>

</div>

` },
    { title: "Contact", info: "Let's connect!", left: 7100, bottom: 60, hasButton: true, moreInfo: `
        <div style="text-align: center;">
            <p>Feel free to reach out to me through the following platforms:</p>
            <ul style="list-style-type: none; padding: 0; display: flex; justify-content: center; gap: 20px;">
                <li><a href="https://www.linkedin.com/in/suhani-908b8224b/" target="_blank"><img src="linkedin.png" alt="LinkedIn" style="width: 30px; height: 30px;" /></a></li>
                <li><a href="https://github.com/xsuhanisinghx" target="_blank"><img src="github.png" alt="GitHub" style="width: 30px; height: 30px;" /></a></li>
                <li><a href="mailto:xsuhanisinghx@gmail.com"><img src="email.png" alt="Email" style="width: 30px; height: 30px;" /></a></li>
                <li><a href="https://www.instagram.com/xbeelzebub666x" target="_blank"><img src="instagram.png" alt="Instagram" style="width: 30px; height: 30px;" /></a></li>
            </ul>
        </div>
    `}
];

stationTexts.forEach(textData => {
    // Create Heading (Title)
    let titleElement = document.createElement('div');
    titleElement.innerText = textData.title;
    titleElement.classList.add('mynerve-regular', 'station-title');
    titleElement.style.left = `${textData.left}px`;
    titleElement.style.bottom = `${textData.bottom}vh`;
    scene.appendChild(titleElement);

    // Create Info (Smaller Text)
    let infoElement = document.createElement('div');
    infoElement.innerText = textData.info;
    infoElement.classList.add('mynerve-regular', 'station-info');
    infoElement.style.left = `${textData.left}px`;
    infoElement.style.bottom = `${textData.bottom - 4}vh`; // Slightly below title
    scene.appendChild(infoElement);

    // Create "Know More" Button (Only if applicable)
    if (textData.hasButton) {
        let button = document.createElement('button');
        button.innerText = "Know More";
        button.classList.add('know-more-button');
        button.style.left = `${textData.left + 20}px`; // Slightly right
        button.style.bottom = `${textData.bottom - 10}vh`; // Below info
        if (textData.title === "Projects") {
            button.onclick = function() {
                openModal(textData.title, "");
            };
        } else {
            button.onclick = function() {
                openModal(textData.title, textData.moreInfo);
            };
        }
        scene.appendChild(button);
    }
});
}

// Function to open modal window with projects slider
function openModal(title, content) {
let modal = document.createElement('div');
modal.classList.add('modal');
modal.innerHTML = `
   <div class="modal-content">
<h2>${title}</h2>
<p>${content}</p>
<!-- Slider will only appear in the Projects modal -->
${title === "Projects" ? `
    <div class="slider-container">
        <button class="slider-btn left">❮</button>
        <div class="slider">
            <div class="slide">
                <div class="image-container">
                    <img src="project1.png" alt="Project 1">
                </div>
                <div class="text-container">
                    <h3>AutoScaleApp</h3>
                    <p class="description">A cloud-native app that automatically scales to handle increased traffic and resource needs.</p>
                    <p class="tech-stack"><strong>Tech Stack:</strong> Docker, Kubernetes, Jenkins, MySQL, Azure</p>
                </div>
            </div>
            <div class="slide">
                <div class="image-container">
                    <img src="project2.png" alt="Project 2">
                </div>
                <div class="text-container">
                    <h3>Text Extractor</h3>
                    <p class="description">A tool to xtracts text from images, PDFs, and Word documents.</p>
                    <p class="tech-stack"><strong>Tech Stack:</strong> Java, Tesseract OCR, Apache POI</p>
                </div>
            </div>
            <div class="slide">
                <div class="image-container">
                    <img src="project3.png" alt="Project 3">
                </div>
                <div class="text-container">
                    <h3>FelineOS Kernel</h3>
                    <p class="description">A custom-built 64-bit kernel and operating system.</p>
                    <p class="tech-stack"><strong>Tech Stack:</strong> Docker, Assembly, Makefile, C</p>
                </div>
            </div>
            <!-- Add more slides as needed -->
        </div>
        <button class="slider-btn right">❯</button>
    </div>
` : ''}
<button class="close-modal">Close</button>
</div>

`;
document.body.appendChild(modal);
modal.style.display = "block";

// Slider functionality for Projects modal only
if (title === "Projects") {
    let currentSlide = 0;
    const slides = modal.querySelectorAll(".slide");
    const slider = modal.querySelector(".slider");

    // Move to next slide
    modal.querySelector(".slider-btn.right").onclick = function() {
        if (currentSlide < slides.length - 1) {
            currentSlide++;
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
    };

    // Move to previous slide
    modal.querySelector(".slider-btn.left").onclick = function() {
        if (currentSlide > 0) {
            currentSlide--;
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        }
    };
}

// Close Modal when clicking "Close"
modal.querySelector(".close-modal").onclick = function() {
    modal.style.display = "none";
    document.body.removeChild(modal);
};
}

// Call function to add text, info, and buttons
addStationText();


}function addLand() {
let lands = [
   
    { src: 'land1.png', left: 100, width: 666, bottom: 15, zIndex: 10 },
    { src: 'land2.png', left: 600, width: 404, bottom: 5, zIndex: 9 },
    { src: 'land6.png', left: 900, width: 600, bottom: -7, zIndex: 6 },
    { src: 'land3.png', left: 1390, width: 666, bottom: 1, zIndex: 7 },
    { src: 'land3.png', left: 1990, width: 666, bottom: 9, zIndex: 6 },
    { src: 'land1.png', left: 2600, width: 666, bottom: 15, zIndex: 8 },
    { src: 'land5.png', left: 3200, width: 600, bottom: 0, zIndex: 6 },
    { src: 'land2.png', left: 3800, width: 404, bottom: 5, zIndex: 7 },
    { src: 'land4.png', left: 4100, width: 450, bottom: -3, zIndex: 7 },
    { src: 'land1.png', left: 4500, width: 666, bottom: -1, zIndex: 6 },
    { src: 'land3.png', left: 5000, width: 666, bottom: 1, zIndex: 7 },
    { src: 'land5.png', left: 5600, width: 580, bottom: -6, zIndex: 6 },
    { src: 'land1.png', left: 6100, width: 666, bottom: 8, zIndex: 8 },
    { src: 'land1.png', left: 6600, width: 666, bottom: 9, zIndex: 7 },
    { src: 'land4.png', left: 7200, width: 300, bottom: 10, zIndex: 7 },
    { src: 'land7.png', left: 7400, width: 360, bottom: 12, zIndex: 9 },
];

lands.forEach(landData => {
    let land = document.createElement('img');
    land.src = landData.src;
    land.classList.add('land');
    land.style.left = `${landData.left}px`;
    land.style.width = `${landData.width}px`;
    land.style.bottom = `${landData.bottom}vh`;
    land.style.zIndex = landData.zIndex; // Set z-index dynamically
    scene.appendChild(land);
});
}


addLand();
    function moveTotoroFinal() {
        if (stage === 3) {
            let leftPosition = parseInt(getComputedStyle(totoro).left);
            if (leftPosition < window.innerWidth * 0.9) {
                totoro.style.left = `${leftPosition + 5}px`;
                totoro.style.bottom = "90px"; // Ensure Totoro stays at bottom 90px
                animateTotoro();
            } else {
                stage = 4;
            }
        }
    }
   const ripple = document.createElement('div');
ripple.classList.add('cursor-effect');
document.body.appendChild(ripple);

document.addEventListener('mousemove', (e) => {
ripple.style.transform = `translate(${e.pageX - 100}px, ${e.pageY - 100}px) scale(1.5)`;
ripple.style.opacity = "1";
});
document.addEventListener('mouseleave', () => {
ripple.style.opacity = "0"; // Hide effect when cursor leaves
});
if (/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)) {
document.body.innerHTML = `
    <div style="display:flex; align-items:center; justify-content:center; height:100vh; text-align:center; font-family:Arial;">
        <h2>This website is not available on mobile. Please use a desktop.</h2>
    </div>
`;
}

function showNavigationMessage() {
let navMessage = document.createElement("div");
navMessage.classList.add("nav-message");
navMessage.innerHTML = `
    <p>Press or hold  <b> -> </b> to go forward</p>
    <button class="close-nav-message">✖</button>
`;

document.body.appendChild(navMessage);

// Close message when clicking the button
document.querySelector(".close-nav-message").onclick = function () {
    navMessage.style.display = "none";
};
}

// Show message when the page loads
window.onload = showNavigationMessage;

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            moveScene();
            moveBus();
            moveTotoroFinal();
        }
    });}