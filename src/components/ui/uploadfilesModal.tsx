import { FolderUp, X, Image, CircleCheck } from "lucide-react";
const UploadFilesModal = ({ open }: { open: () => void }) => {
  return (
    <section className=" bg-[#272c34] fle flec-col  py-4 w-[40%] rounded-xl">
      <header className="h-[50vh] relative flex items-center justify-center">
        <X
          className="absolute top-4 right-4 cursor-pointer text-white w-7 h-7"
          onClick={open}
        />
        <div className="flex flex-col gap-4 items-center">
          <FolderUp className="w-10 h-10 text-white mx-auto" />
          <p className="text-white">
            Drop your files here, or click the browser
          </p>
        </div>
      </header>
      <article className="h-[5vh] bg-gradient-to-r from-[#3a3f47] to-[#2d3238]"></article>

      <article className="flex flex-col gap-4 items-center mt-4 py-4 ">
        <h2 className="text-white font-medium text-xl">Upload Status</h2>
        <article className="flex items-center gap-4 w-[80%] mx-auto">
          <div className="p-2 bg-[#3f4652] rounded-full">
            <Image className="w-5 h-5 text-white" />
          </div>
          <div className="w-full flex flex-col">
            <div className="flex justify-between">
              <p className="text-white text-xs">DesignMockup.jpeg</p>
              <p className="text-white text-xs">49%</p>
            </div>
            <div className=" w-full h-1 p-[1px] rounded-full overflow-hidden my-2 bg-[#3f4652]">
              <div className={`w-[43%]  bg-[#edeef1]   h-full `}></div>
            </div>
          </div>
        </article>
        <article className="flex items-center gap-4 w-[80%] mx-auto">
          <div className="p-2 bg-[#3f4652] rounded-full">
            <Image className="w-5 h-5 text-white" />
          </div>
          <div className="w-full flex flex-col">
            <div className="flex justify-between">
              <p className="text-white text-xs">DesignMockup.jpeg</p>
              <CircleCheck className="w-5 h-5 text-white" />
            </div>
          </div>
        </article>
      </article>
    </section>
  );
};

export default UploadFilesModal;
