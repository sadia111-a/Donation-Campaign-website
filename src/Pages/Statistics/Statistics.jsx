import { Chart } from "react-google-charts";

const Statistics = () => {
  const donationItems = JSON.parse(localStorage.getItem("donations"));

  // Calculate the total number of donations and your donations
  const totalDonations = 12;
  const yourDonations = donationItems.length; // Replace with your actual number of donations

  // Calculate the percentage of your donations
  const percentage = (yourDonations / totalDonations) * 100;

  // Define data for the pie chart
  const pieChartData = [
    ["Donations", "Percentage"],
    ["Your Donations", percentage],
    ["Total Donations", 100 - percentage],
  ];
  const colors = ["#00C49F", "#FF444A"];
  return (
    <div>
      <div></div>
      <Chart
        width={"100%"}
        height={"500px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={pieChartData}
        options={{
          title: "Donations Statistics",
          pieHole: 0,
          colors: colors,
        }}
      />
    </div>
  );
};

export default Statistics;
