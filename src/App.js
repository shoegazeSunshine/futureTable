import React, { useContext, useEffect } from "react";
import ActiveChoice from "./Components/ActiveChoice";

import "./App.css";
import { AppContext } from "./context/Context";
import Controls from "./Components/Controls";
import Loader from "./UI/Loader";
import Paginator from "./UI/Paginator";
import MyTable from "./Components/Table/Table";

function App() {
  const {
    isLoading,
    getData,
    bigData,
    content,
    lastItemIndex,
    firstItemIndex,
    search,
    error,
  } = useContext(AppContext);

  useEffect(() => {
    getData(bigData);
  }, [bigData]);

  return (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Controls />
          <MyTable
            content={search(content).slice(firstItemIndex, lastItemIndex)}
          />
          <Paginator />
          <ActiveChoice />
        </>
      )}
    </div>
  );
}

export default App;
