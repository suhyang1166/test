import React, { useEffect, useState } from "react";
import RandomContents from "../../components/PeopleContents/RandomContents";
import { MainContents, MainSection, MainTitle, MainWrap } from "./Main.styled";
import { RandomData } from "../../types/RandomDataTypes";

const randomData: RandomData[] = [
  {
    id: 1,
    title: "Sed ut perspiciatis",
    text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    text: "Amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.",
  },
  {
    id: 3,
    title: "Nemo enim ipsam",
    text: "Consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor.",
  },
];

const Main: React.FC = () => {
  const [randomContents, setRandomContents] = useState<RandomData[]>([]);

  useEffect(() => {
    // 배열 랜덤하게 섞기
    const shuffleArray = (array: RandomData[]) => {
      return array.sort(() => Math.random() - 0.5);
    };
    // 랜덤하게 섞은 배열 기준으로 데이터 담기
    const shuffledData = shuffleArray([...randomData]);
    setRandomContents(shuffledData);
  }, []);

  return (
    <MainWrap>
      <MainSection>
        <MainTitle>
          Snap photos and share like
          <br />
          never before
        </MainTitle>
      </MainSection>
      <MainContents>
        {randomContents.map((data) => (
          <RandomContents key={data.id} data={data} />
        ))}
      </MainContents>
    </MainWrap>
  );
};

export default Main;
