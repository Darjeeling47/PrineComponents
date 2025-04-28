import Tab from "@/components/atoms/tabMenu/Tab";
import TabGroup from "@/components/atoms/tabMenu/TabGroup";

export default function TabMenu({
  id,
  options,
  value,
  onChange,
  className,
  tabClassName,
}: TabMenuProps) {
  return (
    <TabGroup id={id} value={value} onChange={onChange} className={className}>
      {options.map((option, index) => (
        <Tab key={index} value={option.value} className={tabClassName}>
          {option.label}
        </Tab>
      ))}
    </TabGroup>
  );
}

interface TabMenuProps {
  id?: string;
  options: TabMenuItemProps[];
  value: any;
  onChange: (value: any) => void;
  className?: string;
  tabClassName?: string;
}

interface TabMenuItemProps {
  label: React.ReactNode;
  value: any;
}
