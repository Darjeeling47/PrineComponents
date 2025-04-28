import Avatar from "./Avatar";

export default function AvatarList({ lists, size }: AvatarListProps) {
  return (
    <div className="flex -space-x-2 overflow-hidden">
      {lists.map((item) => (
        <Avatar
          id={item.id}
          src={item.src}
          alt={item.alt}
          fallback={item.fallback}
          size={size}
          isOpenRing
        />
      ))}
    </div>
  );
}

interface AvatarListProps {
  lists: AvatarListItem[];
  size: number;
}

interface AvatarListItem {
  id?: string;
  src: string;
  alt: string;
  fallback: string;
}
