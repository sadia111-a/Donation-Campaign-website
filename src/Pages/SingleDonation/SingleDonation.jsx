import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SingleDonationCard from "./SingleDonationCard";

const SingleDonation = () => {
  const [donation, setDonation] = useState({});
  const { id } = useParams();

  const donations = useLoaderData();
  useEffect(() => {
    const findDonation = donations.find((donation) => donation.id == id);
    setDonation(findDonation);
  }, [id, donations]);
  // console.log(donation);
  return (
    <div>
      <SingleDonationCard donation={donation}></SingleDonationCard>
    </div>
  );
};

export default SingleDonation;
