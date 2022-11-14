import "./style.css";

export default function 
SearchInput({setCurrentPage , setSearchKey}) {
  const handleSearch =async(e)=>{
    setSearchKey(e.target.value);
    setCurrentPage(1)
  }
  return (
    <div>
      <div className="searchWrap">
        <input type="search" placeholder="Search Book by Name/Author"  onChange={handleSearch}/>
      </div>
    </div>
  );
}
