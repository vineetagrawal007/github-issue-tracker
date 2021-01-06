import React, { useState } from "react";
import Data from "../repodata.json";
import "../App.css";

//example repo full name: mojombo/grit

export default function SearchBar() {
  //state
  const [query, setQuery] = useState([]);

  const handleSearch = (e) => {
    Data.Data.forEach((data) => {
      if (data.full_name === e.target.value) {
        console.log("found it, Repo Name: ", data.full_name);
        setQuery(data.full_name);
        issueList(data.full_name);
        return data.full_name;
      }
    });
  };

  const issueList = (value) => {
    fetch(`https://api.github.com/repos/${value}/issues`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  const SearchBarStyling = {
    width: "13rem",
    background: "#F2F1F9",
    border: "none",
    padding: "0.5rem",
    marginTop: "50px",
  };

  return (
    <>
    <form>
      <input
        style={SearchBarStyling}
        key="key"
        placeholder={"Type Github Repository ex. React"}
        onChange={handleSearch}
      />
      
    </form>

    <div className='card-list'>
      {query}
      </div>
    </>
  );
}

// const handleSearch = (e) => {
//   // const completeUri = `https://api.github.com/repos/${e.target.value}`;
//   // fetch(completeUri)
//   // .then(res => res.json())
//   // .then(data => console.log(data))
//   // .finally(issueList(completeUri))

//   Data.Data.forEach((data) => {
//     if (data.full_name === e.target.value) {
//       console.log("found it, Repo Name: ", data.full_name);
//       issueList(data.full_name)
//       return data.full_name;
//     }
//   });
// };

// const issueList = (value) => {
//   fetch(`https://api.github.com/repos/${value}/issues`)
//     .then((res) => res.json())
//     .then((data) => console.log(data));
// };

// const SearchBar = ({ keyword, setKeyword }) => {
//   const SearchBarStyling = {
//     width: "13rem",
//     background: "#F2F1F9",
//     border: "none",
//     padding: "0.5rem",
//     marginTop: "50px",
//   };
//   return (
//     <input
//       style={SearchBarStyling}
//       key="key"
//       value={keyword}
//       placeholder={"Type Github Repository ex. React"}
//       onChange={handleSearch}
//     />
//   );
// };

// export default SearchBar;
