interface SuggestionsCardsProps {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  img: string;
}

const SuggestionsCards = ({ Icon, text, img }: SuggestionsCardsProps) => {
  return (
    <div className=" text-white rounded-md bg-[#272c34] flex-1  ">
      <header className="flex justify-center px-6 pt-6">
        <div className="w-full h-[6rem]  bg-black">
          <img
            src={img}
            alt="file preview"
            className="w-full h-full object-cover"
          />
        </div>
      </header>
      <footer className="flex items-center px-6 py-3 rounded-lg bg-[#3f4652]">
        <Icon className="w-4 h-4 mr-3" />
        <p className="text-[#9ba2b6] text-sm">{text}</p>
      </footer>
    </div>
  );
};

export default SuggestionsCards;
