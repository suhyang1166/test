import React, { useEffect } from "react";
import { SubSection, SubTextContents, SubTextSection } from "./Sub.styled";
import SendMail from "../../components/SendMail/SendMail";
import { useRandomImgQuery } from "../../hook/useRandomImg";

const Sub: React.FC = () => {
  const { data: urlImg, isLoading, isError, error } = useRandomImgQuery();
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <h1>{error.message}</h1>;
  }

  console.log("data", urlImg);
  return (
    <SubSection $BG={urlImg?.full}>
      <SubTextContents>
        <h3>Sed ut perspiciatis unde omnis</h3>
        <SubTextSection>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All the Lorem Ipsum generators on the Internet tend
            to repeat predefined chunks as necessary.
          </p>
          <span />
          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore.
          </p>
        </SubTextSection>
      </SubTextContents>
      <SendMail />
    </SubSection>
  );
};

export default Sub;
