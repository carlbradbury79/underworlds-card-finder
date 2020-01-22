import React, { createContext, useState, useEffect } from 'react';

export const SearchContext = createContext();

export const SearchContextProvider = props => {
  // useEffect(() => {});

  return (
    <SearchContext.Provider
      // Pass vars and funcs
      value={{}}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
