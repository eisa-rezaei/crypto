import {IoEarthSharp} from "react-icons/io5";
import {RiSearchEyeLine} from "react-icons/ri";
import {BiCommentDetail} from "react-icons/bi";
import {AiOutlineCode} from "react-icons/ai";
import {CgFileDocument} from "react-icons/cg";

export const COIN_INFO = [
  {title: "Website", logo: <IoEarthSharp />},
  {title: "Explore", logo: <RiSearchEyeLine />},
  {title: "Message Board", logo: <BiCommentDetail />},
  {title: "Source Code", logo: <AiOutlineCode />},
  {title: "Technical Documentation", logo: <CgFileDocument />},
];

export const marketData = [
  {
    title: "BitCoin price is 63000$ now Is that gonna go higher?",
    newsAgency: "ISNA",
    date: "2021.10.23",
    color: "#8d3434",
  },
  {
    title: "BitCoin price is 63000$ now Is that gonna go higher?",
    newsAgency: "IRNA",
    date: "2021.9.28 23:59:23",
    color: "#7460cb",
  },
  {
    title: "BitCoin price is 63000$ now Is that gonna go higher?",
    newsAgency: "BBC",
    date: "2021.10.29 02:20:23",
    color: "#53858d",
  },
  {
    title: "BitCoin price is 63000$ now Is that gonna go higher?",
    newsAgency: "NBC",
    date: "2021.5.10",
    color: "#b2b724",
  },
];

export const Description = (name, description) => {
  const newDescription = description?.slice(0, 600);
  const DESCRIPTION = [
    {
      title: `About ${name}`,
      description: newDescription,
    },
    {
      title: `What is  ${name}`,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing  tempora perspiciatis iure quidemcorrupti, quos rem? Nesciunt impedit praesentium nemo ametsapiente quidem rerum ab dolorum eos molestias alias veritatis sedmodi repellendus officiis, vero omnis inventore blanditiis!Aliquam laborum enim vel at mollitia ratione, unde iste aliquidexercitationem ipsam consequuntur distinctio officiis providentut, nisi facere!",
    },
    {
      title: `How much ${name} is in circlulation?`,
      description: newDescription,
    },
    {
      title: `About ${name}`,
      description:
        "Lorem ipsum dolor sit amet, quos rem? Nesciunt impedit praesentium nemo ametsapiente quidem rerum ab dolorum eos molestias alias veritatis sedmodi repellendus officiis, vero omnis inventore blanditiis!Aliquam laborum enim vel at mollitia ratione, unde iste aliquidexercitationem ipsam consequuntur distinctio officiis providentut, nisi facere!",
    },
    {
      title: `Who are the founders of ${name}?`,
      description: newDescription,
    },
    {
      title: `What makes ${name} unique?`,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipiscimaiores voluptatibus tenetur tempora perspiciatis iure quidemcorrupti, quos rem? Nesciunt impedit praesentium nemo ametsapiente quidem rerum ab dolorum eos molestias alias veritatis sedmodi repellendus officiis, vero omnis inventore blanditiis!Aliquam laborum enim vel at mollitia ratione, unde iste aliquidexercitationem ipsam consequuntur distinctio officiis providentut, nisi facere!",
    },
    {
      title: `How much ${name} is in circlulation?`,
      description: newDescription,
    },
    {
      title: `How is the ${name} network is secured?`,
      description:
        "Lorem ipsum  quos rem? Nesciunt impedit praesentium nemo ametsapiente quidem rerum ab dolorum eos molestias alias veritatis sedmodi repellendus officiis, vero omnis inventore blanditiis!Aliquam laborum enim vel at mollitia ratione, unde iste aliquidexercitationem ipsam consequuntur distinctio officiis providentut, nisi facere!",
    },
  ];
  return DESCRIPTION;
};
