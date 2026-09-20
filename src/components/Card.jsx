import Paragraph from "./Typography/Paragraph";
import { Card } from "antd";
const CustomCard = ({ CardHeading, CardParagraphs = [] }) => {
  return (
    <Card
      title={CardHeading || "Card heading"}
      variant="borderless"
      style={{ width: 300 }}
    >
      {CardParagraphs.map((item, index) => {
       return <Paragraph key={index}>{item}</Paragraph>;
      })}
    </Card>
  );
};

export default CustomCard;
