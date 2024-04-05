import { useEffect, useState } from "react";
import Button from "../components/Button";
import TextInput from "../components/inputs/TextInput";
import { getBooks } from "../api_service/books/books";
import SelectInput from "../components/inputs/SelectInput";
import ReactPaginate from "react-paginate";

const Dashboard = () => {
  const [books, setBooks] = useState<any[]>([])
  const [filter, setFilter] = useState("title")
  const [searchKeyword, setSearchKeyword] = useState("")
  const [sortBy, setSortBy] = useState("title")
  const [pageCount, setPageCount] = useState(0)


  const limit = 10;

  Math.ceil(books.length / limit);

  const fetchBooks = async () => {
    try {
      await getBooks(filter, searchKeyword, sortBy, 0, limit).then((response) => {
        if (response.data.status.success)
        {
          setBooks(response.data.data.books.rows)
          setPageCount(Math.ceil(response.data.data.books.count / limit))
        }
      })
    } catch (error) {
      
    }
  }
  const changePage = async (selectedItem: { selected: number }) => {
    const offset = selectedItem.selected * limit
    try {
      await getBooks(filter, searchKeyword, sortBy, offset, limit).then((response) => {
        if (response.data.status.success)
        {
          setBooks(response.data.data.books.rows)
          setPageCount(Math.ceil(response.data.data.books.count / limit))
        }
      })
    } catch (error) {
      
    }
  };
   useEffect(() => {
        fetchBooks()
  }, [sortBy])
  return (
    <div className="flex flex-col gap-10 items-center justify-center h-max w-full mt-10">
      <h1>Books</h1>
      <div className="flex gap-5">
        <SelectInput filter={filter} setFilter={setFilter} label="Search By" name="filters" options={["title", "author", "published_date", "genre"]}/>
        <SelectInput filter={sortBy} setFilter={setSortBy} label="Sort By" name="sort" options={["title", "author", "published_date"]}/>
      <div className="flex w-max items-center justify-center">
        <TextInput type="text" placeholder="Search books" setKeyword={setSearchKeyword}/>
        <Button onClick={fetchBooks} type="submit" text='Search' className='btn-primary bg-gradient-to-r from-[#314755] to-[#26a0da]'/>
      </div>
      </div>
        <table className="books-table">
              <tr className="table-header">
                <th>Title</th>
                <th>Author</th>
                <th>Published Date</th>
                <th>ISBN</th>
                <th>Genre</th>
              </tr>
              {books
                .map((book) => (
                  <tr key={book.id} className="table-row">
                    <td>{book.title}</td>
                    <td>{book.author}</td>
                    <td>
                      {book.published_date}
                    </td>
                    <td>{book.isbn}</td>
                    <td>
                      {book.genre}
                    </td>
                  </tr>
                ))}
        </table>
        <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
    </div>
  );
};

export default Dashboard;
