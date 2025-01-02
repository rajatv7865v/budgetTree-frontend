import React, { useEffect } from "react";
import { FaArrowLeftLong } from "../../assets/icons/index";
import { CustomPagination, CustomTable } from "../common";
import { Link } from "react-router-dom";
import { getAllAutomation } from "../../services/integrations/typeForm/automation";
import useFetch from "../../customHooks/useFetch";

interface indexInterface {
  // Define your interface properties here
}

const CreateAutomation: React.FC<indexInterface> = () => {
  const {
    data: automations,
    error,
    loading,
    refetch,
  } = useFetch(getAllAutomation, true);

  console.log(automations, error, loading);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleClick = () => {};

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
          <Link
            to={"/integrations/automation/type_form"}
            className='bg-blue-600 text-white py-2 px-4 rounded-md'
          >
            Create New Automation
          </Link>
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
      <section className='border-[1px] rounded-sm'>
        <CustomTable />
        <CustomPagination
          total={50}
          showPerPage={10}
          currentPage={1}
          setCurrentPage={handleClick}
        />
      </section>
    </main>
  );
};

export default CreateAutomation;
