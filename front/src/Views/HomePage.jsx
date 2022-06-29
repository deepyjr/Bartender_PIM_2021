import React from "react";
import Card from "../Components/Card/Card";
import "./HomePage.css";
import Layout from "./Layout";
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
              name: "Maragarita",
              description: "tequila - triple sec - jus de citrons verts",
              prix: 10,
            },
            {
              name: "Mojito",
              description: "rhum blanc - sucre de canne - menthe",
              prix: 8,
            },
            {
              name: "Heineken - 25 cl",
              description: "Bière blonde légère",
              prix: 4,
            },
            {
              name: "Ricard",
              description: "Boisson du sud par exellence",
              prix: 4,
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
