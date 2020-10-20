import React from 'react';
import './App.css';

import { albums, thriller } from './data';

import Card from './cards/cards';

function App() {
  // console.log(names)
  // const pluralNames = names.map(name => name + 's');
  // console.log(pluralNames)
  // console.log(names)

  const onButtonHandler = () => {
    console.log('I\'ve been clicked');
  }

  return (
    <section className="App">
      <article className="card-container">

      {/* {albums.map((album) => {
        return <li key={album}>{album}</li>
      })} */}

       {albums.map((item) => {
        const hasThreeLetters = item.length <= 3; // condition
        return !hasThreeLetters ? 
          <Card
            key={item}
            onHandler={onButtonHandler}
            cardname={item}
          /> //statement
          : '-'
       })}    
      </article>

      
      <hr />

      <article className="card-container">
       <h1>Thriller album</h1>
       {thriller.map((song) => 
        <Card
          key={song.index}
          cardname={song.title}
          {...song}
        />)}

      </article>
    </section>
  );
}

export default App;
