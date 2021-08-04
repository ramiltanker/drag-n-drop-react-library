import girafe from "../images/жираф.png";
import ant from "../images/муравей.png";
import camel from "../images/верблюд.png";

const animals = [
  {
    name: "Муравей",
    img: ant,
    text: "Мелкое перепончатокрылое насекомое, живущее большими сообществами.",
    id: 1,
  },
  {
    name: "Жираф",
    img: girafe,
    text: "Парнокопытное млекопитающее из семейства жирафовых. Является самым высоким наземным животным планеты.",
    id: 2,
  },
  {
    name: "Верблюд",
    img: camel,
    text: "Это крупные животные, приспособленные для жизни в засушливых регионах мира — пустынях, полупустынях и степях.",
    id: 3,
  },
];

export default animals;
