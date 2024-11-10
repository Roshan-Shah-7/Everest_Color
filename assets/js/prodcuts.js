const all = document.getElementById("all"),
  emulsions = document.getElementById("emulsions"),
  primers = document.getElementById("primers"),
  enamels = document.getElementById("enamels"),
  distempers = document.getElementById("distempers"),
  miscellaneous = document.getElementById("miscellaneous"),
  for_all_button = document.getElementById("for-all-button"),
  for_emulsions_button = document.getElementById("for-emulsions-button"),
  for_primers_button = document.getElementById("for-primers-button"),
  for_enamels_button = document.getElementById("for-enamels-button"),
  for_distempers_button = document.getElementById("for-distempers-button"),
  for_miscellaneous_button = document.getElementById(
    "for-miscellaneous-button"
  );

for_all_button.style.display = "block";
for_emulsions_button.style.display = "none";
for_primers_button.style.display = "none";
for_enamels_button.style.display = "none";
for_distempers_button.style.display = "none";
for_miscellaneous_button.style.display = "none";

function showButton(selectedButton) {
  // Hide all buttons
  for_all_button.style.display = "none";
  for_emulsions_button.style.display = "none";
  for_primers_button.style.display = "none";
  for_enamels_button.style.display = "none";
  for_distempers_button.style.display = "none";
  for_miscellaneous_button.style.display = "none";

  // Show the selected button
  selectedButton.style.display = "block";
}

// Add event listeners for each category
all.addEventListener("click", () => showButton(for_all_button));
emulsions.addEventListener("click", () => showButton(for_emulsions_button));
primers.addEventListener("click", () => showButton(for_primers_button));
enamels.addEventListener("click", () => showButton(for_enamels_button));
distempers.addEventListener("click", () => showButton(for_distempers_button));
miscellaneous.addEventListener("click", () =>
  showButton(for_miscellaneous_button)
);


