import { useEffect, useState } from "react";
import SingleDonationCard from "../SingleDonation/SingleDonationCard";
import DonationPageCard from "./DonationPageCard";

const DonationPage = () => {
  const [donation, setDonation] = useState([]);
  const [noFound, setNoFound] = useState(false);
  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donations"));
    if (donationItems) {
      setDonation(donationItems);
    } else {
      setNoFound("No Data Found");
    }
  }, []);
  console.log(donation);

  return (
    <div>
      {noFound ? (
        <p className="flex justify-center items-center h-[70vh]">{noFound}</p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            {donation.map((donation) => (
              <DonationPageCard
                key={donation.id}
                donation={donation}
              ></DonationPageCard>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DonationPage;
