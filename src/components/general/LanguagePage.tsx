interface LanguagePageProps {
  isDesktop: boolean;
}

const LanguagePage = ({ isDesktop }: LanguagePageProps) => {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-lg mx-auto ${
      isDesktop ? 'max-w-2xl' : 'w-[380px]'
    }`}>
      <h2 className="text-2xl font-bold mb-6">Language Settings</h2>
      <div className="space-y-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <p className="text-gray-600">Current language: English</p>
          <p className="text-sm text-gray-500 mt-2">
            This will be the default language for your form
          </p>
        </div>
        
        <div className="border-t pt-4">
          <h3 className="font-medium mb-3">Available Languages</h3>
          <div className="space-y-2">
            {['English', 'Spanish', 'French', 'German'].map(lang => (
              <div key={lang} className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>{lang}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguagePage; 