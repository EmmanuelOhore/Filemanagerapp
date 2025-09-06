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
  { title: "File manager", icon: <Cloud className="w-4.5 h-4.5" /> },
  { title: "Recent Files", icon: <Clock className="w-4.5 h-4.5" /> },
  { title: "favorite", icon: <Star className="w-4.5 h-4.5" /> },
  { title: "Trash bin", icon: <Trash className="w-4.5 h-4.5" /> },
];
export const sideBarData2 = [
  { title: "Team", icon: <Cloud className="w-4.5 h-4.5" /> },
  { title: "School", icon: <Clock className="w-4.5 h-4.5" /> },
];

// recent files table data :
export const filesData = [
  {
    name: "Schoolpapper.docx",
    size: "4.78 MB",
    shared: "Me",
    lastModified: "24/08/2034 6:34 AM",
  },
  {
    name: "Justin Bider.mp4",
    size: "12.3 MB",
    shared: "Team",
    lastModified: "12/05/2033 9:15 PM",
  },
  {
    name: "Report.pdf",
    size: "2.1 MB",
    shared: "Public",
    lastModified: "03/11/2032 11:45 AM",
  },
  {
    name: "Budget.mp4",
    size: "856 KB",
    shared: "Finance Dept",
    lastModified: "19/02/2035 8:22 AM",
  },
  {
    name: "ProfilePic.png",
    size: "245 KB",
    shared: "Me",
    lastModified: "07/01/2031 5:10 PM",
  },
  {
    name: "DesignMockup.jpeg",
    size: "18.6 MB",
    shared: "Design Team",
    lastModified: "29/09/2034 2:41 PM",
  },
  {
    name: "Notes.jpeg",
    size: "14 KB",
    shared: "Me",
    lastModified: "15/07/2030 7:58 AM",
  },
];
