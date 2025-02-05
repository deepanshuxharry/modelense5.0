import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)




$(document).ready(function () {
  // Initialisatie van de variabelen
  let currentIndex = 0;
  const slides = $(".slide");
  const slideCount = slides.length;
  let interval;

  // CSS aanpassen om de slides naast elkaar te zetten en te verbergen
  $(".slider").css({
    position: "relative",
    overflow: "hidden"
  });
  slides.css({
    position: "absolute",
    width: "100%",
    display: "none",
    right: "-100%" // Startpositie buiten beeld
  });

  // Functie om de huidige slide naar binnen te schuiven en de rest te verbergen
  function showSlide(index) {
    slides.stop(true, true).hide(); // Verberg alle slides
    slides.eq(index).css("right", "-100%").show().animate(
      {
        right: "0"
      },
      600
    ); // Schuif de huidige slide naar binnen
  }

  // Eerste slide laten zien bij pagina laden
  showSlide(currentIndex);

  // Timer instellen voor automatische rotatie
  function startSlider() {
    interval = setInterval(function () {
      currentIndex = (currentIndex + 1) % slideCount; // Volgende slide, terug naar 0 na de laatste
      showSlide(currentIndex);
    }, 3000); // Stel de tijd in milliseconden in (bijv. 3000ms voor 3 seconden)
  }

  function stopSlider() {
    clearInterval(interval);
  }

  // Start de slider bij pagina laden
  startSlider();

  // Pauzeer de animatie bij klikken op een slide
  slides.on("click", function () {
    stopSlider();
    $(".play").toggle();
  });
  // Hervat de animatie bij klikken op play
  $(".play").click(function () {
    startSlider();
    $(".play").toggle();
  });
});
