import React, { useContext } from "react";
import { AppContext } from "../context/Context";

const Controls = () => {
  const {
    getData,
    query,
    setQuery,
    setAddToTable,
    addToTable,
    dataIsBig,
    bigData,
    smallData,
  } = useContext(AppContext);

  return (
    <div className="container py-2 px-2 my-2 d-flex justify-content-between">
      <button
        class="btn btn-primary btn-sm"
        onClick={() => getData(dataIsBig ? smallData : bigData)}
      >
        {dataIsBig
          ? "загрузить маленький объем данных"
          : "загрузить большой объем данных"}
      </button>
      <input
        className="mx-1 flex-fill"
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button
        class="btn btn-primary btn-sm"
        onClick={() => setAddToTable(!addToTable)}
      >
        Показать форму
      </button>
    </div>
  );
};

export default Controls;
