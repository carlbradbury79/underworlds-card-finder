import React, { useState } from 'react';

const Search = ({ searchCards }) => {
  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      console.log('Enter somethng');
      //   setAlert('Please enter something', 'light');
    } else {
      searchCards(text);
      //   setText('');
      // console.log(text);
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <div>
      Search
      <form action='form' onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Seach cards...'
          id=''
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
    </div>
  );
};

export default Search;
