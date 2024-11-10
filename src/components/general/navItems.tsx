import { Palette, MessageSquare, UserCircle2, ThumbsUp } from 'lucide-react';
import DesignPage from './DesignPage';
import DesignSettings from './DesignSettings';
import WelcomePage from './WelcomePage';
import WelcomeSettings from './WelcomeSettings';
import ResponsePage from './ResponsePage';
import ResponseSettings from './ResponseSettings';
import CustomerDetailsPage from './CustomerDetailsPage';
import CustomerSettings from './CustomerSettings';
import ThankYouPage from './ThankYouPage';
import ThankYouSettings from './ThankYouSettings';

export const navItems = [
  {
    id: 'design',
    icon: <Palette className="text-indigo-500" />,
    label: 'Design',
    component: DesignPage,
    settings: DesignSettings
  },
  {
    id: 'welcome', 
    icon: <MessageSquare className="text-blue-500" />,
    label: 'Welcome page',
    component: WelcomePage,
    settings: WelcomeSettings
  },
  {
    id: 'response',
    icon: <MessageSquare className="text-emerald-500" />,
    label: 'Response page', 
    component: ResponsePage,
    settings: ResponseSettings
  },
  {
    id: 'customer',
    icon: <UserCircle2 className="text-violet-500" />,
    label: 'Customer details',
    component: CustomerDetailsPage,
    settings: CustomerSettings
  },
  {
    id: 'thanks',
    icon: <ThumbsUp className="text-rose-500" />,
    label: 'Thank you page',
    component: ThankYouPage,
    settings: ThankYouSettings
  }
];