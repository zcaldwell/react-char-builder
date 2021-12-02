import React from 'react';
import Picker from '../components/Picker/Picker';
import { useState } from 'react';

export default function Home() {
  const [head, setHead] = useState('');
  const [body, setBody] = useState('');
  const [legs, setLegs] = useState('');
  const [catchPhrase, setCatchPhrase] = useState('[]');

  return (
    <main>
      <div className="picker">
        <Picker {...{ head, setHead, body, setBody, legs, setLegs, catchPhrase, setCatchPhrase }} />
      </div>
      <div className="tracker">
        {!!headCount && <p>You've changed the head {headCount} times.</p>}
        {!!bodyCount && <p>You've Changed the body {bodyCount} times.</p>}
        {!!legCount && <p>You've changed the legs {legCount} times.</p>}
      </div>
    </main>
  );
}
