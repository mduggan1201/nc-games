import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Home from './components/home';
import Nav from './components/nav';
import ReviewList from './components/reviewList';

function App() {
  return (
    <div className ="BackGround">
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path ="/" element ={<Home />} />
        <Route path ="/reviews" element ={<ReviewList />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
