import { Chart } from "react-google-charts";

const Statistics = () => {
  const donationItems = JSON.parse(localStorage.getItem("donations"));

  const totalDonations = 12;

  const yourDonations = donationItems ? donationItems.length : 0;
  const yourDonationsPercentage = (yourDonations / totalDonations) * 100;
  const totalDonationsPercentage = 100 - yourDonationsPercentage;

  // Define data for the pie chart
  const pieChartData = [
    ["Donations", "Percentage"],
    ["Your Donations", yourDonationsPercentage],
    ["Total Donations", totalDonationsPercentage],
  ];
  const colors = ["#00C49F", "#FF444A"];

  // Conditionally render based on the presence of donation items
  if (donationItems && donationItems.length > 0) {
    return (
      <div className="text-xl font-semibold" style={{ textAlign: "center" }}>
        <h1 className="text-xl font-semibold">Donations Statistics</h1>
        <Chart
          width={"100%"}
          height={"400px"}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={pieChartData}
          options={{
            pieHole: 0,
            colors: colors,
            pieSliceText: "percentage",
            legend: { position: "bottom" },
          }}
        />
      </div>
    );
  } else {
    return (
      <div className="flex text-orange-500 justify-center items-center text-2xl font-semibold h-[70vh]">
        No Statistics data found !
      </div>
    );
  }
};

export default Statistics;
