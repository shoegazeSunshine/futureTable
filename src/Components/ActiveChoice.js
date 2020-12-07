import React, { useContext } from "react";
import { AppContext } from "../context/Context";

const ActiveChoice = () => {
  const { content, chosenItem, setChosenItem } = useContext(AppContext);
  return content && chosenItem ? (
    <div className="d-flex justify-content-center mb-2">
      <div className="card w-50" align="center">
        <p>
          Выбран пользователь{" "}
          <b>{`${chosenItem.firstName} ${chosenItem.lastName}`}</b>
        </p>
        {chosenItem.description && chosenItem.address ? (
          <>
            <p>Описание:</p>
            <textarea
              cols="60"
              rows="7"
              value={chosenItem.description}
              readOnly
            />
            <p>
              Адрес проживания: <b>{`${chosenItem.address.streetAddress}`}</b>
            </p>
            <p>
              Город: <b>{`${chosenItem.address.city}`}</b>
            </p>
            <p>
              Провинция/штат: <b>{`${chosenItem.address.state}`}</b>
            </p>
            <p>
              Индекс: <b>{`${chosenItem.address.zip}`}</b>
            </p>
          </>
        ) : (
          <b>Описание отсутствует</b>
        )}
        <button
          className="btn btn btn-primary"
          onClick={() => setChosenItem("")}
        >
          Закрыть
        </button>
      </div>
    </div>
  ) : null;
};

export default ActiveChoice;
