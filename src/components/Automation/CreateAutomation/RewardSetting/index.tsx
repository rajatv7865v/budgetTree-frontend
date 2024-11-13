import React, { useState } from "react";
import { FaChevronDown } from "../../../../assets/icons/index";
import { CustomDropDown } from "../../../common";
import { Link } from "react-router-dom";

interface RewardSettingInterface {
  // Define your interface properties here
}

const RewardSetting: React.FC<RewardSettingInterface> = () => {
  const [options, setOptions] = useState<any>([]);
  const handleValueChange = () => {};
  return (
    <main>
      <h5 className='text-2xl font-semibold'>Set Your Reward</h5>
      <section>
        <div className='border-2 rounded p-4 '>
          <div className='flex justify-between items-center'>
            <div>
              <h6 className='text-xl font-semibold'>Select a Compaign</h6>
              <p className='text-[16px]'>Choose a campaignof your choice.</p>
            </div>
            <div className='flex items-center gap-2 cursor-pointer'>
              <div>
                <span>Birthday</span>
                <span>India | INR 200 | 2 Brands</span>
              </div>
              <span>
                <FaChevronDown />
              </span>
            </div>
          </div>
          <div>
            <div>
              <CustomDropDown
                handleValueChange={handleValueChange}
                options={options}
                value={options[0]}
              />
              <Link to='' className='text-blue-600'>
                View selected campaign details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RewardSetting;
