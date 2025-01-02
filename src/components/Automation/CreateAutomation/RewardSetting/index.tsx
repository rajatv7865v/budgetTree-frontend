import React, { useEffect, useState } from "react";
import { FaChevronDown } from "../../../../assets/icons/index";
import { CustomDropDown } from "../../../common";
import { Link } from "react-router-dom";
import { getAllCampaign } from "../../../../services/campaign";
import { IoIosArrowUp } from "react-icons/io";

interface RewardSettingInterface {
  setAutomationDetails: (details: any) => void;
  automationDetails: any;
}
const expiryTiming: any = [
  {
    label: "12 Months",
    value: "12",
  },
  {
    label: "9 Months",
    value: "9",
  },
  {
    label: "6 Months",
    value: "6",
  },
  {
    label: "3 Months",
    value: "3",
  },
];
const RewardSetting: React.FC<RewardSettingInterface> = ({
  automationDetails,
  setAutomationDetails,
}) => {
  const [campaign, setCampaign] = useState<any>([]);
  const [isExpand, setIsExpand] = useState<{
    campaign: boolean;
    expiry: boolean;
    approvalType: boolean;
    advancedSetting: boolean;
  }>({
    campaign: false,
    expiry: false,
    approvalType: false,
    advancedSetting: false,
  });

  useEffect(() => {
    (async () => {
      const response: any = await getAllCampaign();
      setCampaign([
        ...response?.data?.map((item: any) => {
          return {
            label: item.name,
            value: item.name,
          };
        }),
      ]);
    })();
  }, []);

  const selectCampaignHandler = (value: any) => {
    console.log(value);
    setAutomationDetails((automationDetails: any) => {
      return {
        ...automationDetails,
        [value?.name]: value?.value,
      };
    });
  };
  return (
    <main className='p-10'>
      <h5 className='text-2xl font-semibold'>Set Your Reward</h5>
      <section className='py-10 grid grid-cols-1 gap-8'>
        <div className='border-[1px] shadow-md rounded p-7 '>
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
              <div
                onClick={() =>
                  setIsExpand({ ...isExpand, campaign: !isExpand?.campaign })
                }
              >
                {isExpand?.campaign ? <IoIosArrowUp /> : <FaChevronDown />}
              </div>
            </div>
          </div>
          {isExpand?.campaign && (
            <section className='w-[30%]'>
              <CustomDropDown
                options={campaign}
                name='campaignId'
                value={automationDetails?.campaignId}
                handleValueChange={selectCampaignHandler}
              />
            </section>
          )}
        </div>
        <div className='border-[1px] shadow-md rounded p-7 flex flex-col'>
          <div className='flex justify-between items-center'>
            <div>
              <h6 className='text-xl font-semibold'>Set Expiry</h6>
              <p className='text-[16px]'>
                Select and date when the campaign link will expire.
              </p>
            </div>
            <div className='flex items-center gap-2 cursor-pointer'>
              <div>
                <span>12 Months</span>
              </div>
              <div
                onClick={() =>
                  setIsExpand({ ...isExpand, expiry: !isExpand?.expiry })
                }
              >
                {isExpand?.expiry ? <IoIosArrowUp /> : <FaChevronDown />}
              </div>
            </div>
          </div>
          {isExpand?.expiry && (
            <section className='w-[30%]'>
              <CustomDropDown
                options={expiryTiming}
                value=''
                name='expiry'
                handleValueChange={selectCampaignHandler}
              />
            </section>
          )}
        </div>
        <div className='border-[1px] shadow-md rounded p-7 '>
          <div className='flex justify-between items-center'>
            <div>
              <h6 className='text-xl font-semibold'>Select Approval Type</h6>
            </div>
            <div className='flex items-center gap-2 cursor-pointer'>
              <div>
                <span>Approve Automatically</span>
              </div>
              <div
                onClick={() =>
                  setIsExpand({
                    ...isExpand,
                    approvalType: !isExpand?.approvalType,
                  })
                }
              >
                {isExpand?.approvalType ? <IoIosArrowUp /> : <FaChevronDown />}
              </div>
            </div>
          </div>
          {isExpand?.approvalType && (
            <section className='w-[30%] py-4 grid gap-2'>
              <div className='flex gap-3'>
                <input type='radio' name='' id='' />
                <label htmlFor=''>
                  <p className='text-xl'>Approve automatically</p>
                  <p className='text-sm text-gray-700'>
                    Select to automatically send out reward to recipients
                  </p>
                </label>
              </div>
              <div className='flex gap-3'>
                <input type='radio' name='' id='' />
                <label htmlFor=''>
                  <p className='text-xl'>Approve manually</p>
                  <p className='text-sm text-gray-700'>
                    Select to manually approve before sending rewards to
                    recipients
                  </p>
                </label>
              </div>
            </section>
          )}
        </div>
        <div className='border-[1px] shadow-md rounded p-7 '>
          <div className='flex justify-between items-center'>
            <div>
              <h6 className='text-xl font-semibold'>Advanced Settings</h6>
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
        </div>
      </section>
    </main>
  );
};

export default RewardSetting;
