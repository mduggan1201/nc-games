import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Nav from './components/Nav';
import ReviewDescription from './components/ReviewDescription';
import ReviewList from './components/ReviewList';

function App() {
  return (
    <div className ="BackGround">
    <BrowserRouter>
      <Header />
      <Nav />
      <Routes>
        <Route path ="/" element ={<Home />} />
        <Route path ="/reviews" element ={<ReviewList />} />
        <Route path ="/reviews/:review_id" element={<ReviewDescription />} />      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
