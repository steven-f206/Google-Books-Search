import React, {useState, createContext} from 'react';

export const AppContext = createContext();

export const AppProvider = props => {

//Initially data called from API
const [books, setBooks] = useState({}); 
//State check to see if it's done being called
const [fetching, setFetching] = useState(false); 
// Set search data
const [searching, setSearching] = useState(""); 


  return(
    <AppContext.Provider value={{ 
      bookData: [books, setBooks], 
      fetchData: [fetching, setFetching], 
      search: [searching, setSearching], 
      }}>
      {props.children}
    </AppContext.Provider>
  );
}
