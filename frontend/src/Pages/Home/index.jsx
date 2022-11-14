import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./style.css";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import SearchInput from "../SearchPage";

function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [items, setItems] = useState([]);
  const [pageCount, setPageCount] = useState(null);
 const [searchKey, setSearchKey] = useState('')
 const [noData, setNoData] = useState(false)

  let limit = 3;

  const getBook = async (currentPage) => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/getAllBooks?key=${searchKey}&page=${currentPage}&limit=${limit}`
    );
    const data = await res.json();
    const totalCount = data.totalCount;
    setPageCount(Math.ceil(totalCount / limit));
    if(data.results.length > 0){
      setNoData(false)
      setItems(data.results);
    }else{
      setNoData(true)
      setItems(null);
    }
  };

  useEffect(() => {
    getBook(currentPage);
  }, [currentPage,searchKey]);


  const handlePageClick = async (data) => {
    setCurrentPage(data.selected + 1);
  };
  return (
    <div className="container">
      <div className="title">
        <h1 className="title">Book List</h1>
      </div>
      <div className="searchBox">
        <SearchInput setCurrentPage={setCurrentPage} setSearchKey={setSearchKey}/>
      </div>
      <div className="row m-2">
        { !noData ? items.map((item, i) => {
          return (
            <div key={i} className="col-sm-6 col-md-4 v my-2">
              <div className="card shadow-sm w-100">
                <div className="card-body">
                  <h5 className="card-title text-center h3">{item.bookName}</h5>
                  <h4 className="card-text text-center">{item.authorName}</h4>
                  <h4 className="card-text text-center">{item.price}</h4>
                  <h4 className="card-text text-center">
                    {item.status ? "Book Available" : "Book Not Available"}
                  </h4>
                  <Link
                    to={"editBook/" + item._id}
                    className="btn btn-primary "
                  >
                    Edit Book Details
                  </Link>
                </div>
              </div>
            </div>
          );
        }):<h2 className="noData">No Items Found</h2>}
      </div>
      <div className="btnWrap">
        <Link to="addNewBook" className="btn btn-primary ">
          Add New Book
        </Link>
      </div>
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default Home;
