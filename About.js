alert("Welcome to My School Website!");

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
