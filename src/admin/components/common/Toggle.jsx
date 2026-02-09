import { Switch } from "@headlessui/react";
import { useState } from "react";
import clsx from "clsx";

const Toggle = ({ enabled, onChange }) => {
  return (
    <Switch
      checked={enabled}
      onChange={onChange}
      className={clsx(
        enabled ? "bg-blue-500" : "bg-gray-200",
        "relative inline-flex h-6 w-11 items-center rounded-full transition"
      )}
    >
      <span
        className={clsx(
          enabled ? "translate-x-6" : "translate-x-1",
          "inline-block h-4 w-4 transform rounded-full bg-white transition"
        )}
      />
    </Switch>
  );
};

export default Toggle;
