
if (window.location.pathname.includes("index.html")) {
    alert("Welcome to Luzira Secondary School Website!");
}

  function validateForm(event) {
    const name = document.querySelector('input[name="fullname"]');
    const email = document.querySelector('input[name="email"]');
    const message = document.querySelector('textarea[name="message"]');

    if (name.value.trim() === "") {
        alert("Name is required");
        event.preventDefault();
        return false;
    }

    if (!email.value.includes("@")) {
        alert("Enter a valid email");
        event.preventDefault();
        return false;
    }

    if (message.value.trim().length < 10) {
        alert("Message must be at least 10 characters");
        event.preventDefault();
        return false;
    }

    return true;
}

function showContent(type) {
    let content = document.getElementById("content");

    if (type === "olevel") {
        content.innerHTML = "<h3>O-Level Subjects</h3><p>Math, English, Biology...</p>";
    } else {
        content.innerHTML = "<h3>A-Level Combinations</h3><p>PCM, BCM, MEG...</p>";
    }
}

let links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", function() {
        links.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});

function openImage(img) {
    document.getElementById("imageModal").style.display = "flex";
    document.getElementById("modalImg").src = img.src;
}

function closeImage() {
    document.getElementById("imageModal").style.display = "none";
}

let slideIndex = 0;


function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// List all  image filenames 
const imageList = [
    "image7.jpeg", "image2.jpeg", "image3.jpeg", "image8.jpeg", "image9.jpeg", "image10.jpeg",
    "image4.jpeg", "image5.jpeg", "image6.jpeg",
    // Add images
];

const slideshowContainer = document.querySelector('.slideshow-container');

// This function automatically creates the HTML for every image in your list
function generateSlides() {
    imageList.forEach((imgSrc, index) => {
        let slideDiv = document.createElement('div');
        slideDiv.className = "mySlides fade";
        
        slideDiv.innerHTML = `
            <div class="numbertext">${index + 1} / ${imageList.length}</div>
            <img src="${imgSrc}" style="width:100%">
        `;
        
        slideshowContainer.appendChild(slideDiv);
    });
}

// Run the generator, then start the animation
generateSlides();
showSlides();
