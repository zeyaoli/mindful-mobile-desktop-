import React from "react";
import "./App.css";
import StatusBar from "./Components/StatusBar";
import CountingBlock from "./Components/CountingBlock";
import Icon from "./Components/Icon";
import SocialLock from "./Components/SocialLock";

function App() {
  return (
    <div className='App'>
      <StatusBar />
      <main>
        <div className='field-row'>
          <Icon
            name='Hand Held'
            label='selfie'
            logoEmoji='🤳'
            textColor='#e9e9e9'
          />
          <Icon name='Live Web' label='web' logoEmoji='🕸' textColor='#e9e9e9' />
          <Icon
            name='A2Z'
            label='keyboard'
            logoEmoji='⌨️'
            textColor='#e9e9e9'
          />
          <Icon name='Map' label='map' logoEmoji='🗺' textColor='#e9e9e9' />
        </div>
        <div className='field-row'>
          <Icon name='Hand Held' label='selfie' logoEmoji='🤳' />
          <Icon name='Live Web' label='web' logoEmoji='🕸' />
          <Icon name='A2Z' label='keyboard' logoEmoji='⌨️' />
          <Icon name='Map' label='map' logoEmoji='🗺' />
        </div>
        <CountingBlock />
        <SocialLock />
        <div className='bottomBar'>
          <div className='field-row' style={{ margin: 0 }}>
            <Icon name='Mail' label='mail' logoEmoji='✉️' />
            <Icon name='Camera' label='camera' logoEmoji='📷' />
            <Icon name='Music' label='headphone' logoEmoji='🎧' />
            <Icon name='Map' label='map' logoEmoji='🗺' />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
