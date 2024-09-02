import React, { useEffect } from "react";
import { SubSection, SubTextContents, SubTextSection } from "./Sub.styled";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import SendMail from "../../components/SendMail/SendMail";

const AccessKey = process.env.REACT_APP_ACCESS_KEY;
const SecretKey = process.env.REACT_APP_SECRET_KEY;

interface ApiImgInterface {
  urls: string;
}

const Sub: React.FC = () => {
  // const fetchData = axios
  //   .get(`https://api.unsplash.com/photos/random?client_id=${AccessKey}`)
  //   .then((res) => res.data);

  // console.log("data", fetchData);
  return (
    <SubSection>
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
