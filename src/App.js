import logo from './logo.svg';
import './App.css';
import Header from './screens/Header';
 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Getstarted } from './screens/Getstarted';
import Navigation from './screens/Navigation';
import Categories from './screens/Categories';
import { Topics } from './Topics';
import { Popcourses } from './screens/Popcourses';
import Teachers from './screens/Teachers';
import { Knowmore } from './screens/Knowmore';
import Footer from './screens/Footer';
import { Latestnews } from './screens/Latestnews';
import Blogslider  from './screens/Blogslider';

function App() {
  return (
    <div >
    <Header/>
     <Navigation/>
     <Getstarted/>
    <Categories/>
    <Topics/>
    <Popcourses/>
     <Teachers/>
   <Knowmore/>
    <Blogslider/>
    <Latestnews/>
    <Footer/>     
      
    </div>
  );
}

export default App;
