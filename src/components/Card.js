import React, { Component } from "react";

class Card extends Component {
  state = {};
  render() {
    const { id, avatar, first_name, last_name, email } = this.props;
    return (
      <div key={id} className="card">
        <div className="card__img">
          <img src={avatar} alt="img" />
        </div>
        <div className="card__info">
          <h2>{first_name} {last_name}</h2>
          <h4>{email}</h4>
        </div>
      </div>
    );
  }
}

export default Card;
