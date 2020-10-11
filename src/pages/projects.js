import React, { useState } from "react";
import Pinana from "../images/pinana.png";
import Blue from "../images/Blue.jpg";
import Gold from "../images/gold.jpg";
import Pink from "../images/pink.jpg";

function Projects() {
  console.log(Blue, Gold, Pink);
  const imagesPath = [Pinana, Blue, Gold, Pink];
  console.log(imagesPath);
  var [imageIndex, setImageIndex] = useState(0);
  console.log(useState(0));
  var currentImageSrc = imagesPath[imageIndex];
  console.log(currentImageSrc);
  const nextImage = () => {
    console.log();
    if (imageIndex > 3) {
      imageIndex = 0;
    }
    setImageIndex(imageIndex + 1);
    currentImageSrc = imagesPath[imageIndex];
  };

  return (
    <main className="row">
      <h1>Pinana</h1>
      <div className="column">
        {" "}
        <img src={currentImageSrc} alt="pinana" with="300" height="300" />
      </div>
      <div className="column">
        <p>
          Thesis project, awarded with the academic recognition "Mention of
          honor to the bachelor's degree thesis" for its excellence and
          commitment to the environment and the community.Pinana is a project in
          which a material was developed from pineapple fiber in order to reduce
          the impact on the environment produced by the fashion industry. Pinana
          brand is a durable, handmade material from pineapple fiber that is
          resistant to moisture and has an elegant appearance similar to linen.
          The Pinana brand was created from the success of the material and the
          focus was to develop a line of purses for the summer season with the
          fashion trends for 2018
        </p>
        <br></br>
        <button className="button" onClick={nextImage}>
          Next Picture
        </button>
      </div>
    </main>
  );
}

export default Projects;
