import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const DonationsCard = ({ donation }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_button_bg_color,
  } = donation || {};
  return (
    <Link to={`/donations/${id}`}>
      <div
        style={{ background: card_bg_color }}
        className="card  bg-base-100 shadow-xl"
      >
        <figure className="h-[200px]">
          <img src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2
            style={{
              background: category_bg_color,
              color: text_button_bg_color,
            }}
            className="card-title text-sm font-medium w-1/3 py-2 rounded-lg pl-2"
          >
            {category}
          </h2>
          <p
            style={{ color: text_button_bg_color }}
            className="text-xl font-semibold"
          >
            {title}
          </p>
        </div>
      </div>
    </Link>
  );
};
DonationsCard.propTypes = {
  donation: PropTypes.object.isRequired,
};
export default DonationsCard;
