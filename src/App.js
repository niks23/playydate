import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Containers/login/login';
import Footer from './Components/layout/footer'
import Faqs from './Containers/FAQs/faqs';
import Batches from './Containers/batches/batches';
import Reviews from './Containers/reviews/reviews';
import Ratings from './Components/review/ratings';
import Header from './Components/layout/header';
import Breadcrum from './Components/layout/breadcrum';
import Banner from './Components/layout/banner';
import Aboutclass from './Components/aboutclass/aboutclass';
import Classtab from './Components/classtab/classtab';
import Bottombar from './Components/bottombar/bottombar';

function App() {
  return (
    <div className="App">
          <Header />
          <Breadcrum />
          <Banner />
          <Aboutclass />
          <Classtab />
          {/* <Login />         */}
          <Batches />
          <Reviews />
          <Faqs />
        
          <Footer />                  
          <Bottombar />
    </div>
  );
}

export default App;
