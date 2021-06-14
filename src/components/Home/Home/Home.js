import React from 'react';
import './Home.css'
import Header from '../Header/Header';
import ShowServices from '../ShowServices/ShowServices';
import ShowReview from '../ShowReview/ShowReview';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
        <div className="home">
<Header></Header>
<ShowServices></ShowServices>
<ShowReview></ShowReview>
<Contact></Contact>
        </div>
    );
};

export default Home;