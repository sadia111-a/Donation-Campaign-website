import PropTypes from "prop-types";

const SingleDonationCard = ({ donation }) => {
  const {
    id,
    picture,
    title,
    category,
    category_bg_color,
    card_bg_color,
    text_button_bg_color,
    description,
    price,
  } = donation || {};
  return (
    <div className="relative">
      <div className="min-h-[60vh]  py-5">
        <div className="relative">
          <img className="h-[500px] w-3/4 mx-auto" src={picture} alt="" />
          <button
            style={{ background: text_button_bg_color }}
            className="text-[#FFF] absolute bottom-6 left-6 text-xl font-semibold px-5 py-4 rounded-md"
          >
            Donate ${price}
          </button>
        </div>
      </div>
      <div className="">
        <h2 className="text-[#0B0B0B] text-5xl font-bold w-3/4 mx-auto">
          {title}
        </h2>
        <p className="text-[#0B0B0BB2] text-sm w-3/4 mx-auto py-5">
          {description}
        </p>
      </div>
    </div>
  );
};

SingleDonationCard.propTypes = {
  donation: PropTypes.object.isRequired,
};

export default SingleDonationCard;
