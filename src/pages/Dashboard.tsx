import { useState } from "react";
import { Menu } from "lucide-react";
import TestimonialList from "../components/general/TestimonialList";
import DashboardHeader from "../components/general/DashboardHeader";
import TestimonialWidgets from "../components/general/TestimonialWidgets";
import { DashboardSidebar } from "@/components/general/DashboardSidebar";
import { useResponseContext } from "@/context/ResponseContext";
import { useFormContext } from "@/context/FormContext";
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("all");
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const { responses } = useResponseContext();
  const { forms } = useFormContext();

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Desktop Sidebar */}
      <div className="hidden md:block flex-none">
        <DashboardSidebar />
      </div>

      {/* Mobile Sheet Navigation */}
      <div className="md:hidden absolute top-3 left-4 z-50">
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-fit p-0">
            <DashboardSidebar />
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex-1 flex flex-col w-full">
        <div className="flex-none">
          <DashboardHeader />
        </div>
        <main className="flex-1 overflow-y-auto bg-[#fafafa] p-4 md:p-6">
          <div className="max-w-full">
            <TestimonialWidgets selectedTab={selectedTab} />

            <div className="mt-8">
              <div className="flex items-center justify-between text-gray-600">
                <div className="flex items-center gap-2">
                  <h2 className="md:text-xl text-base font-medium">Your Monts</h2>
                  <span className="text-gray-400 md:text-sm text-xs ml-1 md:mt-1">
                    {responses.length}
                  </span>
                </div>
              </div>

              <div className="overflow-x-auto">
                <div className="flex gap-4 sm:gap-6 mt-6 border-b border-gray-200 text-sm w-full">
                  <TabButton
                    active={selectedTab === "all"}
                    onClick={() => setSelectedTab("all")}
                  >
                    All
                  </TabButton>
                  <TabButton
                    active={selectedTab === "favorites"}
                    onClick={() => setSelectedTab("favorites")}
                  >
                    Favorites
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
    className={`pb-4 px-2 whitespace-nowrap text-xs sm:text-sm ${
      active ? "border-b-2 border-[#6366F1] text-gray-900" : "text-gray-500"
    }`}
  >
    {children}
  </button>
);

export default Dashboard;