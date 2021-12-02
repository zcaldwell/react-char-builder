import React from 'react';
import Picker from '../components/Picker/Picker';
import { useState } from 'react';
import Character from '../components/Character/Character';
import './Home.css';

export default function Home() {
  const [head, setHead] = useState('');
  const [body, setBody] = useState('');
  const [legs, setLegs] = useState('');
  const [catchPhrase, setCatchPhrase] = useState('');
  const [headCount, setHeadCount] = useState(0);
  const [bodyCount, setBodyCount] = useState(0);
  const [legsCount, setLegsCount] = useState(0);
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
            legsCount,
            setLegsCount,
            catchList,
            setCatchList,
          }}
        />
        <div className="tracker">
          {!!headCount && <p>You`ve changed the head {headCount} times.</p>}
          {!!bodyCount && <p>You`ve Changed the body {bodyCount} times.</p>}
          {!!legsCount && <p>You`ve changed the legs {legsCount} times.</p>}
          <div className="catch-phrase">
            Your characters catch phrases:
            {catchList.map((elem) => (
              <p key={elem}>{elem}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="character">
        <Character {...{ head, body, legs }} />
      </div>
    </main>
  );
}
