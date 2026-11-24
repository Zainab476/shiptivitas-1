// src/Card.js
import React from 'react';
import './Card.css';

export default class Card extends React.Component {
  render() {
    const { id, name, description, status } = this.props;
    return (
      <div
        className={`Card Card-${status || 'backlog'}`}
        data-id={id}
        data-status={status || 'backlog'}
      >
        <div className="Card-title">{name}</div>
        <div className="Card-body">{description}</div>
      </div>
    );
  }
}
