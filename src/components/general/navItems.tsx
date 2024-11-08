import { Heart, Globe } from 'lucide-react';
import WelcomePage from './WelcomePage';
import WelcomeSettings from './WelcomeSettings';
import LanguagePage from './LanguagePage';
import LanguageSettings from './LanguageSettings';
// Import other components...

export const navItems = [
  {
    id: 'welcome',
    icon: <Heart className="text-purple-600" />,
    label: 'Welcome page',
    component: WelcomePage,
    settings: WelcomeSettings
  },
  {
    id: 'language',
    icon: <Globe className="text-green-600" />,
    label: 'Language',
    component: LanguagePage,
    settings: LanguageSettings
  },
  // Add other nav items...
]; 