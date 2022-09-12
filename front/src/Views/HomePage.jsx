import React from "react";
import "./HomePage.css";
import Wrapper from "../Components/Wrapper/Wrapper";

function HomePage() {
  return (
    <>
      <div className="card-container">
        <Wrapper
          img={"/boissons-pop.jpg"}
          title={"Populaire"}
          items={[
            {
              name: "Rhum coca",
              description: "Un rhum avec du coca",
              prix: 10,
              nametag: "rhumcoca"
            },
            {
              name: "Whisky Coca",
              description: "Un whisky avec du coca",
              prix: 8,
              nametag: "whiskycoca"
            },
            {
              name: "Rhum",
              description: "Du rhum tout seul",
              prix: 4,
              nametag: "rhum"
            },
            {
              name: "Coca",
              description: "Du coca cola bien frais",
              prix: 4,
              nametag: "coca"
            },
          ]}
        />
        <Wrapper
          img={"/france.jpg"}
          title={"Francais"}
          items={[
            {
              name: "Saint emilion",
              description: "Vin rouge de bordeaux",
              prix: 10,
            },
            {
              name: "Saint Joseph",
              description: "Vin rouge puissant et fin",
              prix: 10,
            },
            {
              name: "Mont Basillac",
              description: "Vin blanc licoreux",
              prix: 10,
            },
            {
              name: "Ricard",
              description: "Boisson du sud par exellence",
              prix: 4,
            },
          ]}
        />
        <Wrapper
          img={"/offre.jpg"}
          title={"Belles offres"}
          items={[
            {
              name: "Maragarita",
              description: "tequila - triple sec - jus de citrons verts",
              prix: 10,
            },
            {
              name: "Heineken - 50 cl",
              description: "Bière blonde légère",
              prix: 8,
            },
            {
              name: "Heineken - 25 cl",
              description: "Bière blonde légère",
              prix: 4,
            },
          ]}
        />
      </div>
    </>
  );
}

export default HomePage;
