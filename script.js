document.addEventListener("DOMContentLoaded", function() {
  const noBtn = document.getElementById("noBtn");
  const yesBtn = document.getElementById("yesBtn");
  const h1 = document.querySelector("h1");
  let count = 0;

  yesBtn.addEventListener("click", function() {
    // Extravagant action: Exploding hearts
  });
  

  noBtn.addEventListener("mouseover", function() {
      
      count++;
      console.log(count);
      if (count === 10) {
          document.body.style.backgroundColor = "red";
          document.getElementById("hehe").style.color = "white";
          document.getElementById("hehe").innerHTML = "PLEASE !!!!!!!";
      } else if (count === 20) {
          document.body.style.backgroundColor = "black";
          document.getElementById("hehe").style.color = "red";
          document.getElementById("hehe").innerHTML = "SAY YES!!! >>>:(((";
      } else if (count === 30) {
          document.body.style.backgroundColor = "white";
          document.getElementById("hehe").style.color = "black";
          // Create the span element
          const triggerWordSpan = document.createElement("span");
          triggerWordSpan.id = "triggerWord";
          triggerWordSpan.textContent = "NO";
          triggerWordSpan.style.color = "red";
          noBtn.style.display = "none";
          // Set the innerHTML of the element with id "hehe"
          document.getElementById("hehe").innerHTML = `FINE TRY SAY `;
          document.getElementById("hehe").appendChild(triggerWordSpan);
          document.getElementById("hehe").innerHTML += ` NOW. I am taking away YOUR CHOICE 😈`;

          const triggerWord = document.getElementById("triggerWord");

          triggerWord.addEventListener("click", function() {
            document.getElementById("hehe").innerHTML = "";
            const cryingGif = document.createElement("img");
            cryingGif.src = "sad.gif"; // Replace "path/to/crying.gif" with the actual path to your crying GIF
            cryingGif.alt = "Crying GIF";
            cryingGif.style.width = "400px"; // Adjust the width as needed
            cryingGif.style.height = "auto"; // Maintain aspect ratio
            document.getElementById("hehe").appendChild(cryingGif);
          });

      }
      const container = document.querySelector(".container");
      const containerRect = container.getBoundingClientRect();
      const h1Rect = h1.getBoundingClientRect();

      const containerWidth = containerRect.width;
      const containerHeight = containerRect.height;
      const h1Width = h1Rect.width;
      const h1Height = h1Rect.height;

      const maxX = containerWidth - noBtn.offsetWidth;
      const maxY = containerHeight - noBtn.offsetHeight - h1Height;

      const randomX = Math.random() * maxX;
      const randomY = Math.random() * maxY;

      noBtn.style.position = "absolute";
      noBtn.style.left = randomX + "px";
      noBtn.style.top = randomY + h1Height + "px";
  });
});
