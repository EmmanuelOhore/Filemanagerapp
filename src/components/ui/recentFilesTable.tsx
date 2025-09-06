import { filesData } from "../../constant/variableData";
import { ArrowUpDown, Image, Music, SquarePlay, File } from "lucide-react";
const RecentFilesTable = () => {
  const IconDisplay = (type: string) => {
    const typeMatch = type.match(/\.(.*)$/);
    if (!typeMatch) return null;
    switch (typeMatch[1]) {
      case "jpeg":
      case "png":
        return <Image className="w-4 h-4 inline text-white" />;
      case "mp3":
        return <Music className="w-4 h-4 inline text-white" />;
      case "mp4":
        return <SquarePlay className="w-4 h-4 inline text-white" />;
      case "docx":
      case "pdf":
      case "pptx":
        return <File className="w-4 h-4 inline text-white" />;
      default:
        return null;
    }
  };
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200/30 text-left text-sm font-medium text-white">
            <th className="py-2 px-4">
              Name <ArrowUpDown className="w-4 h-4 inline" />
            </th>
            <th className="py-2 px-4">
              File Size <ArrowUpDown className="w-4 h-4 inline" />
            </th>
            <th className="py-2 px-4">Shared</th>
            <th className="py-2 px-4">
              Last Modified <ArrowUpDown className="w-4 h-4 inline" />
            </th>
          </tr>
        </thead>
        <tbody className=" text-xs text-gray-300">
          {filesData.map((file) => {
            return (
              <tr>
                <td className="py-3 px-4 flex items-center gap-3">
                  {IconDisplay(file.name)} {file.name}
                </td>
                <td className="py-3 px-4">{file.size}</td>
                <td className="py-3 px-4">{file.shared}</td>
                <td className="py-3 px-4">{file.lastModified}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RecentFilesTable;
