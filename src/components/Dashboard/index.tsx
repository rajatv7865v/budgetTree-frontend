import React from "react";
import ConnectorCard from "./ConnectorCard";
import Typeform from "../../assets/icons/typeform.png";
import HubSpt from "../../assets/icons/Hubspot.png";
import MailChimp from "../../assets/icons/mailchimp.png";
import SurveyMonkey from "../../assets/icons/surveyMonkey.png";

interface DashboardInterface {
  // Define your interface properties here
}

const Dashboard: React.FC<DashboardInterface> = () => {
  const connectors: any = [
    {
      name: "Typeform",
      content:
        "Send personalized rewards to form respondents to increase the form fill rate.",
      icon: Typeform,
      link: "",
      path: "",
    },
    {
      name: "SurveyMonkey",
      content:
        "Send personalized rewards to form respondents to increase the form fill rate.",
      icon: SurveyMonkey,
      link: "",
      path: "",
    },
    {
      name: "HubSpot",
      content:
        "Send personalized rewards to form respondents to increase the form fill rate.",
      icon: HubSpt,
      link: "",
      path: "",
    },
    {
      name: "MailChimp",
      content:
        "Send personalized rewards to form respondents to increase the form fill rate.",
      icon: MailChimp,
      link: "",
      path: "",
    },
  ];
  return (
    <main className='p-10 space-y-8'>
      <section className="space-y-3">
        <label htmlFor='' className='text-xl font-semibold '>
          Manage Integrations
        </label>
        <input
          type='text'
          className='w-full border-[1px] p-2 rounded-md'
          placeholder='Search Integrations'
        />
      </section>
      <section className=' grid grid-cols-3 gap-10'>
        {connectors?.map(
          ({ name, content, icon, link, path }: any, index: number) => {
            return (
              <ConnectorCard
                name={name}
                key={index}
                content={content}
                icon={icon}
                link={link}
                path={path}
              />
            );
          }
        )}
      </section>
    </main>
  );
};

export default Dashboard;
