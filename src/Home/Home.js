import React from 'react';
import Picker from '../components/Picker/Picker';
import { useState } from 'react';

export default function Home() {
  const [head, setHead] = useState('');
  const [body, setBody] = useState('');
  const [legs, setLegs] = useState('');
  const [catchPhrase, setCatchPhrase] = useState('');
  const [headCount, setHeadCount] = useState('');
  const [bodyCount, setBodyCount] = useState('');
  const [legCount, setLegCount] = useState('');
  const [catchList, setCatchList] = useState([]);

  return (
    <main>
      <div className="picker">
        <Picker
          {...{
            head,
            setHead,
            body,
            setBody,
            legs,
            setLegs,
            catchPhrase,
            setCatchPhrase,
            headCount,
            setHeadCount,
            bodyCount,
            setBodyCount,
            legCount,
            setLegCount,
            catchList,
            setCatchList,
          }}
        />
      </div>
      <div className="tracker">
        {!!headCount && <p>You`ve changed the head {headCount} times.</p>}
        {!!bodyCount && <p>You`ve Changed the body {bodyCount} times.</p>}
        {!!legCount && <p>You`ve changed the legs {legCount} times.</p>}
        <div className="catch-phrase">
          Your characters catch phrases:
          {catchList.map((elem) => (
            <p key={elem}>{elem}</p>
          ))}
        </div>
      </div>
    </main>
  );
}
