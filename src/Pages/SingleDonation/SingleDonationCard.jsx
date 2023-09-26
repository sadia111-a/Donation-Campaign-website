import PropTypes from "prop-types";
import swal from "sweetalert";

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
  const handleAddToDonation = () => {
    const addedDonationArray = [];
    const donationItems = JSON.parse(localStorage.getItem("donations"));
    if (!donationItems) {
      addedDonationArray.push(donation);
      localStorage.setItem("donations", JSON.stringify(addedDonationArray));
      swal("Good job!", "You Donate Successfully!", "success");
    } else {
      const isExist = donationItems.find((donation) => donation.id === id);
      if (!isExist) {
        addedDonationArray.push(...donationItems, donation);
        localStorage.setItem("donations", JSON.stringify(addedDonationArray));
        swal("Good job!", "You Donate Successfully!", "success");
      } else {
        swal("Error!", "You Already Donate here!", "error");
      }
    }
  };
  return (
    <div className="relative">
      <div className="min-h-[60vh]  py-5">
        <div className="relative ">
          <img className="h-[500px] w-11/12 mx-auto" src={picture} alt="" />
          <div className="absolute bottom-0 left-[53px] mx-auto w-full  text-start">
            {/* Add a div with a semi-transparent black background */}
            <div
              className=" w-11/12 bottom-0 flex justify-center items-center"
              style={{
                background: "rgba(0, 0, 0, 0.5)", // Adjust the opacity as needed
                display: "inline-block",
                padding: "10px",
                borderRadius: "4px",
              }}
            >
              <button
                onClick={handleAddToDonation}
                style={{ background: text_button_bg_color }}
                className="text-[#FFF]  text-xl  font-semibold px-5 py-4 rounded-md"
              >
                Donate ${price}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <h2 className="text-[#0B0B0B] text-5xl font-bold w-11/12 mx-auto">
          {title}
        </h2>
        <p className="text-[#0B0B0BB2] text-sm w-11/12 mx-auto py-5">
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
