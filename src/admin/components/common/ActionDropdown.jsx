import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import { MoreHorizontal } from "lucide-react";

export default function ActionDropdown({ actions = [], row }) {
  return (
    <Menu as="div" className="relative inline-block text-left">

      {/* 3 dots button */}
      <MenuButton className="p-1 rounded hover:bg-gray-100">
        <MoreHorizontal size={18} />
      </MenuButton>

      {/* Dropdown */}
      <MenuItems className="absolute right-0 mt-2 w-36 origin-top-right bg-white border rounded-md shadow-lg z-50">

        {actions.map((action) => (
          <MenuItem key={action.key}>
            {({ focus }) => (
              <button
                onClick={() => action.onClick(row)}
                className={`w-full text-left px-3 py-2 text-sm ${
                  focus ? "" : ""
                } ${
                  action.variant === "danger"
                    ? "text-red-600"
                    : "text-gray-700"
                }`}
              >
                {action.label}
              </button>
            )}
          </MenuItem>
        ))}

      </MenuItems>

    </Menu>
  );
}
