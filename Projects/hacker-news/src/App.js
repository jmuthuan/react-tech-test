import './App.css';
import CommentStory from './components/CommentStory';
import StoryList from './components/StoryList';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {styled} from 'styled-components';
import imgLogo from './img/y18.svg';

const Header = styled.header`
  background-color: #FF6600;
  text-align: start;
  display: flex;
  flex-direction: row;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: start; 
  margin: 0;
  padding: 0.5rem; 
`;

const Img = styled.img`
border: 2px solid white;
padding: 0.5rem;
margin: 0.5rem
`


function App() {
  return (
    <div className="App">
      <Header className="App-header">
        <Img src={imgLogo} alt='web page logo'/> 
        <Title>Hacker New API Tech Test</Title>        
      </Header>

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
