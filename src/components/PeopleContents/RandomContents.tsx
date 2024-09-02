import React from "react";
import { Article, Figure, More, Section } from "./RandomContents.styled";
import { RandomDataProps } from "../../types/RandomDataTypes";

const RandomContents: React.FC<RandomDataProps> = ({ data }) => {
  const imgUrl = require(`../../assets/randomImg/${data.id}.png`);

  return (
    <Article>
      <Figure>
        <img src={imgUrl} alt={`randomImg${data.id}`} />
      </Figure>
      <Section>
        <h2>{data.title}</h2>
        <p>{data.text}</p>
        <More>Learn more</More>
      </Section>
    </Article>
  );
};

export default RandomContents;
