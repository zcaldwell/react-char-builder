import React from 'react';

export default function Picker({ head, setHead, body, setBody, legs, setLegs, setCatchPhrase }) {
  return (
    <div className="picker">
      <div className="form-control">
        <label>Head</label>
        <select value={head} onChange={(e) => setHead(e.target.value)}>
          <option value="bird-head">Bird Head</option>
          <option value="dog-head">Dog Head</option>
          <option value="duck-head">Duck Head</option>
          <option value="horse-head">Horse Head</option>
        </select>
        <label>Body</label>
        <select value={body} onChange={(e) => setBody(e.target.value)}>
          <option value="blue-middle">Blue Body</option>
          <option value="dress-middle">Dress Body</option>
          <option value="pink-middle">Pink Body</option>
          <option value="red-middle">Red Body</option>
        </select>
        <label>Legs</label>
        <select value={legs} onChange={(e) => setLegs(e.target.value)}>
          <option value="dog-pants">Dog Pants</option>
          <option value="blue-pants">Blue Pants</option>
          <option value="white-pants">White Pants</option>
          <option value="leg-pants">Leg Pants</option>
        </select>
      </div>
      <div className="form-control">
        <label>Enter A Catch Phrase!</label>
        <input type="text" onChange={(e) => setCatchPhrase(e.target.value)} />
      </div>
    </div>
  );
}
