  // Selecting elements
  const billInput = document.getElementById("billAmount");
  const peopleInput = document.getElementById("numPeople");
  const tipButtons = document.querySelectorAll(".button_container button");
  const customTipInput = document.getElementById("customTip");
  const tipAmountDisplay = document.getElementById("tipAmount");
  const totalAmountDisplay = document.getElementById("totalAmount");
  const resetButton = document.getElementById("reset");

  // Function to calculate tip
  function calculateTip(tipPercentage) {
      let bill = parseFloat(billInput.value);
      let people = parseInt(peopleInput.value);

    //   if (isNaN(bill) || bill <= 0) {
    //       alert("Please enter a valid bill amount!");
    //       return;
    //   }

      if (isNaN(people) || people <= 0) {
          peopleError.innerText = "Can't be zero"; // Show error message
          peopleError.style.display = "inline"; 
          return;
      } else {
          peopleError.style.display = "none"; // Hide error if input is valid
      }

      let tipAmount = (bill * tipPercentage) / 100;
      let totalAmount = bill + tipAmount;

      let tipPerPerson = tipAmount / people;
      let totalPerPerson = totalAmount / people;

      tipAmountDisplay.innerText = `$${tipPerPerson.toFixed(2)}`;
      totalAmountDisplay.innerText = `$${totalPerPerson.toFixed(2)}`;
  }

  // Function to remove active class from all buttons
  function resetActiveButtons() {
      tipButtons.forEach(button => button.classList.remove("active"));
  }

  // Handle tip button clicks
  tipButtons.forEach(button => {
      button.addEventListener("click", function() {
          resetActiveButtons();
          this.classList.add("active"); // Add active class
          let tipPercentage = parseFloat(this.innerText.replace("%", ""));
          calculateTip(tipPercentage);
      });
  });

  // Handle custom tip input
  customTipInput.addEventListener("input", function() {
      resetActiveButtons(); // Remove highlight from other buttons
      let customTip = parseFloat(customTipInput.value);
      if (!isNaN(customTip) && customTip > 0) {
          calculateTip(customTip);
      }
  });

  // Reset function
  resetButton.addEventListener("click", function() {
      billInput.value = "";
      peopleInput.value = "";
      customTipInput.value = "";
      tipAmountDisplay.innerText = "$0.00";
      totalAmountDisplay.innerText = "$0.00";
      resetActiveButtons();
  });
