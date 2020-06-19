import React, { Component } from 'react';

import Header from 'parts/Header';
import Hero from 'parts/Hero.js';

import landingPage from 'json/landingPage.json';
export default class LandingPages extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero data={landingPage.hero} />
      </>
    );
  }
}
