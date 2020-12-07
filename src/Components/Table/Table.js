import React, { useContext } from "react";
import { ArrowDropDown, ArrowDropUp } from "@material-ui/icons";
import Form from "../Form";
import { AppContext } from "../../context/Context";
import TableRow from "./TableRow";

const MyTable = ({ content }) => {
  const { sortHandler, columnToSort, sortDirection, addToTable } = useContext(
    AppContext
  );
  const head = [
    {
      header: "Id",
      id: "id",
    },
    {
      header: "FirstName",
      id: "firstName",
    },
    {
      header: "LastName",
      id: "lastName",
    },
    {
      header: "Email",
      id: "email",
    },
    {
      header: "Phone",
      id: "phone",
    },
  ];
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          {head.map((item, index) => (
            <th scope="col" id={item.id} key={item.id}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                }}
                onClick={() => sortHandler(item.id)}
              >
                <span>{item.header}</span>
                {columnToSort === item.id ? (
                  sortDirection === "asc" ? (
                    <ArrowDropUp />
                  ) : (
                    <ArrowDropDown />
                  )
                ) : null}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {addToTable && <Form />}
        {content?.map((item, index) => (
          <TableRow index={index} item={item} key={item.phone} />
        ))}
      </tbody>
    </table>
  );
};

export default MyTable;
