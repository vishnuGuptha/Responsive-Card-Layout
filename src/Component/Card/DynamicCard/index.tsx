import React, { FC } from "react";

interface IDynamicCard {
  title: string;
  Value: string;
  icon?: string;
}

const DynamicCard: FC<IDynamicCard> = (props) => {
  const renderer = (title: string, text: any, icon?: string) => {
    switch (title) {
      case "Feels Like":
        return (
          <div className="flex flex-col h-full">
            <div className="bg-neutral-700 rounded-t-lg w-full h-10 flex items-center pr-5 text-white justify-center">
              {title}
            </div>
            <div className="flex-1 flex flex-col justify-center items-center font-bold text-lg text-neutral-700">
              <div className="w-[60px] h-[60px]">
                <img src={icon} />
              </div>
              <div>{text}</div>
            </div>
            <div className="bg-neutral-700 rounded-b-lg w-full h-10 flex items-center justify-end pr-5 text-zinc-200">
              Footer
            </div>
          </div>
        );
      case "Temperature":
      case "Humidity":
      case "Pressure":
      case "Wind Degree":
      case "Wind Speed":
      case "Wind Direction":
      case "isDay":
      case "Gust":
      case "UV":
        return (
          <div className="flex flex-col h-full">
            <div className="bg-neutral-700 rounded-t-lg w-full h-10 flex items-center pr-5 text-white justify-center">
              {title}
            </div>
            <div className="flex-1 flex justify-center items-center text-xl font-bold text-neutral-700">
              <div>{text}</div>
            </div>
            <div className="bg-neutral-700 rounded-b-lg w-full h-10 flex items-center justify-end pr-5 text-zinc-200">
              Footer
            </div>
          </div>
        );

      default:
        return "";
    }
  };
  return (
    <div className="rounded-lg flex flex-col aspect-[1/1] bg-slate-300 md:max-w-[773px] md:w-[calc(50%-10px)] lg:w-[calc(32%-10px)] xl:w-[calc(25%-20px)] drop-shadow-xl">
      {props.icon
        ? renderer(props.title, props.Value, props.icon)
        : renderer(props.title, props.Value)}
    </div>
  );
};

export default DynamicCard;
