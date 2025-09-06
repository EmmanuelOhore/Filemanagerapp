interface storageCardsprops {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  type: string;
  color: string;
  itemCount: number;
  storage: string;
}

const OverviewStorageCards = ({
  Icon,
  type,
  color,
  itemCount,
  storage,
}: storageCardsprops) => {
  return (
    <div className="bg-[#272c34] rounded-md p-4 flex-1">
      <header className="flex gap-3  ">
        <div
          className={`text-white flex items-center justify-center p-4 ${color} rounded-lg`}
        >
          <Icon className="w-4.5 h-4.5" />
        </div>
        <div className="text-white flex flex-col">
          <h3>{type}</h3>
          <small className="text-[#788199]">{itemCount} items</small>
        </div>
      </header>
      <div
        className={`w-full h-2 p-[1px] rounded-full overflow-hidden my-2 bg-[#3f4652]`}
      >
        <div className={`w-[43%]  ${color}   h-full `}></div>
      </div>
      <p className="text-[#788199] text-xs">{storage}</p>
    </div>
  );
};

export default OverviewStorageCards;
