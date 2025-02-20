document.getElementById("mybutton").addEventListener("click", function () {
    let result = Math.random() < 0.5 ? "Heads" : "Tails";

    // Update result text
    document.getElementById("result").textContent = "Result: " + result;

    // Get image elements
    let headsImg = document.getElementById("coin-heads");
    let tailsImg = document.getElementById("coin-tails");

    // Show the correct image and hide the other
    if (result === "Heads") {
        headsImg.style.display = "block";
        tailsImg.style.display = "none";
    } else {
        headsImg.style.display = "none";
        tailsImg.style.display = "block";
    }
});


