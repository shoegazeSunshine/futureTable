import React, { useContext } from "react";
import { AppContext } from "../context/Context";
import useForm from "../hooks/useForm";

const Form = () => {
  const { addData } = useContext(AppContext);
  const { formIsValid, form, changeHandler } = useForm();

  return (
    <tr>
      <td>
        <input
          name="id"
          placeholder="id"
          onChange={changeHandler}
          value={form.id || ""}
        />
      </td>
      <td>
        <input
          name="firstName"
          placeholder="firstName"
          onChange={changeHandler}
          value={form.firstName || ""}
        />
      </td>
      <td>
        <input
          name="lastName"
          placeholder="lastName"
          onChange={changeHandler}
          value={form.lastName || ""}
        />
      </td>
      <td>
        <input
          name="email"
          placeholder="email"
          onChange={changeHandler}
          value={form.email || ""}
          type="email"
        />
      </td>
      <td>
        <input
          name="phone"
          placeholder="phone"
          onChange={changeHandler}
          value={form.phone || ""}
        />
      </td>
      {formIsValid && (
        <button className="btn btn-primary" onClick={() => addData(form)}>
          Добавить
        </button>
      )}
    </tr>
  );
};

export default Form;
