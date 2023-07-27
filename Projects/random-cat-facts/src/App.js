import './App.css';
import Cat from './components/Cat';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Random Cat Facts</h1>
      </header>
      <main>
          <Cat />
      </main>
    </div>
  );
}

export default App;
