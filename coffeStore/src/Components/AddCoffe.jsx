import React from 'react';

const AddCoffe = () => {
    return (
        <section className='w-11/12 mx-auto bg-formbg py-3 px-6'>
            <p className='text-3xl text-center font-bold'>Add coffe</p>
            <form>
                <label htmlFor="">
                    <p>Coffe Name:</p>
                    <input type="text" placeholder='enter coffe name' className='border-2 px-10 rounded-md w-full h-7' />
                </label>
                <label htmlFor="">
                    <p>Coffe quantity:</p>
                    <input type="text" placeholder='enter coffe quantity' className='border-2 px-10 rounded-md w-full h-7' />
                </label>
            </form>

        </section>
    );
};

export default AddCoffe;