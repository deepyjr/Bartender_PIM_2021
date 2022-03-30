import React from 'react'
import Button from '../Button/Button'
import './Card.css'

function Card(props) {
  return (
    <div className="card">
        <div className="main-image">
            <img src={process.env.PUBLIC_URL + '/whisky.jpg'} alt="" />
        </div>
        <div className="title">
            <h2>Whisky
                </h2>
        </div>
        <div className="description-card">
            <p>
            Cette édition 10 ans est proposée par la distillerie du Jura situé en Ecosse.
            </p>
        </div>
        <div className="buttons-card">
        <h2><strong>3,80€</strong></h2>
            <Button link={"/acheter"} text={"Ajouter"}/>
            
        </div>

    </div>
  )
}

export default Card