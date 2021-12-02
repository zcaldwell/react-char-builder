import React from 'react';
import './Character.css';

export default function Character({ head, body, legs }) {
  return (
    <div>
      <div>
        <img className="character-img" alt={head} src={`${process.env.PUBLIC_URL}/${head}.png`} />
      </div>
      <div>
        <img className="character-img" alt={body} src={`${process.env.PUBLIC_URL}/${body}.png`} />
      </div>
      <div>
        <img className="character-img" alt={legs} src={`${process.env.PUBLIC_URL}/${legs}.png`} />
      </div>
    </div>
  );
}
