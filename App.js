import React from 'react';
import PhotoGenerator from './PhotoGenerator';

function App() {
  const apiKey = 'YOUR_API_KEY_HERE';

  return (
    <div className="App">
         <h1>OpenAI Photo Generator</h1>
      <header className="App-header">
        <PhotoGenerator apiKey={apiKey} />
      </header>
    </div>
  );
}

export default App;


