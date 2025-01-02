import React, { useEffect, useState } from "react";
import { CustomButton, CustomDropDown, CustomInput } from "../../../common";
import { getFormsOfTypeForm } from "../../../../services/integrations/typeForm/get-forms";
import RewardSetting from "../RewardSetting";
import { createQuestionInform } from "../../../../services/integrations/typeForm/create-question";

interface CreateAutomationInterface {
  setPage?: any;
  setAutomationDetails: (details: any) => void;
  automationDetails: any;
}

const TriggerSettng: React.FC<CreateAutomationInterface> = ({
  setPage,
  setAutomationDetails,
  automationDetails,
}) => {
  const [options, setOptions] = useState<any>([]);
  const [isFormSelect, setIsFormSelect] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      try {
        const response: any = await getFormsOfTypeForm();
        setOptions([
          ...response.data?.items?.map((item: any) => {
            return {
              label: item?.title,
              value: item?.id,
            };
          }),
        ]);
      } catch (error) {
        throw new Error();
      }
    })();
  }, []);

  const handleValueChange = (value: any) => {
    setIsFormSelect(true);
    setAutomationDetails((automationDetails: any) => {
      return {
        ...automationDetails,
        formId: value?.value,
      };
    });
  };
  const inputHandler = (e: any) => {
    const { name, value } = e;
    setAutomationDetails((automationDetails: any) => {
      return {
        ...automationDetails,
        question: value,
      };
    });
  };

  return (
    <main className='p-2'>
      <section>
        <section className='space-y-10 px-10'>
          <h4 className='text-2xl font-semibold'>
            Set Your Automation Trigger
          </h4>
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
                value={automationDetails?.formId || ""}
              />
            </div>
            {isFormSelect && (
              <div className='pt-2 space-y-1 border-t-2 border-black'>
                <h6 className='text-xl font-semibold'>Collect Email Address</h6>
                <p>
                  The reward will be sent to the email address of the
                  respondents. Create a new question in your survey.
                </p>
                <div className='w-[29%]'>
                  <CustomInput
                    handleValueChange={inputHandler}
                    value={automationDetails?.question || ""}
                    placeholder='Type your question here. Eg. Enter your email addressto claim reward'
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      </section>
    </main>
  );
};

export default TriggerSettng;
