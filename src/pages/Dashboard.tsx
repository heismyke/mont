import { useState } from "react";
import TestimonialList from "../components/general/TestimonialList";
import DashboardHeader from "../components/general/DashboardHeader";
import TestimonialWidgets from "../components/general/TestimonialWidgets";
import { DashboardSidebar } from "@/components/general/DashboardSidebar";
import { useResponseContext } from "@/context/ResponseContext";
import { useFormContext } from "@/context/FormContext";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  const { responses } = useResponseContext();
  const { forms } = useFormContext();

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
            <TestimonialWidgets selectedTab={selectedTab} />

            <div className="mt-8">
              <div className="flex items-center justify-between text-gray-600">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-medium">Your Monts</h2>
                  <span className="text-gray-400 text-sm ml-1 mt-1">
                    {responses.length}
                  </span>
                </div>
              </div>

              <div className="flex gap-6 mt-6 border-b border-gray-200 text-sm">
                <TabButton
                  active={selectedTab === "all"}
                  onClick={() => setSelectedTab("all")}
                >
                  All
                </TabButton>
                {forms.map((form) => (
                  <TabButton
                    key={form.id}
                    active={selectedTab === form.name}
                    onClick={() => setSelectedTab(form.name || '')}
                  >
                    {form.name}
                  </TabButton>
                ))}
              </div>

              <TestimonialList selectedTab={selectedTab} />
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