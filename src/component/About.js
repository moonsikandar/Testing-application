import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
const About = () => {
  const [tit, setTitle] = useState([]);

  const [loading, setLoading] = useState(true);
  //----------------pagination---------
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;
  //-----------searching-------------
  const [query, setQuery] = useState("");
  

  useEffect(() => {
    setTimeout(() => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => {
          if (!response.ok) {
            throw new Error("please check your url properly");
          } else {
            return response.json();
          }
        })
        .then((data) => setTitle(data))
        
        .finally(() => {
          setLoading(false);
        });
    }, 2000);
  }, []);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(tit.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(tit.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, tit]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % tit.length;
    setItemOffset(newOffset);
  };

  let filterItems = [...currentItems];
  if (query.length > 0) {
    filterItems = [...tit];
    // console.log("yeeee", filterItems);
    filterItems = filterItems.filter((e) => {
      return e.title.toLowerCase().includes(query) || e.id === query;
    });
  }
  return (
    <div className="fetching">
      <div className="fetching-insider">
        {/* <h1>{err}</h1>    */}
        <h2>Fetching data from json placeHolder</h2>
        <div>
          <label>Search by entering Keyword</label>
          <br></br>
          <input
            type="search"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        {loading && <p>please wait for a moment...</p>}
        {filterItems.map((data) => {
          return (
            <h4 key={data.id}>
              {data.id} = {data.title}
            </h4>
          );
        })}

        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default About;
