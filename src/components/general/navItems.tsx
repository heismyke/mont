import { Palette, MessageSquare, Aperture, Sparkles, Heart, Users, BookOpen, Share2, Gem, Video } from "lucide-react";
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
    icon: <MessageSquare className="text-purple-500" />,
    label: "Welcome page",
    component: WelcomePage,
    settings: WelcomeSettings,
  },
  {
    id: "response",
    icon: <Video className="text-orange-500" />,
    label: "Response page",
    component: ResponsePage,
    settings: ResponseSettings,
  },
  {
    id: "customer",
    icon: <Users className="text-green-500" />,
    label: "Customer details",
    component: CustomerDetailsPage,
    settings: CustomerSettings,
  },
  {
    id: "thanks",
    icon: <Heart className="text-rose-500" />,
    label: "Thank you page",
    component: ThankYouPage,
    settings: ThankYouSettings,
  },
];


export const AdminNavItems = [
  {
    id: "design",
    icon: <Palette className="text-purple-500" />,
    label: "Design",
    component: DesignPage,
    settings: DesignSettings,
  },
  {
    id: "welcome",
    icon: <MessageSquare className="text-cyan-500" />,
    label: "Welcome page",
    component: WelcomePage,
    settings: WelcomeSettings,
  },
  {
    id: "response",
    icon: <Aperture className="text-amber-500" />,
    label: "Response page",
    component: ResponsePage,
    settings: ResponseSettings,
  },
  {
    id: "customer",
    icon: <Users className="text-emerald-500" />,
    label: "Customer details",
    component: CustomerDetailsPage,
    settings: CustomerSettings,
  },
  {
    id: "thanks",
    icon: <Heart className="text-pink-500" />,
    label: "Thank you page",
    component: ThankYouPage,
    settings: ThankYouSettings,
  },
  {
    id: "social",
    icon: <Gem className="text-blue-500" />,
    label: "Social Media",
    component: SocialHandle,
    settings: SocialHandleSettings,
  },
];


export const onboardNavItems = [
  {
    id: "learn",
    icon: <BookOpen className="text-teal-500" />,
    label: "Learn More",
    component: LearnMore,
    
  },
  {
    id: "welcome",
    icon: <MessageSquare className="text-orange-500" />,
    label: "Welcome page",
    component: WelcomePage,
  },
  {
    id: "response",
    icon: <Sparkles className="text-red-500" />,
    label: "Response page",
    component: ResponsePage,
  },
  {
    id: "customer",
    icon: <Users className="text-lime-500" />,
    label: "Customer details",
    component: CustomerDetailsPage,
  },
  {
    id: "social",
    icon: <Share2 className="text-fuchsia-500" />,
    label: "Social Handle",
    component: SocialHandle,
    
  },
];
