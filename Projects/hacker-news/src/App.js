import './App.css';
import CommentStory from './components/CommentStory';
import StoryList from './components/StoryList';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hacker New API Tech Test</h1>        
      </header>

      <main>
        <BrowserRouter>
        <Routes>
          <Route path='/'
            element={<StoryList />}
            />
          <Route path='/:id' element={<CommentStory />}/>            
        </Routes>
        </BrowserRouter>
      
      </main>
    </div>
  );
}

export default App;
