import React from "react";
import { connectWithTypeform } from "../../../services/integrations";

interface ConnectorCardInterface {
  name: string;
  content: string;
  icon: string;
  link: string;
  path: string;
  connectFunc: () => any;
}

const ConnectorCard: React.FC<ConnectorCardInterface> = ({
  content,
  icon,
  link,
  name,
  path,
  connectFunc,
}) => {
  const connectHandler = async () => {
    const response: any = await connectFunc();
    console.log("response in connectHandler", response);
    if (response.redirectUrl) {
      window.open(response.redirectUrl, "_blank");
    } else {
      console.error("No redirect URL provided by the API.");
    }
  };

  return (
    <div className='shadow-md rounded-lg px-6 py-3 space-y-4 bg-white'>
      <div className='flex items-center justify-between'>
        <img src={icon} alt='name' className='w-20' />
        <div>
          <button
            onClick={connectHandler}
            className='border-[1px] border-blue-500 rounded-lg py-2 px-3 '
          >
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
