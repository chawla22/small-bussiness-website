
// CTA button scroll
document.getElementById("cta-btn").addEventListener("click", () => {
  document.getElementById("services").scrollIntoView({ behavior: "smooth" });
});


// CTA headline update
document.getElementById("update-button").addEventListener("click", function () {
  const newText = document.getElementById("headline-input").value.trim();
  console.log("New headline text:", newText); 
  const headline = document.getElementById("cta-headline");
  console.log("Current headline text:", headline.textContent); 

  if (newText !== "") {
    headline.textContent = newText;
  } else {
    alert("Please enter a valid headline.");
  }
});
