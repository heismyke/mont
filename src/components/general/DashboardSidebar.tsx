import { useNavigate } from "react-router-dom";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { WormIcon, TagsIcon, InboxIcon, PlusCircleIcon } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useFormContext } from "@/context/FormContext";
import { useEffect } from "react";

export const DashboardSidebar = () => {
  const { user } = useAuth();
  const { forms, loadForms } = useFormContext();
  const navigate = useNavigate();

  useEffect(() => {
    loadForms();
  }, [loadForms]);

  const handleFormClick = (formId: string) => {
    navigate(`/forms/${formId}`);
  };

  return (
    <div className="w-64 border-r border-gray-200 bg-[#F5F5F5] min-h-screen">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <img
            src={user?.user_metadata.avatar_url || "/placeholder.png"}
            alt={user?.user_metadata.name || "User Avatar"}
            className="w-8 h-8 rounded-full"
          />
          <div>
            <div className="font-medium text-gray-800">
              {user?.user_metadata.name || "Unnamed User"}
            </div>
            <div className="text-xs text-gray-500">{user?.email}</div>
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
          <p className="text-xs">Report an issue or request a feature</p>
        </div>

        <div className="mt-4 ">
          <div className="px-3 py-2 text-xs font-medium text-gray-900">
            COLLECT
          </div>

          <NavItem
            icon={<WormIcon />}
            rightIcon={<PlusCircleIcon size={20} />}
            label="Forms"
            onClick={() => navigate("/form")}
          />

          {forms.length > 0 && (
            <>
              {forms.map((form) => (
                <Forms
                  key={form.id}
                  label={form.name || "Untitled Form"}
                  onClick={() => handleFormClick(form.id)}
                  icon={undefined}
                />
              ))}
            </>
          )}
        </div>

        <div className="mt-4">
          <div className="px-3 py-2 text-xs font-medium text-gray-900">
            MANAGE
          </div>
          <NavItem
            icon={<InboxIcon />}
            rightIcon={undefined}
            label="Monts"
            active
            onClick={() => navigate("/dashboard")}
          />
          <NavItem rightIcon={undefined} icon={<TagsIcon />} label="Tags" />
        </div>
      </div>
    </div>
  );
};

const NavItem = ({
  icon,
  rightIcon,
  label,
  active = false,
  onClick,
}: {
  icon: React.ReactNode;
  rightIcon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) => (
  <div
    className={`
    flex items-center justify-between px-3 py-2 rounded-md text-sm text-gray-600 cursor-pointer border-b border-gray-200
    ${active ? "bg-gray-100" : "hover:bg-gray-50"}
  `}
    onClick={onClick}
  >
    <div className="flex items-center gap-3">
      {icon}
      <span className={active ? "font-medium" : ""}>{label}</span>
    </div>

    {rightIcon}
  </div>
);

const Forms = ({
  icon,
  label,
  active = false,
  onClick,
}: {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
}) => (
  <div
    className={`
    flex items-center gap-3 px-3 py-2 rounded-md text-xs text-gray-600 cursor-pointer border-b border-gray-200
    ${active ? "bg-gray-100" : "hover:bg-gray-50"}
  `}
    onClick={onClick}
  >
    {icon}
    <span className={active ? "font-medium" : ""}>{label}</span>
  </div>
);

