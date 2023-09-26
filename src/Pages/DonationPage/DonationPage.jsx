import { useEffect, useState } from "react";
import SingleDonationCard from "../SingleDonation/SingleDonationCard";
import DonationPageCard from "./DonationPageCard";

const DonationPage = () => {
  const [donation, setDonation] = useState([]);
  const [noFound, setNoFound] = useState(false);
  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donations"));
    if (donationItems) {
      setDonation(donationItems);
    } else {
      setNoFound("You have not made any Donations yet !!!");
    }
  }, []);
  console.log(donation);
  console.log(isShow);

  return (
    <div>
      {noFound ? (
        <p className="text-2xl font-semibold text-green-500 flex justify-center items-center h-[70vh]">
          {noFound}
        </p>
      ) : (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
            {isShow
              ? donation.map((donation) => (
                  <DonationPageCard
                    key={donation.id}
                    donation={donation}
                  ></DonationPageCard>
                ))
              : donation
                  .slice(0, 4)
                  .map((donation) => (
                    <DonationPageCard
                      key={donation.id}
                      donation={donation}
                    ></DonationPageCard>
                  ))}
          </div>
          {donation.length > 4 && !isShow && (
            <button
              onClick={() => setIsShow(true)}
              className="text-white px-6 block mx-auto mt-8 py-3 mb-10 text-lg font-semibold bg-[#009444] rounded-lg"
            >
              See All
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default DonationPage;
