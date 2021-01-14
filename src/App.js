import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './components/Data';
import Pagination from './components/Pagination';
import {sortData} from './components/Filter'


function App() {
  const [users, setUsers] = useState([]);
  const [currentPage,setCurrentPage] = useState(1);
  const [postsPerPage,setPostsPerPage] = useState(20);
  const [filter, setFilter] = useState([]);
  const [sort, setSort] = useState("none");



  useEffect(() => {
    fetch('https://api.enye.tech/v1/challenge/records')
        .then((res) => res.json())
        .then((data) => {
          //console.log(data.records);
            var newData = data.records.profiles;
            setUsers(newData)
        }).catch((err) => console.log(`cannot fetch data ${err}`))
},[]);

useEffect(() => {
  setFilter(users);
}, [users]);


useEffect(() => {
  sortData(sort, users, setFilter);
}, [sort]);


const search = (input) => {
  const filter = users.filter((every) => {
    const value = input.target.value.toLowerCase().trim();
    const firstSecond =
      every.FirstName.toLowerCase().trim() +
      " " +
      every.LastName.toLowerCase().trim();
    return (
      every.FirstName.toLowerCase().includes(value) ||
      every.LastName.toLowerCase().includes(value) ||
      firstSecond.includes(value) ||
      every.Email.toLowerCase().includes(value) ||
      every.PhoneNumber.toLowerCase().includes(value)
    );
  });

  setFilter(filter);
};



const indexOfLastPost = currentPage * postsPerPage;
const indexOfFirstPost = indexOfLastPost - postsPerPage;
const currentPosts = users.slice(indexOfFirstPost, indexOfLastPost);
const paginate = (pageNumber) => setCurrentPage(pageNumber)










  return (
    <div className="App">
      <div className="input-div">
        <input type="text"  onChange={search} class="input"/>

        <div class="btn">
          <div className="bar dropdown">
                <span className="paragraphFade">Sort:</span>
                <span className="title sortTitle">
                 {sort}
                </span>
                <div className="dropdownContent">
                  <p onClick={() => setSort("name")}>Name</p>
                  <p onClick={() => setSort("email")}>Email</p>
                  <p onClick={() => setSort("gender")}>Gender</p>
                </div>
              </div>
        </div>
        {/* <select onChange={() => setSort()} className="btn">
           <option disabled selected>sort by</option>
           <option value="name">Name</option>
           <option value="email">Email</option>
           <option value="gender">Gender</option>
        </select> */}
      </div>
      <Data users={currentPosts}/>
      <Pagination postsPerPage={postsPerPage} totalPosts={users.length} paginate={paginate}/>
   
     
    </div>
  );
}

export default App;
