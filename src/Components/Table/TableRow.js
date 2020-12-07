import React, { useContext } from "react";
import { AppContext } from "../../context/Context";

const TableRow = ({ item, index }) => {
  const { setChosenItem } = useContext(AppContext);
  return (
    <tr onClick={() => setChosenItem(item)}>
      <th scope="row" onClick={() => setChosenItem(item)}>
        {item.id}
      </th>
      <td>{item.firstName}</td>
      <td>{item.lastName}</td>
      <td>{item.email}</td>
      <td>{item.phone}</td>
    </tr>
  );
};

export default TableRow;
