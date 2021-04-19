import { useState } from 'react'

export default function LoginForm({ onSubmit }) {

    const initialValues = {
        username: '',
        password: '',
    }

    const [values, setValues] = useState(initialValues);

    function submitHandler(event) {
        event.preventDefault();
        onSubmit(values);
        setValues(initialValues)
    }

    function inputChangeHandler(event) {

        let { name, value } = event.target;

        setValues({ ...values, [name]: value });
    }

    return (
        <section className='h-screen'>
        <form className='border-2 border-green-600 rounded-md w-1/2 m-auto bg-green-200 h-1/4  text-center mt-8' onSubmit={submitHandler}>

            <div className='block w-11/12 h-1/3 mx-auto mt-4'>
                <label className='h-1/2 font-bold 'htmlFor="username">User Name</label>
                <input className='h-1/2 w-full border border-gray-100'type="text" name="username" id="username" value={values.username} onChange={inputChangeHandler} placeholder="  User Name" />
            </div>

            <div className='block w-11/12 h-1/3 mx-auto'>
                <label className='font-bold' htmlFor="password">Password</label>
                <input className='w-full h-1/2  border border-gray-100' type="password" name="password" id="password" value={values.password} onChange={inputChangeHandler} placeholder="  password" />
            </div>

            <div className ='w-11/12 h-1/3 mx-auto' >
            <button className='bg-green-600 w-full h-1/2 rounded-md' type="submit">Sign In</button>
            </div>

        </form>
        </section>
    );
}