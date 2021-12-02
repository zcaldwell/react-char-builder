import React from 'react';

export default function Picker({
  head,
  setHead,
  setHeadCount,
  body,
  setBody,
  setBodyCount,
  legs,
  setLegs,
  setLegsCount,
  catchPhrase,
  setCatchPhrase,
  setCatchList,
}) {
  const handleClick = () => {
    setCatchList((prevState) => [...prevState, catchPhrase]);
    setCatchPhrase('');
  };
  const handleHead = (e) => {
    setHead(e.target.value);
    setHeadCount((prevState) => prevState + 1);
  };
  const handleBody = (e) => {
    setBody(e.target.value);
    setBodyCount((prevState) => prevState + 1);
  };
  const handleLegs = (e) => {
    setLegs(e.target.value);
    setLegsCount((prevState) => prevState + 1);
  };

  return (
    <div className="picker">
      <div className="form-control">
        <label>Head</label>
        <select value={head} onChange={handleHead}>
          <option value="bird-head">Bird Head</option>
          <option value="dog-head">Dog Head</option>
          <option value="duck-head">Duck Head</option>
          <option value="horse-head">Horse Head</option>
        </select>
        <label>Body</label>
        <select value={body} onChange={handleBody}>
          <option value="blue-middle">Blue Body</option>
          <option value="dress-middle">Dress Body</option>
          <option value="pink-middle">Pink Body</option>
          <option value="red-middle">Red Body</option>
        </select>
        <label>Legs</label>
        <select value={legs} onChange={handleLegs}>
          <option value="dog-pants">Dog Pants</option>
          <option value="blue-pants">Blue Pants</option>
          <option value="white-pants">White Pants</option>
          <option value="leg-pants">Leg Pants</option>
        </select>
      </div>
      <div className="form-control">
        <label>Enter A Catch Phrase!</label>
        <input type="text" value={catchPhrase} onChange={(e) => setCatchPhrase(e.target.value)} />
        <button onClick={handleClick}>Add</button>
      </div>
    </div>
  );
}
