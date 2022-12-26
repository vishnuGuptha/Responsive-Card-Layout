import React from "react";
import { FC } from "react";
import DynamicCard from "./DynamicCard";
import FixedCard from "./FixedCard";

type cardType = "FixedCard" | "DynamicCard";

interface ICard {
  type: cardType;
}

const Card: FC<ICard> = (props) => {
  return props.type === "FixedCard" ? (
    <FixedCard />
  ) : (
    <>{props.type === "DynamicCard" && <DynamicCard />}</>
  );
};

export default Card;
