import React from 'react';
import Frame35 from '../assets/Frame35.svg';

const Page3 = () => {
  return (
    <div className="h-screen flex justify-center items-center px-[40px]">
      {/* Wrapper for image and text */}
      <div className="flex flex-col lg:flex-row items-center gap-10">
        {/* Image */}
        <div>
          <img src={Frame35} className="w-[1200px] h-auto" alt="" />
        </div>

        {/* Text */}
        <div className="text-center lg:text-left">
          <h1 className="font-bold text-3xl mb-4">
            The unseen of spending three years at Pixelgrade
          </h1>
          <p className="text-lg text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
          </p>

          <button className="bg-[#51bb37] text-white px-6 py-2 rounded-lg mt-4 h-[30px] w-auto">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Page3;
