import React, { useState } from "react";
import TriggerSettng from "./TriggerSetting";
import RewardSetting from "./RewardSetting";

interface CreateAutomationInterface {
  // Define your interface properties here
}

const CreateAutomation: React.FC<CreateAutomationInterface> = () => {
  const [page, setPage] = useState<number>(1);

  return (
    <main>
      <div className='border-b-[1px] p-5'>
        <h5 className='text-lg font-semibold'>Create Typeform Automation</h5>
      </div>
      <section className='p-6'>
        <div className='flex items-center gap-10'>
          <div className='flex items-center gap-2'>
            <span className='w-8 h-8 bg-blue-700 text-white text-xl font-semibold  rounded-full flex items-center justify-center'>
              1
            </span>
            <p className='text-sm'>Triggers Settings -------</p>
          </div>
          <div className='flex items-center gap-2'>
            <span className='w-8 h-8 bg-blue-700 text-white text-xl font-semibold  rounded-full flex items-center justify-center'>
              2
            </span>
            <p className='text-sm'>Reward Settings</p>
          </div>
        </div>
      </section>
      <section>
        {page === 1 ? <TriggerSettng setPage={setPage} /> : <RewardSetting />}
        <div className='border-t-[1px] p-5 flex flex-row-reverse gap-6'>
          <button
            className='border-[1px] border-black shadow rounded text-blue-500 py-2 px-8 font-semibold'
            onClick={() => setPage(page + 1)}
          >
            Save{" "}
          </button>
          <button
            className=' text-blue-500 py-2 px-8 font-semibold'
            onClick={() => setPage(page - 1)}
          >
            Back{" "}
          </button>
        </div>
      </section>
    </main>
  );
};

export default CreateAutomation;
