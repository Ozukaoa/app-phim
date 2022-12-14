import React from 'react'
import './Apps.scss';

import {
  BrowserRouter as Router,

  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header/Header.js';
import Home from './components/Home/Home.js';
import PageNotFound from "./components/PageNotFound/PageNotFound.js";
import Footer from './components/Footer/Footer'
import MovieDetails from './components/MovieDetails/MovieDetails';
import CarouselFilm from './components/CarouselFilm/CarouselFilm';
import MoviePlay from './components/MoviePlay/MoviePlay';
import Sidebar from './components/Account/Sidebar';


function App() {
  return (
    <div className="App">
      <Router>
        {/* <div className='head'> */}
        <Header />
        {/* </div> */}
       
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movie/:imdbID" component={MovieDetails} />
            <Route exact path="/movie/:imdbID/play" component={MoviePlay} />
            {/* <Route component={PageNotFound} /> */}
          </Switch>
         
        </div>
        <Switch>
          <Route exact path="/account" component={Sidebar} />
          </Switch>
        <Footer />
      </Router>

    </div>
  );
}

export default App;
