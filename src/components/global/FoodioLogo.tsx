type LogoProps = {
  nameColor: string;
};

const FoodioLogo: React.FC<LogoProps> = ({ nameColor }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-10 h-10 flex items-center justify-center bg-rose-500 text-white font-bold rounded-full text-xl">
        <span className="-rotate-12">F</span>
      </div>
      <div className={`${nameColor} font-semibold`}>Foodio.</div>
    </div>
  );
};

export default FoodioLogo;
