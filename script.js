async function fetchPomeranian() {
    try {
        const response = await fetch("https://dog.ceo/api/breed/pomeranian/images/random");
        const data = await response.json();
        document.getElementById("dog-image").src = data.message; 
    } catch (error) {
        console.error("Error fetching the dog image:", error);
    }
}


fetchPomeranian();

document.addEventListener("mousemove", function(event) {
    let x = event.clientX / window.innerWidth;
    let y = event.clientY / window.innerHeight;
    let red = Math.round(x * 255);
    let blue = Math.round(y * 255);
    let color = `rgb(${red}, 100, ${blue})`;

    document.body.style.backgroundColor = color;
});
