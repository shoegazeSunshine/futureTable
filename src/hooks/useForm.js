import React, {  useState } from 'react'


const useForm = () => {
    const [form, setForm] = useState({});

    const changeHandler = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    };
    let formIsValid = !!form.id?.length && !!form.firstName?.length && !!form.lastName?.length && !!form.email?.length && !!form.phone?.length;

    return {form, changeHandler, formIsValid, setForm}
}

export default useForm;