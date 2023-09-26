import { Chart } from "react-google-charts";

const Statistics = () => {
  const donationItems = JSON.parse(localStorage.getItem("donations"));

  // Calculate the total number of donations and your donations
  const totalDonations = donationItems.length;
  const yourDonations = 1; // Replace with your actual number of donations

  // Calculate the percentage of your donations
  const percentage = (yourDonations / totalDonations) * 100;

  // Define data for the pie chart
  const pieChartData = [
    ["Donations", "Percentage"],
    ["Your Donations", percentage],
    ["Other Donations", 100 - percentage],
  ];

  return (
    <div>
      <div>This is the statistics page</div>
      <Chart
        width={"100%"}
        height={"300px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={pieChartData}
        options={{
          title: "Donations Statistics",
          pieHole: 0.4,
        }}
      />
    </div>
  );
};

export default Statistics;
