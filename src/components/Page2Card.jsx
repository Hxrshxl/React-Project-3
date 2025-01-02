import React from 'react';

const Page2Card = ({ title, description, iconClass }) => {
  return (
    <div >
      <div className='flex justify-center items-center mt-10 gap-[150px]'>
        <div className='border-2 border-[#4D4D4D] w-[250px] h-[250px] flex flex-col justify-center items-center text-center'>
          {/* icons */}
          <div className='h-16 w-16 flex justify-center items-center bg-[#61d344] rounded-full'>
            <i className={`${iconClass} text-3xl`}></i>
          </div>
          
          <div className='font-bold text-[20px] mb-2'>{title}</div>
          <div className='mt-2'>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2Card;
