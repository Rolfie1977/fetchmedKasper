import React from "react";

//komponent til at vise vores brugere
//tager imod props (name, username, website)
//returnerer et html element (div) med de pågældende data

export const CardAvatar = (props) => {
  return (
    <div>

    <h4>{ props.name}</h4>
    <h6>AKA: {props.username}</h6>
    <br/><br/>

    <p>Find me at:</p>
    <p>{props.website}</p>
    </div>
  )
}
