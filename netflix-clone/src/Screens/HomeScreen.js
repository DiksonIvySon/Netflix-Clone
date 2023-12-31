import React from "react";
import "./HomeScreen.css"
import Nav from "../Nav.js"
import Banner from "../Banner.js"
import requests from "../Request";
import Row from "../Row";

function HomeScreen() {
    return <div className="HomeScreen">
        <Nav />

        <Banner />

        <Row title="NETFLIX ORIGINALS" isLargeRow="true" fetchUrl={requests.fetchNetflixOriginals}/>
        <Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated}/>
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies}/>
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries}/>

    </div>
}

export default HomeScreen;