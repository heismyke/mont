import { BarChart3Icon, TrendingDownIcon, StarIcon, MessageSquareIcon } from 'lucide-react';

const TestimonialWidgets = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <BarChart3Icon className="w-5 h-5 text-indigo-600" />
          <h3 className="font-medium text-gray-900">Analytics Overview</h3>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {/* Total Visitors */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 text-blue-600 mb-2">
            <BarChart3Icon className="w-4 h-4" />
            <span className="text-sm font-medium">Total Visitors</span>
          </div>
          <div className="text-2xl font-bold text-blue-700">2,847</div>
          <div className="text-sm text-blue-600 mt-1">+12.5% from last month</div>
        </div>

        {/* Drop Rate */}
        <div className="bg-red-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 text-red-600 mb-2">
            <TrendingDownIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Drop Rate</span>
          </div>
          <div className="text-2xl font-bold text-red-700">24.3%</div>
          <div className="text-sm text-red-600 mt-1">-2.1% from last month</div>
        </div>

        {/* Total Testimonials */}
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 text-green-600 mb-2">
            <MessageSquareIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Total Testimonials</span>
          </div>
          <div className="text-2xl font-bold text-green-700">154</div>
          <div className="text-sm text-green-600 mt-1">+8.3% from last month</div>
        </div>

        {/* Average Rating */}
        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 text-yellow-600 mb-2">
            <StarIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Average Rating</span>
          </div>
          <div className="text-2xl font-bold text-yellow-700">4.9</div>
          <div className="flex text-yellow-500 mt-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="text-sm font-medium text-gray-700 mb-4">Visitors Over Time</h4>
          <div className="h-48 flex items-end gap-2">
            {[45, 60, 30, 80, 65, 90, 70].map((height, i) => (
              <div key={i} className="flex-1">
                <div 
                  style={{height: `${height}%`}}
                  className="bg-indigo-500 rounded-t-sm transition-all hover:bg-indigo-600"
                ></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>Mon</span>
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="text-sm font-medium text-gray-700 mb-4">Rating Distribution</h4>
          <div className="space-y-2">
            {[5,4,3,2,1].map((rating) => (
              <div key={rating} className="flex items-center gap-2">
                <span className="text-sm text-gray-600 w-4">{rating}</span>
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-yellow-400 rounded-full h-2" 
                    style={{width: `${rating === 5 ? '70' : rating === 4 ? '20' : '10'}%`}}
                  ></div>
                </div>
                <span className="text-sm text-gray-500">
                  {rating === 5 ? '70%' : rating === 4 ? '20%' : '10%'}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialWidgets;