import React from "react";
import "../Components/Carousel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function Carousel() {
  return (
    <>
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="4"
            aria-label="Slide 5"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="5"
            aria-label="Slide 6"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="6"
            aria-label="Slide 7"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="7"
            aria-label="Slide 8"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="8"
            aria-label="Slide 9"
          ></button>
        </div>

        <div class="carousel-inner">
          <div class="carousel-item active">
            {/* Earth */}
            <img
              src="https://science.nasa.gov/wp-content/uploads/2023/06/rotating_earth.gif?w=2560&format=webp&crop=1"
              class="d-block w-100"
              alt="..."
            />
          </div>

          {/* Venus */}
          <div class="carousel-item">
            <img
              src="https://science.nasa.gov/wp-content/uploads/2016/05/venus2-jpg.webp?w=2560&format=webp&crop=1"
              class="d-block w-100"
              alt="..."
            />
          </div>

          {/* Mercury */}
          <div class="carousel-item">
            <img
              src="https://science.nasa.gov/wp-content/uploads/2023/04/EW0108829708G4release_mercury-jpg.webp?w=2560&format=webp&crop=1"
              class="d-block w-100"
              alt="..."
            />
          </div>

          {/* Mars */}
          <div class="carousel-item">
            <img
              src="https://science.nasa.gov/wp-content/uploads/2023/04/hubble-mars-litho-image-jpg.webp?w=2560&format=webp&crop=1"
              class="d-block w-100"
              alt="..."
            />
          </div>

          {/* Jupiter */}
          <div class="carousel-item">
            <img
              src="https://science.nasa.gov/wp-content/uploads/2023/06/Go_-_Jupiter.png?w=2560&format=webp&crop=1"
              class="d-block w-100"
              alt="..."
            />
          </div>

          {/* Saturn */}
          <div class="carousel-item">
            <img
              src="https://science.nasa.gov/wp-content/uploads/2023/06/inner_rings_around_saturn_fading.gif?w=2560&format=webp&crop=1"
              class="d-block w-100"
              alt="..."
            />
          </div>

          {/* Uranus */}
          <div class="carousel-item">
            <img
              src="https://science.nasa.gov/wp-content/uploads/2016/05/uranus-jpg.webp?w=2560&format=webp&crop=1"
              class="d-block w-100"
              alt="..."
            />
          </div>

          {/* Neptune */}
          <div class="carousel-item">
            <img
              src="https://science.nasa.gov/wp-content/uploads/2016/05/neptune-jpg.webp?w=2560&format=webp&crop=1"
              class="d-block w-100"
              alt="..."
            />
          </div>

          {/* Pluto */}
          <div class="carousel-item">
            <img
              src="https://science.nasa.gov/wp-content/uploads/2023/06/Color_enhanced_image_of_Pluto_that_shows_a_heart_shape-jpeg.webp?w=2560&format=webp&crop=1"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Carousel;
