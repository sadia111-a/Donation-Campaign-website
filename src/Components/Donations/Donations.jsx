import DonationsCard from "./DonationsCard";
import PropTypes from "prop-types";

const Donations = ({ donations }) => {
  // console.log(donations);
  return (
    <div className="py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-4 gap-3">
        {donations.map((donation) => (
          <DonationsCard key={donation.id} donation={donation}></DonationsCard>
        ))}
      </div>
    </div>
  );
};
Donations.propTypes = {
  donations: PropTypes.array.isRequired,
};
export default Donations;
