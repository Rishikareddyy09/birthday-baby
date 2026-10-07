const birthdayMessage = document.getElementById("birthdayMessage");

birthdayMessage.classList.add("hidden");


function checkDrink() {

  const input = document.getElementById("drinkInput");
  const errorMessage = document.getElementById("errorMessage");

  const answer = input.value.trim().toLowerCase();


  if (answer === "diet coke") {

    errorMessage.textContent = "✓ ACCESS GRANTED ❤️";

    setTimeout(() => {

      document.querySelector(".container").style.display = "none";

      birthdayMessage.classList.remove("hidden");

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
a
    }, 700);


  } else {

    errorMessage.textContent =
      "✗ ACCESS DENIED. Babe... you should know this 😭";

    input.value = "";

    input.focus();

  }

}


document
  .getElementById("drinkInput")
  .addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
      checkDrink();
    }

  });
