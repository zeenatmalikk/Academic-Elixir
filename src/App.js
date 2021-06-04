import logo from "./logo.svg";
import "./App.css";
import Header from "./screens/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Getstarted } from "./screens/Getstarted";
import Navigation from "./screens/Navigation";
import Categories from "./screens/Categories";
import { Topics } from "./Topics";
import { Popcourses } from "./screens/Popcourses";
import Teachers from "./screens/Teachers";
import { Knowmore } from "./screens/Knowmore";
import Footer from "./screens/Footer";
import { Latestnews } from "./screens/Latestnews";
import Blogslider from "./screens/Blogslider";
import Dynaamic from "./screens/Dynaamic";
import About from "./screens/About";
import Courses from "./screens/Courses";
import { Instructor } from "./screens/Instructor";
import { Blog } from "./screens/Blog";
import Contact from "./screens/Contact";
import Footernew from "./screens/Footernew";
import Register from "./screens/Register";

function App() {
  return (
    <Router>
      <div>
        {/* <Dynaamic /> */}
        {/* <Header /> */}
{/* 
        <Navigation />

        <Switch>
          <Route path="/blog">
            <Blog />
          </Route>
          <Route path="/contactus">
            <Contact />
          </Route>
          <Route path="/abt">
            <About />
          </Route>
          <Route path="/course">
            <Courses />
          </Route>
          <Route path="/instructor">
            <Instructor />
          </Route>
        </Switch>
        <Getstarted />
        <Categories />
        <Topics />
        <Popcourses />
        <Teachers />
        <Knowmore />
        <Latestnews />
        <Footernew /> */}
<Register/>
      </div>
    </Router>
  );
}

export default App;
