import TypeForm from "../assets/icons/typeform.png";
import SurveyMonkey from "../assets/icons/surveyMonkey.png";
import HubSpot from "../assets/icons/Hubspot.png";
import Zapier from "../assets/icons/zapier.png";
import ActiveCampaign from "../assets/icons/activeCamign.avif";
import Qualtrics from "../assets/icons/qualtrics.avif";
import MailChimp from "../assets/icons/mailchimp.png";
import Zoom from "../assets/icons/zoom.avif";
import G2 from "../assets/icons/g2.avif";
import Alchemer from "../assets/icons/alchemwe.avif";
import SurveySparrow from "../assets/icons/surveySparrow.avif";
import BambooHR from "../assets/icons/bambooHR.avif";
import Namely from "../assets/icons/namely.avif";
import SAP from "../assets/icons/sap.png";
import ZohoCRM from "../assets/icons/zoho.avif";
import SalesForce from "../assets/icons/salesforce.avif";
import DarwinBox from "../assets/icons/darwinbox.jpg";
import ZohoPeople from "../assets/icons/zohoPeople.png";

import {
  connectWithHubspot,
  connectWithSurveyMonkey,
  connectWithTypeform,
  connectWithZoho,
  connectWithZoom,
} from "../services/integrations";

export const connectors: any = [
  {
    name: "Typeform",
    content:
      "Send personalized rewards to form respondents to increase the form fill rate.",
    icon: TypeForm,
    link: "",
    path: "",
    connectFunc: connectWithTypeform,
  },
  {
    name: "SurveyMonkey",
    content:
      "Send personalized rewards to form respondents to increase the form fill rate.",
    icon: SurveyMonkey,
    link: "",
    path: "",
    connectFunc: connectWithSurveyMonkey,
  },
  {
    name: "HubSpot",
    content:
      "Send personalized rewards to form respondents to increase the form fill rate.",
    icon: HubSpot,
    link: "",
    path: "",
    connectFunc: connectWithHubspot,
  },
  {
    name: "Zoho People",
    content:
      "Recognize, reward, and engage your employees effortlessly with the perfect blend of Zoho People and Xoxoday Rewards",
    icon: ZohoPeople,
    link: "",
    path: "",
    connectFunc: connectWithZoho,
  },
  {
    name: "Zoho CRM",
    content:
      "Drive better sales engagement with rewarding new prospects and customers using Xoxoday Plum",
    icon: ZohoCRM,
    link: "",
    path: "",
    connectFunc: connectWithZoho,
  },
  {
    name: "Zoom",
    content:
      "Make your Zoom event go full-house by offering gift cards to all attendees.",
    icon: Zoom,
    link: "",
    path: "",
    connectFunc: connectWithZoom,
  },
  {
    name: "Zapier",
    content:
      "Connect with over 2000 apps using Zapier to discover the potential of running rewards and incentives programs.",
    icon: Zapier,
    link: "",
    path: "",
    connectFunc: connectWithHubspot,
  },
  {
    name: "Active Campaign",
    content: "Send rewards directly from ActiveCampaign automation builder.",
    icon: ActiveCampaign,
    link: "",
    path: "",
    connectFunc: connectWithHubspot,
  },
  {
    name: "Qualtrics",
    content:
      "Boost Qualtrics survey response rates by using personalised rewards.",
    icon: Qualtrics,
    link: "",
    path: "",
    connectFunc: connectWithHubspot,
  },
  {
    name: "MailChimp",
    content:
      "Supercharge your mailing list by sending rewards to new subscribers on Mailchimp.",
    icon: MailChimp,
    link: "",
    path: "",
    connectFunc: connectWithTypeform,
  },

  {
    name: "G2",
    content:
      "Supercharge your Product review engine on G2 by promising a gift card to your reviewers",
    icon: G2,
    link: "",
    path: "",
    connectFunc: connectWithTypeform,
  },
  {
    name: "Alchemer - SurveyGizmo",
    content: "Easily automate rewarding for Alchemer Surveys with Xoxoday Plum",
    icon: Alchemer,
    link: "",
    path: "",
    connectFunc: connectWithTypeform,
  },
  {
    name: "SurveySparrow",
    content: "Maximize Response rates with automated survey incentives.",
    icon: SurveySparrow,
    link: "",
    path: "",
    connectFunc: connectWithTypeform,
  },
  {
    name: "BambooHR",
    content:
      "Delight your new joiners and increase the new hire retention rate by giving them a digital reward via Xoxoday Plum",
    icon: BambooHR,
    link: "",
    path: "",
    connectFunc: connectWithTypeform,
  },
  {
    name: "Namely",
    content:
      "Delight your new joiners by giving them a digital reward via Xoxoday Plum",
    icon: Namely,
    link: "",
    path: "",
    connectFunc: connectWithTypeform,
  },
  {
    name: "Beekeeper",
    content:
      "Give a sense of instant gratification to your employees when they celebrate an anniversary event with gift cards.",
    icon: MailChimp,
    link: "",
    path: "",
    connectFunc: connectWithTypeform,
  },
  {
    name: "SAP Successfactors",
    content: "Improve employee productivity with automated digital rewards.",
    icon: SAP,
    link: "",
    path: "",
    connectFunc: connectWithTypeform,
  },

  {
    name: "Salesforce",
    content:
      "Improve relationships with prospects and customers by sending gifts through Xoxoday Plum.",
    icon: SalesForce,
    link: "",
    path: "",
    connectFunc: connectWithTypeform,
  },
  {
    name: "Darwinbox",
    content:
      "Make your employees change - ready for now and the next chapter with Darwinbox’s Plum Integration.",
    icon: DarwinBox,
    link: "",
    path: "",
    connectFunc: connectWithTypeform,
  },
];
