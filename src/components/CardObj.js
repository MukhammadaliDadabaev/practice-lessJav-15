import React, { Component } from "react";
import Card from "./Card";

class CardObj extends Component {
  render() {
    const { userProfil } = this.props;
    return <div className="cards">
      {userProfil.map(user => (
       <Card key={user.id} {...user}/>
      ))}
    </div>;
  }
}

export default CardObj;
