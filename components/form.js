import { useState } from 'react'

export default function CookieStandForm({ onCreate }) {

    const initialValues = {
        location: '',
        max: 0,
        min: 0,
        avg: 0,
    };

    const [values, setValues] = useState(initialValues);

    function submitHandler(event) {
        event.preventDefault();
        onCreate(values);
        setValues(initialValues)
    }

    function inputChangeHandler(event) {
        let { name, value, type } = event.target;

        if (type === "number") {
            value = parseFloat(value);
        }

        setValues({ ...values, [name]: value });
    }
    return (
        <form onSubmit={submitHandler} className='w-4/5 bg-green-200 mx-auto mt-6 border-2 border-green-800 rounded-lg grid grid-cols-3 grid-rows-2 pl-10 pt-8 pl-6 pb-3 gap-8'>
            <div className='col-span-2 text-center w-full  h-1/2'>
                <label className='font-bold 'htmlFor="location">Add Location</label>
                <input className='w-full h-10 border-2 border-gray-100'type="text" name="location" id="location" value={values.location} onChange={inputChangeHandler} placeholder="  Cookie Stand Location" />
            </div>

            <button type="submit" className='bg-green-600 mx-4 h-3/4 rounded-lg font-medium'>Create Stand</button>


            <FormInputSection>
                <div className='text-center mb-4'>
                <label  className='font-bold' htmlFor="min">Minimum Customers per Hour</label>
                <input className='p-2  border-2 border-gray-200 w-4/5'type="number" name="min" id="min" value={values.min} onChange={inputChangeHandler} />
                </div>
            </FormInputSection>
            <FormInputSection>
                <div className='text-center'>
                <label className='font-bold' htmlFor="max">Maximum Customers per Hour</label>
                <input  className='p-2  border-2 border-gray-200 w-4/5'type="number" name="max" id="max" value={values.max} onChange={inputChangeHandler} />
                </div>
            </FormInputSection>
            <FormInputSection>
                <div className='text-center'>
                <label className='font-bold' htmlFor="avg">Average Cookies per Sale</label>
                <input  className='p-2  border-2 border-gray-200 w-4/5' type="number" name="avg" id="avg" value={values.avg} onChange={inputChangeHandler} />
                </div>
            </FormInputSection>
        </form>
    );
}

function FormInputSection({ children }) {
    return (
        <div>
            {children}
        </div>
    );
}