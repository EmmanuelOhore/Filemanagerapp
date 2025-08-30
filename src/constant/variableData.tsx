import {
  Users,
  CloudUpload,
  Folder,
  Cloud,
  Star,
  Clock,
  Trash,
} from "lucide-react";

export const navData = [
  { name: "Home", href: "#" },
  { name: "How it works", href: "#" },
  { name: "FAQ", href: "#" },
  { name: "Pricing", href: "#" },
];

export const userStats = [
  {
    icon: <Users className="text-white w-6 h-6" />,
    statNumber: "1M+",
    description: "Active users",
  },
  {
    icon: <Folder className="text-white w-6 h-6" />,
    statNumber: "5B+",
    description: "files stored",
  },
  {
    icon: <CloudUpload className="text-white w-6 h-6" />,
    statNumber: "6M+",
    description: "Uploaded files",
  },
];

// layoute sidebar data :
export const sideBarData = [
  { title: "File manager", icon: <Cloud /> },
  { title: "Recent Files", icon: <Clock /> },
  { title: "favorite", icon: <Star /> },
  { title: "Trash bin", icon: <Trash /> },
];
export const sideBarData2 = [
  { title: "Team", icon: <Cloud /> },
  { title: "School", icon: <Clock /> },
];
