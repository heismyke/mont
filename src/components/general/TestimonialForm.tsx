import { useState } from 'react';
import { ChevronDown, Layout } from 'lucide-react';
import { navItems } from './navItems';

const TestimonialForm = () => {
  const [isDesktop, setIsDesktop] = useState(true);
  const [expandedItem, setExpandedItem] = useState<string | null>('welcome');
  const [activeView, setActiveView] = useState<string>('welcome');

  const ActiveComponent = navItems.find(item => item.id === activeView)?.component;
  const ActiveSettings = navItems.find(item => item.id === expandedItem)?.settings;

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Sidebar */}
      <div className="w-80 bg-white border-r border-gray-200 p-4">
        <div className="flex items-center mb-6">
          <button className="mr-2">←</button>
          <h1 className="text-xl font-semibold">WWW Testimonial Form</h1>
        </div>

        <div className="space-y-2">
          {navItems.map((item) => (
            <div key={item.id} className="border-b border-gray-100">
              <button
                onClick={() => {
                  setExpandedItem(expandedItem === item.id ? null : item.id);
                  setActiveView(item.id);
                }}
                className="w-full flex items-center p-3 hover:bg-gray-50 rounded-lg"
              >
                <span className="mr-3">{item.icon}</span>
                <span className="flex-1 text-left">{item.label}</span>
                <ChevronDown
                  className={`transform transition-transform ${
                    expandedItem === item.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedItem === item.id && ActiveSettings && (
                <div className="p-4 bg-gray-50">
                  <ActiveSettings />
                </div>
              )}
            </div>
          ))}
        </div>

        <button className="w-full bg-black text-white rounded-lg py-3 mt-6">
          Save changes
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="flex justify-end mb-6">
          <div className="bg-white rounded-full p-1 flex gap-1">
            <button
              onClick={() => setIsDesktop(true)}
              className={`p-2 rounded-full ${isDesktop ? 'bg-gray-100' : ''}`}
            >
              <Layout size={20} />
            </button>
            <button
              onClick={() => setIsDesktop(false)}
              className={`p-2 rounded-full ${!isDesktop ? 'bg-gray-100' : ''}`}
            >
              <div className="rotate-90">
                <Layout size={20} />
              </div>
            </button>
          </div>
        </div>

        {ActiveComponent && <ActiveComponent isDesktop={isDesktop} />}
      </div>
    </div>
  );
};

export default TestimonialForm; 