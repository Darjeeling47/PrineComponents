import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import {
  EllipsisVerticalIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  PrinterIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { ActionColumnProps } from "./dataGridInterface";
import DropdownMenu from "@/components/molecules/dropdownMenu/DropdownMenu";
import clsx from "clsx";

export default function DataGridTableActionDropdown({
  actionColumns,
  rowId,
}: DataGridTableActionDropdownProps) {
  // setup the action items
  const dropdownMenuItems = getDropdownMenuItems(actionColumns, rowId);

  return (
    <div className={clsx("flex w-full items-center justify-center")}>
      <DropdownMenu
        options={dropdownMenuItems}
        className={clsx(
          "flex w-fit items-center justify-center p-1",
          "hover:bg-gray-200",
          "rounded-full",
          "transition-all duration-200 ease-in-out",
        )}
      >
        <EllipsisVerticalIcon
          className={clsx("size-5", "text-gray-900")}
          strokeWidth={2}
        />
      </DropdownMenu>
    </div>
  );
}

// Get the action items for the dropdown menu
function getDropdownMenuItems(actionColumns: ActionColumnProps[], rowId: any) {
  return actionColumns.map((action, actionIndex) => {
    return {
      label: action.label,
      icon: action.icon,
      color: action.color,
      href: action.href ? getHrefPath(action.href, rowId) : undefined,
      onAction: () => handleAction(action.onAction, rowId),
      disabled: action.disabled,
    };
  });
}

// Handle the action when the item is clicked
function handleAction(action: Function | undefined | null, rowId: any) {
  if (action) {
    action(rowId);
  }
}

// Get the href path for the action item
function getHrefPath(href: string, rowId: any) {
  if (href.startsWith("http")) {
    return href;
  } else {
    // find the :id in the href
    const id = href.match(/:id/g);
    if (id) {
      return href.replace(/:id/g, rowId.toString());
    } else {
      return href;
    }
  }
}

interface DataGridTableActionDropdownProps {
  actionColumns: ActionColumnProps[];
  rowId: any;
}
