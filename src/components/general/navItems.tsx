import { Palette, MessageSquare, UserCircle2, ThumbsUp } from "lucide-react";
import DesignPage from "./DesignPage";
import DesignSettings from "./DesignSettings";
import WelcomePage from "./WelcomePage";
import WelcomeSettings from "./WelcomeSettings";
import ResponsePage from "./ResponsePage";
import ResponseSettings from "./ResponseSettings";
import CustomerDetailsPage from "./CustomerDetailsPage";
import CustomerSettings from "./CustomerSettings";
import ThankYouPage from "./ThankYouPage";
import ThankYouSettings from "./ThankYouSettings";
import LearnMore from "./LearnMore";
import SocialHandle from "./SocialHandle";
import SocialHandleSettings from "./SocialHandleSettings";

export const navItems = [
  {
    id: "design",
    icon: <Palette className="text-indigo-500" />,
    label: "Design",
    component: DesignPage,
    settings: DesignSettings,
  },
  {
    id: "welcome",
    icon: <MessageSquare className="text-blue-500" />,
    label: "Welcome page",
    component: WelcomePage,
    settings: WelcomeSettings,
  },
  {
    id: "response",
    icon: <MessageSquare className="text-emerald-500" />,
    label: "Response page",
    component: ResponsePage,
    settings: ResponseSettings,
  },
  {
    id: "customer",
    icon: <UserCircle2 className="text-violet-500" />,
    label: "Customer details",
    component: CustomerDetailsPage,
    settings: CustomerSettings,
  },
  {
    id: "thanks",
    icon: <ThumbsUp className="text-rose-500" />,
    label: "Thank you page",
    component: ThankYouPage,
    settings: ThankYouSettings,
  },
  // {
  //   id: 'setting',
  //   icon: <Settings className="text-gray-500" />,
  //   label: 'Advanced settings',
  //   component: ThankYouPage,
  //   settings: AdvancedSettings
  // }
];


export const AdminNavItems = [
  {
    id: "design",
    icon: <Palette className="text-indigo-500" />,
    label: "Design",
    component: DesignPage,
    settings: DesignSettings,
  },
  {
    id: "welcome",
    icon: <MessageSquare className="text-blue-500" />,
    label: "Welcome page",
    component: WelcomePage,
    settings: WelcomeSettings,
  },
  {
    id: "response",
    icon: <MessageSquare className="text-emerald-500" />,
    label: "Response page",
    component: ResponsePage,
    settings: ResponseSettings,
  },
  {
    id: "customer",
    icon: <UserCircle2 className="text-violet-500" />,
    label: "Customer details",
    component: CustomerDetailsPage,
    settings: CustomerSettings,
  },
  {
    id: "thanks",
    icon: <ThumbsUp className="text-rose-500" />,
    label: "Thank you page",
    component: ThankYouPage,
    settings: ThankYouSettings,
  },
  {
    id: "social",
    icon: <ThumbsUp className="text-rose-500" />,
    label: "Social Handle",
    component: SocialHandle,
    settings: SocialHandleSettings,
  },
];


export const onboardNavItems = [
  {
    id: "learn",
    icon: <Palette className="text-indigo-500" />,
    label: "Learn More",
    component: LearnMore,
    
  },
  {
    id: "welcome",
    icon: <MessageSquare className="text-blue-500" />,
    label: "Welcome page",
    component: WelcomePage,
  },
  {
    id: "response",
    icon: <MessageSquare className="text-emerald-500" />,
    label: "Response page",
    component: ResponsePage,
  },
  {
    id: "customer",
    icon: <UserCircle2 className="text-violet-500" />,
    label: "Customer details",
    component: CustomerDetailsPage,
  },
  {
    id: "social",
    icon: <ThumbsUp className="text-rose-500" />,
    label: "Social Handle",
    component: SocialHandle,
    
  },
];
