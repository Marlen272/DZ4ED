import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setName, setSurname, setEmail, setErrors, selectFormData, selectErrors } from '../store/RegSlice';

const RegPage = () => {
    const dispatch = useDispatch();
    const formData = useSelector(selectFormData);
    const errors = useSelector(selectErrors);

    const validate = () => {
        const errors = {};

        if (!formData.name.trim()) {
            errors.name = 'Введите имя!';
        }else if (/\d/.test(formData.name)) {
            errors.name = 'Имя не должно содержать цифры!';
        }

        if (!formData.surname.trim()) {
            errors.surname = 'Введите фамилию!';
        }else if (/\d/.test(formData.surname)) {
            errors.surname = 'Фамилия не должна содержать цифры!';
        }

        if (!formData.email.trim()) {
            errors.email = 'Введите электронную почту!';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = 'Вы ввели недействительный адрес электронной почты!';
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            dispatch(setErrors(validationErrors));
        } else {
            console.log('Данные успешно заполнена:', formData);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <h1>name:</h1>
                    <input type="text" value={formData.name} onChange={(e) => dispatch(setName(e.target.value))}/>
                    {errors.name && <p>{errors.name}</p>}
                </div>
                <div>
                    <h1>surname:</h1>
                    <input type="text" value={formData.surname} onChange={(e) => dispatch(setSurname(e.target.value))}/>
                    {errors.surname && <p>{errors.surname}</p>}
                </div>
                <div>
                    <h1>email:</h1>
                    <input type="email" value={formData.email} onChange={(e) => dispatch(setEmail(e.target.value))}/>
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default RegPage;