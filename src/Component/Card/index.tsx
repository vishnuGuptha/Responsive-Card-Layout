import { IData } from "Pages/MainPage";
import React from "react";
import { FC } from "react";
import DynamicCard from "./DynamicCard";
import FixedCard from "./FixedCard";

type cardType = "FixedCard" | "DynamicCard";

interface ICard {
  title?: string;
  Value?: any;
  icon?: string;
  type: cardType;
  datas?: IData;
}

const Card: FC<ICard> = (props) => {
  return props.type === "FixedCard" ? (
    <FixedCard />
  ) : (
    <>
      {props.type === "DynamicCard" && props.title && (
        <DynamicCard
          title={props.title}
          Value={props.Value}
          icon={props.icon}
        />
      )}
    </>
  );
};

export default Card;
