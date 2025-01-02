import React, { useState } from "react";
import ConnectorCard from "./ConnectorCard";
import SurveyMonkey from "../../assets/icons/surveyMonkey.png";
import {
  connectWithHubspot,
  connectWithTypeform,
} from "../../services/integrations";
import { connectWithSurveyMonkey } from "../../services/integrations/surveyMonkey";
import { connectors } from "../../data/connectors";
import useFetch from "../../customHooks/useFetch";

interface DashboardInterface {
  // Define your interface properties here
}

const Dashboard: React.FC<DashboardInterface> = () => {
  const [search, setSearch] = useState<string>("");


  return (
    <main className='p-10 space-y-8 bg-[#e1e8eb]'>
      <section className='space-y-3'>
        <label htmlFor='' className='text-xl font-semibold '>
          Manage Integrations
        </label>
        <input
          type='text'
          onChange={(e) => setSearch(e.target.value)}
          className='w-full border-[1px] p-2 rounded-md'
          placeholder='Search Integrations'
        />
      </section>
      <section className='grid grid-cols-3 gap-10'>
        {connectors
          ?.filter(({ name }: any) =>
            name?.toLowerCase().includes(search.toLowerCase())
          ) // Case-insensitive search
          .map(({ name, content, icon, link, path, connectFunc }: any) => {
            return (
              <ConnectorCard
                name={name}
                key={name} // Use a unique key (like `name` or an `id` if available)
                content={content}
                icon={icon}
                link={link}
                path={path}
                connectFunc={connectFunc}
              />
            );
          })}
      </section>
    </main>
  );
};

export default Dashboard;
