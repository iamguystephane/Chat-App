import {
  Settings01Icon,
  SecurityIcon,
  Notification01Icon,
  PaintBrushIcon,
  HelpCircleIcon,
  InformationCircleIcon,
} from "hugeicons-react";

const menuItems = [
  { icon: Settings01Icon, label: "General", description: "App preferences" },
  { icon: SecurityIcon, label: "Privacy", description: "Security settings" },
  { icon: Notification01Icon, label: "Notifications", description: "Alert preferences" },
  { icon: PaintBrushIcon, label: "Appearance", description: "Theme & display" },
  { icon: HelpCircleIcon, label: "Help", description: "Get support" },
  { icon: InformationCircleIcon, label: "About", description: "App info" },
];

export default function Account() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-900">Settings</h2>
      </div>

      <div className="space-y-2">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 bg-white hover:bg-gray-50 rounded-xl cursor-pointer transition-all duration-200 border border-transparent hover:border-gray-100 hover:shadow-sm"
          >
            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center flex-shrink-0">
              <item.icon size={20} className="text-purple-500" />
            </div>

            <div className="flex-1 min-w-0">
              <h4 className="text-sm font-semibold text-gray-900">{item.label}</h4>
              <p className="text-xs text-gray-500">{item.description}</p>
            </div>

            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}
