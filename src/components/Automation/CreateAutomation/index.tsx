import React, { useEffect, useState } from "react";
import { CustomDropDown, CustomInput } from "../../common";
import { getFormsOfTypeForm } from "../../../services/integrations/typeForm/get-forms";
import RewardSetting from "./RewardSetting";

interface CreateAutomationInterface {
  // Define your interface properties here
}

// let options = ["Hello"];

const CreateAutomation: React.FC<CreateAutomationInterface> = () => {
  const [options, setOptions] = useState<any>([]);
  useEffect(() => {
    (async () => {
      const response: any = await getFormsOfTypeForm();
      console.log("response", response);
      setOptions([
        ...response.items?.map((item: any) => {
          return item?.title;
        }),
      ]);
    })();
  }, []);

  const handleValueChange = () => {};
  const inputHandler = () => {};
  return (
    <main className='p-2'>
      {/* <div className='border-b-[1px] p-2 border-black'>
        <h5 className='text-lg font-semibold'>Create Typeform Automation</h5>
      </div>
      <section className='p-4'>
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
      <section className='space-y-10 px-10'>
        <h4 className='text-2xl font-semibold'>Set Your Automation Trigger</h4>
        <div className='border-[1px] rounded p-4'>
          <div className='flex items-center'>
            <span></span>
            <span>
              <h6 className='text-2xl font-semibold'>Select a Survey</h6>
              <p className='text-sm'>
                Choose a survey from existing Typeform list whose respondents
                you want to reward.
              </p>
            </span>
          </div>
          <div className='w-96  p-1 pb-2'>
            <CustomDropDown
              handleValueChange={handleValueChange}
              options={options}
              value={options[0]}
            />
          </div>
          <div className='pt-2 space-y-1 border-t-2 border-black'>
            <h6 className='text-xl font-semibold'>Collect Email Address</h6>
            <p>
              The reward will be sent to the email address of the respondents.
              Create a new question in your survey.
            </p>
            <div className='w-[29%]'>
              <CustomInput
                handleValueChange={inputHandler}
                value=''
                placeholder='Type your question here. Eg. Enter your email addressto claim reward'
              />
            </div>
          </div>
          <RewardSetting /> 
        </div>
      </section> */}
      <RewardSetting />
    </main>
  );
};

export default CreateAutomation;
