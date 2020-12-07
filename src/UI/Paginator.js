import React, { useContext } from "react";
import ReactPaginate from "react-paginate";
import { AppContext } from "../context/Context";

const Paginator = () => {
  const { content, itemsPerPage, setCurrentPage, search } = useContext(
    AppContext
  );

  return (
    <div className="d-flex justify-content-center">
      <ReactPaginate
        pageCount={Math.ceil(search(content).length / itemsPerPage)}
        onPageChange={(e) => setCurrentPage(e.selected + 1)}
        pageRangeDisplayed={4}
        marginPagesDisplayed={1}
        containerClassName="pagination"
        activeClassName="active"
        pageLinkClassName="page-link"
        breakLinkClassName="page-link"
        nextLinkClassName="page-link"
        previousLinkClassName="page-link"
        pageClassName="page-item"
        breakClassName="page-item"
        nextClassName="page-item"
        previousClassName="page-item"
        previousLabel={<>&laquo;</>}
        nextLabel={<>&raquo;</>}
      />
    </div>
  );
};

export default Paginator;
