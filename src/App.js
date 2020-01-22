import React, { useState, useEffect } from 'react';
import Search from './components/Search';
import Cards from './components/Cards';
import SearchContextProvider from './context/SearchContext';
const cardData = require('./data/CardData.json');

function App() {
  const [cards, setCards] = useState([]);

  // const searchCards = term => {
  //   setCards([...cardData.filter(item => item.number.includes(term))]);
  // };

  const searchCards = term => {
    const termArray = term.split(' ');
    setCards([
      ...cardData.filter(item => {
        const itemValue = Object.values(item);
        let c = 0;
        const val = itemValue.filter(i => {
          for (let j = 0; j < termArray.length; j++) {
            let check = termArray[j];
            if (i.includes(check)) {
              c++;
              if (c === termArray.length) {
                return i;
              }
            }
          }
        });
        if (val.length > 0) {
          return item;
        }
      })
    ]);
  };

  // const searchCards = term => {
  //   const termArray = term.split(' ');
  //   console.log('termArray', termArray);
  //   setCards([
  //     ...cardData.filter(item => {
  //       const itemValue = Object.values(item);
  //       console.log('itemValue', itemValue);
  //       let c = 0;
  //       const val = itemValue.filter(i => {
  //         console.log('filter', i, term);
  //         for (let j = 0; j < termArray.length; j++) {
  //           let check = termArray[j];
  //           console.log('loop', typeof i, typeof check);
  //           if (i.includes(check)) {
  //             console.log('includes', i, check);
  //             c++;
  //             console.log('check', c, termArray.length);
  //             if (c === termArray.length) {
  //               return i;
  //             }
  //           }
  //         }
  //         // return i.includes(term);
  //       });
  //       console.log('val', val);
  //       console.log('termarray', termArray);
  //       if (val.length > 0) {
  //         console.log('yaaaaas');
  //         return item;
  //       }
  //     })
  //   ]);
  // };

  // const searchCards = term => {
  //   setCards([
  //     ...cardData.filter(item => {
  //       const itemValue = Object.values(item);
  //       console.log('itemValue', itemValue);
  //       const val = itemValue.filter(i => {
  //         console.log(i, term);
  //         return i.includes(term);
  //       });
  //       console.log('val', val);
  //       if (val.length > 0) {
  //         console.log('yaaaaas');
  //         return item;
  //       }
  //     })
  //   ]);
  // };

  useEffect(() => {
    console.log(cards);
  });

  return (
    <div className='App'>
      <SearchContextProvider>
        <h1>Underworlds Card Finder</h1>
        <Search searchCards={searchCards} />
        <Cards cards={cards} />
      </SearchContextProvider>
    </div>
  );
}

export default App;
