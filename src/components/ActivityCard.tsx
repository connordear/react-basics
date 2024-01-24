import "./ActivityCard.css";
import CustomButton from "./CustomButton";
type ActivityCardPropsType = {
  img: string;
  title: string;
  description: string;
  price: number;
  priceDetails: string;
  link: string;
};

function ActivityCard({
  img,
  title,
  description,
  price,
  priceDetails,
  link,
}: ActivityCardPropsType) {
  return (
    <div className="row activity-container">
      <div className="col img-col">
        <img src={img} className="activity-img" />
      </div>
      <div className="col title-col">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="col price-col">
        <h1>${price.toFixed(2)}</h1>
        <p>{priceDetails}</p>
        <CustomButton text="See Options" link={link} />
      </div>
    </div>
  );
}

export default ActivityCard;
