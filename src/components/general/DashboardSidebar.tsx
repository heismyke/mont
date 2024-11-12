import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { WormIcon, TagsIcon, InboxIcon } from "lucide-react";

const DashboardSidebar = () => {
  return (
    <div className="w-64 border-r border-gray-200 bg-[#F5F5F5] min-h-screen">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
         <img src="/src/assets/protocols/polygon.svg" alt="Polygon Network" className="w-8 h-8" />
          <div>
            <div className="font-medium text-gray-800">Polygon Network</div>
            <div className="text-xs text-gray-500">Enterprise plan</div>
          </div>
        </div>
      </div>

      <div className="p-2">
        <div className="shadow-sm rounded-lg bg-white p-4 text-gray-800 space-y-1">
          <p className="text-sm font-medium flex items-center gap-1">
            Support{" "}
            <span>
              <ArrowTopRightIcon />
            </span>
          </p>
          <p className="text-xs">Report an issue or request a feature </p>
        </div>

        <div className="mt-4">
          <div className="px-3 py-2 text-xs font-medium text-gray-900">
            COLLECT
          </div>
          <NavItem icon={<WormIcon />} label="Forms" />
          {/* <NavItem icon={<ImportIcon />} label="Import testimonials" /> */}
        </div>

        <div className="mt-4">
          <div className="px-3 py-2 text-xs font-medium text-gray-900">
            MANAGE
          </div>
          <NavItem icon={<InboxIcon />} label="Testimonials" active />
          <NavItem icon={<TagsIcon />} label="Tags" />
        </div>

        {/* Add remaining sections */}
      </div>
    </div>
  );
};

const NavItem = ({
  icon,
  label,
  active = false,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) => (
  <div
    className={`
    flex items-center gap-3 px-3 py-2 rounded-md text-sm text-gray-600
    ${active ? "bg-gray-100" : "hover:bg-gray-50"}
  `}
  >
    {icon}
    <span className={active ? "font-medium" : ""}>{label}</span>
  </div>
);

export default DashboardSidebar;
