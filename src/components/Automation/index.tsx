import React from "react";
import { FaArrowLeftLong } from "../../assets/icons/index";

interface indexInterface {
  // Define your interface properties here
}

const index: React.FC<indexInterface> = () => {
  return (
    <main className='p-20 space-y-10'>
      <section>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-3'>
            <span>
              <FaArrowLeftLong size={25} color='gray' />
            </span>
            <div>
              <h5 className='text-2xl font-semibold'>
                Typeform Reward Automations
              </h5>
              <p>
                Navigate through all your Typeform automations and take actions.
                Learn more
              </p>
            </div>
          </div>
          <button className='bg-blue-600 text-white py-2 px-4 rounded-md'>
            Create New Automation
          </button>
        </div>
      </section>
      <section>
        <div>
          <input
            type='text'
            placeholder='Search Automation'
            className='border-[1px] rounded p-2 w-96'
          />
        </div>
        <div></div>
      </section>
    </main>
  );
};

export default index;
