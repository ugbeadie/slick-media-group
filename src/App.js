import { useState,useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import Input from './components/Input';
import Navbar from './components/Navbar';
import Movieset from "./components/Movieset";

function App() {

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (searchTerm) => {
    const url = `https://www.omdbapi.com/?s=${searchTerm}&apikey=b7d61375`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data)
    if (data.Search) {
      setMovies(data.Search);
    }
  };

  useEffect(() => {
    searchMovies(searchTerm);
  }, [searchTerm]);

  // const containers = document.getElementById("main");
  // for (let i = 0; i < containers.length; i++) {
  //   let container = containers[i];
  //   container.addEventListener("wheel", function (e) {
  //     if (e.deltaY > 0) {
  //       container.scrollLeft += 400;
  //       e.preventDefault();
  //     } else {
  //       container.scrollLeft -= 400;
  //       e.preventDefault();
  //     }
  //   });
  // }

  return (
    <div>
      <Navbar />
      <Hero />
      <Input value={searchTerm} setValue={setSearchTerm} />
      <div id='main' className="row">
        <Movieset movies={movies} />
      </div>
    </div>
  );
}

export default App;
