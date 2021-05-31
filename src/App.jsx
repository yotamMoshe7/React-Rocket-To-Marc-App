import React from 'react';
import './App.css';
import { Rocket } from './components/rocket/Rocket';
import { MessageAndHeroImage } from './components/message-and-hero-image/MessageAndHeroImage';
import { Timer } from './components/timer/Timer';

const App = () => {
  return (
    <div>
      <Rocket />
      <MessageAndHeroImage />
      <div className='timers-wrapper'>
        <Timer id={0} delay={2} />
        <Timer id={1} delay={5} />
        <Timer id={2} delay={8} />
      </div>
    </div>
  );
};

export default App;
