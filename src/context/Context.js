import React, { createContext, useState } from "react";
import { orderBy } from "lodash";
import Axios from "axios";
import useForm from "../hooks/useForm";

export const AppContext = createContext();

const Context = ({ children }) => {
  const [content, setContent] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [columnToSort, setColumnToSort] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [currentPage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState("");
  const [dataIsBig, setDataIsBig] = useState(false);
  const [addToTable, setAddToTable] = useState(false);
  const [chosenItem, setChosenItem] = useState();

  const smallData =
    "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D";
  const bigData =
    "http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D";

  const getData = async (url) => {
    setIsLoading(true);
    try {
      const { data } = await Axios.get(url);
      setContent(data);
      setDataIsBig((dataIsBig) => !dataIsBig);
      setIsLoading(false);
    } catch (e) {
      setError(true);
      setIsLoading(false);
    }
  };

  const itemsPerPage = 50;
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;

  const addData = (row) => {
    setContent((prev) => [row, ...prev]);
    setAddToTable(false);
  };

  const search = (d) => {
    return d.filter((row) => {
      return (
        row.id.toString().toLowerCase().indexOf(query) > -1 ||
        row.firstName.toString().toLowerCase().indexOf(query) > -1 ||
        row.lastName.toString().toLowerCase().indexOf(query) > -1 ||
        row.email.toString().toLowerCase().indexOf(query) > -1 ||
        row.phone.toString().toLowerCase().indexOf(query) > -1
      );
    });
  };

  const inverDirection = {
    asc: "desc",
    desc: "asc",
  };

  const sortHandler = (columnName) => {
    setChosenItem("");
    setColumnToSort(columnName);
    setSortDirection(
      columnToSort === columnName ? inverDirection[sortDirection] : "asc"
    );
    setContent(orderBy(content, columnToSort, sortDirection));
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        getData,
        smallData,
        bigData,
        dataIsBig,
        content,
        setAddToTable,
        addToTable,
        query,
        setQuery,
        search,
        lastItemIndex,
        firstItemIndex,
        sortHandler,
        columnToSort,
        sortDirection,
        addData,
        itemsPerPage,
        setCurrentPage,
        setChosenItem,
        chosenItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default Context;
