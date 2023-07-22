import React from 'react';
import { TbError404 } from 'react-icons/tb';
import { BiSolidErrorCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';


const ErrorPage = () => {
    return (
        <div className='flex justify-center items-center'>
           <div className='card lg:w-1/2 flex flex-col justify-center items-center error'>
           <h1 className='text-error'>The page you are Looking is not found</h1>
             <BiSolidErrorCircle className='text-9xl text-orange-600'></BiSolidErrorCircle>
            <TbError404 className='text-9xl text-orange-600'></TbError404>
            <p className='text-sm text-white'>Back to <Link to="/" className='text-sky-500'>Home</Link></p>
           </div>
        </div>
    );
};

export default ErrorPage;