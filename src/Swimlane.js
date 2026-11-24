// src/Swimlane.js
import React from 'react';
import Card from './Card';
import './Swimlane.css';

export default class Swimlane extends React.Component {
  render() {
    const { name, clients, dragulaRef, status } = this.props;
    return (
      <div className="Swimlane">
        <div className="Swimlane-title">{name}</div>
        <div className="Swimlane-dragColumn" ref={dragulaRef} data-status={status}>
          {clients.map(client => (
            <Card
              key={client.id}
              id={client.id}
              name={client.name}
              description={client.description}
              status={client.status || status}
            />
          ))}
        </div>
      </div>
    );
  }
}
