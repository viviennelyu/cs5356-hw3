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
