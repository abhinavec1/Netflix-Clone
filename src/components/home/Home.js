import React from "react";

import Nav from "../nav/Nav";
import Header from "../header/Header";
import Row from "../row/Row";

const Home = () => {
  return (
    <div className="app">
      <Nav />
      <Header />
      <Row title='Netflix Originals' movieType='netflix-originals' />
      <Row title='Trending Now' movieType='trending-now' />
      <Row title='Top Rated' movieType='top-rated' />
      <Row title='Action Movies' movieType='action-movies' />
      <Row title='Horror Movies' movieType='horror-movies' />
      <Row title='Romance Movies' movieType='romance-movies' />
      <Row title='Documentaries Movies' movieType='documentaries-movies' />
    </div>
  );
}

export default Home;