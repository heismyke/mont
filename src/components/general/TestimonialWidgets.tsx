/* eslint-disable react-hooks/exhaustive-deps */
import { BarChart3Icon, StarIcon, VideotapeIcon } from "lucide-react";
import { useFormContext } from "@/context/FormContext";
import { useResponseContext } from "@/context/ResponseContext";
import { useEffect, useMemo } from "react";
import { useAuth } from "@/context/AuthContext";

interface TestimonialListProps {
  selectedTab: string;
}

const TestimonialWidgets = ({ selectedTab }: TestimonialListProps) => {
  const { forms, loadForms } = useFormContext();
  const { responses, loadResponses } = useResponseContext();
  const { user } = useAuth();

  useEffect(() => {
    const loadData = async () => {
      if (user?.id) {
        await Promise.all([loadForms(), loadResponses(user.id)]);
      }
    };
    loadData();
  }, [user?.id]);

  const getHeightClass = (percentage: number) => {
    if (percentage === 0) return "";
    if (percentage <= 12.5) return "h-3";
    if (percentage <= 25) return "h-6";
    if (percentage <= 37.5) return "h-9";
    if (percentage <= 50) return "h-12";
    if (percentage <= 62.5) return "h-16";
    if (percentage <= 75) return "h-20";
    if (percentage <= 87.5) return "h-24";
    return "h-32";
  };

  const averageRating = useMemo(
    () =>
      responses.length > 0
        ? responses.reduce(
            (acc, response) =>
              acc + (response.responseState.response.rating || 0),
            0
          ) / responses.length
        : 0,
    [responses]
  );

  // Calculate responses over time (last 7 days)
  const { last7Days, responsesPerDay, normalizedResponses } = useMemo(() => {
    const last7Days = [...Array(7)]
      .map((_, i) => {
        const date = new Date();
        date.setDate(date.getDate() - i);
        return date.toISOString().split("T")[0];
      })
      .reverse();

    const responsesPerDay = last7Days.map(
      (date) =>
        responses.filter((response) => response.date.split("T")[0] === date)
          .length
    );

    const maxResponses = Math.max(...responsesPerDay, 1);
    const normalizedResponses = responsesPerDay.map(
      (count) => (count / maxResponses) * 100
    );

    return { last7Days, responsesPerDay, normalizedResponses };
  }, [responses]);

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <BarChart3Icon className="w-5 h-5 text-indigo-600" />
          <h3 className="font-medium text-gray-900">{selectedTab === 'all' || selectedTab === 'favorites' ? "Analytics Overview" : `Analytics for ${selectedTab}`}</h3>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Total Forms */}
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 text-blue-600 mb-2">
            <BarChart3Icon className="w-4 h-4" />
            <span className="text-sm font-medium">Total Forms</span>
          </div>
          <div className="text-2xl font-bold text-blue-700">{forms.length}</div>
          <div className="text-sm text-blue-600 mt-1">Total active forms</div>
        </div>

        {/* Total Responses */}
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 text-green-600 mb-2">
            <VideotapeIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Total Monts</span>
          </div>
          <div className="text-2xl font-bold text-green-700">
            {responses.length}
          </div>
          <div className="text-sm text-green-600 mt-1">
            Total monts received
          </div>
        </div>

        {/* Average Rating */}
        <div className="bg-yellow-50 p-4 rounded-lg">
          <div className="flex items-center gap-2 text-yellow-600 mb-2">
            <StarIcon className="w-4 h-4" />
            <span className="text-sm font-medium">Average Rating</span>
          </div>
          <div className="text-2xl font-bold text-yellow-700">
            {averageRating.toFixed(1)}
          </div>
          <div className="flex text-yellow-500 mt-1">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`w-4 h-4 ${
                  i < Math.round(averageRating)
                    ? "fill-current"
                    : "stroke-current"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-2 gap-6 mt-6">
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="text-sm font-medium text-gray-700 mb-4">
            Responses Over Time
          </h4>
          <div className="h-36 flex items-end gap-2">
            {normalizedResponses.map((height, i) => (
              <div key={i} className="flex-1 relative group">
                {height === 0 ? (
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-gray-400 text-xs cursor-pointer">
                    -
                  </div>
                ) : (
                  <div
                    className={`bg-indigo-500 rounded-t-sm transition-all hover:bg-indigo-600 cursor-pointer ${getHeightClass(
                      height
                    )}`}
                  ></div>
                )}
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100">
                  {responsesPerDay[i]} responses
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            {last7Days.map((date, i) => (
              <span key={i}>
                {new Date(date).toLocaleDateString("en-US", {
                  weekday: "short",
                })}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="text-sm font-medium text-gray-700 mb-4">
            Rating Distribution
          </h4>
          <div className="space-y-2">
            {[5, 4, 3, 2, 1].map((rating) => {
              const count = responses.filter(
                (r) => r.responseState.response.rating === rating
              ).length;
              const percentage =
                responses.length > 0 ? (count / responses.length) * 100 : 0;

              return (
                <div key={rating} className="flex items-center gap-2">
                  <span className="text-sm text-gray-600 w-4">{rating}</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-yellow-400 rounded-full h-2"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-gray-500">
                    {percentage.toFixed(0)}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialWidgets;
