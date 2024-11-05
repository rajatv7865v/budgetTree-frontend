import React from "react";

interface ConnectorCardInterface {
  name: string;
  content: string;
  icon: string;
  link: string;
  path: string;
}

const ConnectorCard: React.FC<ConnectorCardInterface> = ({
  content,
  icon,
  link,
  name,
  path,
}) => {
  return (
    <div className='shadow-lg shadow-black rounded-lg px-6 py-3 space-y-4'>
      <div className='flex items-center justify-between'>
        <img src={icon} alt='name' />
        <div>
          <button className='border-[1px] border-blue-500 rounded-lg py-2 px-3 '>
            Connect
          </button>
          <span></span>
        </div>
      </div>
      <div>
        <h5 className='text-2xl font-semibold'>{name}</h5>
        <p>{content}</p>
      </div>
      <div className='flex items-center justify-between'>
        <span>Native</span>
        <a href='' className='text-blue-500'>
          Learn more
        </a>
      </div>
    </div>
  );
};

export default ConnectorCard;
