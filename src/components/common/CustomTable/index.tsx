import React from "react";
import { Card, Typography } from "@material-tailwind/react";

interface ITableRow {
  automation_name: string;
  automation_type: string;
  approval_type: string;
  campaign_used: string;
  reward_amount: string;
  created_by: string;
  status: string;
  action: string;
}

const TABLE_HEAD: string[] = [
  "Automation Name",
  "Automation Type",
  "Approval Type",
  "Campaign Used",
  "Reward Amount",
  "Created By",
  "Status",
  "Action",
];

const TABLE_ROWS: ITableRow[] = [
  {
    automation_name: "string",
    automation_type: "string",
    approval_type: "string",
    campaign_used: "string",
    reward_amount: "string",
    created_by: "string",
    status: "string",
    action: "string",
  },
  {
    automation_name: "string",
    automation_type: "string",
    approval_type: "string",
    campaign_used: "string",
    reward_amount: "string",
    created_by: "string",
    status: "string",
    action: "string",
  },
  {
    automation_name: "string",
    automation_type: "string",
    approval_type: "string",
    campaign_used: "string",
    reward_amount: "string",
    created_by: "string",
    status: "string",
    action: "string",
  },
];

export function CustomTable() {
  return (
    <div className='relative overflow-x-auto'>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            {TABLE_HEAD.map((item: string) => {
              return (
                <th scope='col' className='px-6 py-3'>
                  {item}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS?.map(
            ({
              action,
              approval_type,
              automation_name,
              automation_type,
              campaign_used,
              created_by,
              reward_amount,
              status,
            }: ITableRow) => {
              return (
                <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                  <th
                    scope='row'
                    className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'
                  >
                    {automation_name}
                  </th>
                  <td className='px-6 py-4'>{automation_type}</td>
                  <td className='px-6 py-4'>{approval_type}</td>
                  <td className='px-6 py-4'>{campaign_used}</td>
                  <td className='px-6 py-4'>{reward_amount}</td>
                  <td className='px-6 py-4'>{created_by}</td>
                  <td className='px-6 py-4'>{status}</td>
                  <td className='px-6 py-4'>{action}</td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
}

export default CustomTable;
