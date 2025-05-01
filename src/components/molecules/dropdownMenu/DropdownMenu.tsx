import Button from "@/components/atoms/button/Button";
import Divider from "@/components/atoms/divider/Divider";
import Menu from "@/components/atoms/dropdownMenu/Menu";
import MenuButton from "@/components/atoms/dropdownMenu/MenuButton";
import MenuItem from "@/components/atoms/dropdownMenu/MenuItem";
import MenuItems from "@/components/atoms/dropdownMenu/MenuItems";
import { colorMapperMenu, colorMapperText } from "@/utils/color";
import clsx from "clsx";

export default function DropdownMenu({
  id,
  children,
  anchor = "bottom end",
  options,
  className,
}: DropdownMenuProps) {
  return (
    <Menu>
      <MenuButton id={id} className={clsx(className)}>
        {children}
      </MenuButton>

      {/* Pannel */}
      <MenuItems id={id} anchor={anchor} className="flex flex-col gap-y-1">
        {options.map((option, index) => {
          if (option.type == "divider") return <Divider />;
          else if (option.type == "custom")
            return <div className={clsx("w-full")}>{option.label}</div>;
          else
            return (
              <MenuItem>
                <Button
                  id={`dropdown-menu-item-${id}-${index}`}
                  variant="custom"
                  className={clsx(
                    "!justify-start p-2",
                    "rounded-md",
                    // --- Color (Custom) ---
                    colorMapperMenu(option.color),
                  )}
                  onClick={option.onAction}
                  href={option.href}
                  target={option.target}
                  disabled={option.disabled}
                >
                  <span className={clsx(colorMapperText(option.color))}>
                    {option.icon}
                  </span>
                  {option.label}
                </Button>
              </MenuItem>
            );
        })}
      </MenuItems>
    </Menu>
  );
}

interface DropdownMenuProps {
  id?: string;
  children: React.ReactNode;
  anchor?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "top start"
    | "top end"
    | "bottom start"
    | "bottom end";
  options: DropdownMenuItemProps[];
  className?: string;
}

interface DropdownMenuItemProps {
  type?: string; // "custom" | "divider" | "default"
  label?: React.ReactNode;
  onAction?: Function;
  href?: string;
  target?: string;
  icon?: React.ReactNode;
  color?: string;
  disabled?: boolean;
}
