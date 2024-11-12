import { useState } from "react";
import TestimonialList from "../components/general/TestimonialList";
import DashboardHeader from "../components/general/DashboardHeader";
import DashboardSidebar from "../components/general/DashboardSidebar";
import TestimonialWidgets from "../components/general/TestimonialWidgets";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("all");

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-none">
        <DashboardSidebar />
      </div>
      <div className="flex-1 flex flex-col h-full">
        <div className="flex-none">
          <DashboardHeader />
        </div>
        <main className="flex-1 overflow-y-auto bg-[#fafafa] p-6">
          <div className="min-h-full">
            <TestimonialWidgets />

            <div className="mt-8">
              <div className="flex items-center justify-between text-gray-600">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-medium">Your Monts</h2>
                  <span className="text-gray-500 ml-2">249</span>
                </div>
                <div className="flex items-center gap-3">
                  <Button className="bg-[#6366F1] text-white px-4 py-2 rounded-lg text-sm font-medium">
                    Go to forms
                  </Button>
                </div>
              </div>

              <div className="flex gap-6 mt-6 border-b border-gray-200">
                <TabButton
                  active={selectedTab === "all"}
                  onClick={() => setSelectedTab("all")}
                >
                  All
                </TabButton>
                <TabButton
                  active={selectedTab === "feedback"}
                  onClick={() => setSelectedTab("feedback")}
                >
                  Feedback tag{" "}
                </TabButton>
                <TabButton
                  active={selectedTab === "social"}
                  onClick={() => setSelectedTab("social")}
                >
                  Social tag
                </TabButton>
              </div>

              <TestimonialList />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

interface TabButtonProps {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

const TabButton: React.FC<TabButtonProps> = ({ children, active, onClick }) => (
  <button
    onClick={onClick}
    className={`pb-4 px-2 ${
      active ? "border-b-2 border-[#6366F1] text-gray-900" : "text-gray-500"
    }`}
  >
    {children}
  </button>
);

export default Dashboard;
