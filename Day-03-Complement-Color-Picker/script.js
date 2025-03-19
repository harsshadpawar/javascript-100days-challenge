const colorInput = document.getElementById("colorInput");
const colorCode = document.getElementById("colorCode");
const copyButton = document.getElementById("copyButton");
const complementaryContainer = document.getElementById(
  "complementaryContainer"
);
const saveColorButton = document.getElementById("saveColorButton");
const favoritesContainer = document.getElementById("favoritesContainer");

colorInput.addEventListener("input", () => {
  const selectedColor = colorInput.value;
  updateColorDisplay(selectedColor);
  showComplementaryColor(selectedColor);
});

function updateColorDisplay(color) {
  colorCode.textContent = color;
  colorCode.style.color = color;
}

function showComplementaryColor(color) {
  const complementaryColors = getComplementaryColor(color);
  complementaryContainer.innerHTML = "";

  complementaryColors.forEach((compColor) => {
    const colorBox = document.createElement("div");
    colorBox.classList.add("color-box");
    colorBox.style.backgroundColor = compColor;
    complementaryContainer.appendChild(colorBox);
  });
}

function getComplementaryColor(color) {
  const base = parseInt(color.slice(1), 16);
  const complement = (0xffffff ^ base).toString(16).padStart(6, "0");
  return [`#${complement}`];
}

copyButton.addEventListener("click", () => {
  navigator.clipboard
    .writeText(colorCode.textContent)
    .then(() => alert("color code copied"))
    .catch((err) => console.error("failed to copy", err));
});

saveColorButton.addEventListener("click", () => {
  const color = colorCode.textContent;
  addFavoutiteColor(color);
});

function addFavoutiteColor(color) {
  const colorBox = document.createElement("div");
  colorBox.classList.add("color-box");
  colorBox.style.backgroundColor = color;
  colorBox.title = color;
  favoritesContainer.appendChild(colorBox);
}
