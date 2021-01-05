import React from 'react';

const SearchBar = ({keyword,setKeyword}) => {
  const SearchBarStyling = {width:"13rem",background:"#F2F1F9", border:"none", padding:"0.5rem", marginTop  : "50px"};
  return (
    <input 
     style={SearchBarStyling}
     key="key"
     value={keyword}
     placeholder={"Type Github Repository ex. React"}
     //onChange={(e) => setKeyword(e.target.value)}
    />
  );
}

export default SearchBar