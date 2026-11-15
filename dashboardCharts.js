//  ---------- Theme ----------
const C = getComputedStyle(document.body);
const col = (n) => C.getPropertyValue("--" + n).trim();
Chart.defaults.font.family = '"Poppins", system-ui, sans-serif';
Chart.defaults.color = col("card-revenue-muted");
Chart.defaults.plugins.legend.position = "bottom";
Chart.defaults.plugins.legend.align = "start";
Chart.defaults.plugins.legend.labels.usePointStyle = true;
Chart.defaults.plugins.legend.labels.boxWidth = 8;
Chart.defaults.plugins.tooltip.backgroundColor = "#0f2630";
Chart.defaults.plugins.tooltip.padding = 10;
Chart.defaults.plugins.tooltip.cornerRadius = 8;

const naira = (v) => "\u20A6" + Number(v).toLocaleString();

// /* Shared scale style: faint horizontal lines, no axis border, no ticks */
const quietScales = {
  x: {
    grid: { display: false },
    border: { display: false },
    ticks: { display: false },
  },
  y: {
    grid: { color: col("card-revenue-line") },
    border: { display: false },
    ticks: { display: false },
  },
};

// /* ---------- Hardcoded data (swap for API data later) ---------- */
const DATA = {
  ordersPage: {
    labels: ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"],
    thisWeek: [1000, 1230, 970, 1404],
  },
  revenue: {
    week: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      thisWeek: [320000, 520000, 430000, 470000, 780000, 910000, 820000],
      lastWeek: [200000, 280000, 330000, 300000, 360000, 340000, 380000],
    },
    month: {
      labels: ["W1", "W2", "W3", "W4"],
      thisMonth: [2400000, 3100000, 2800000, 3900000],
      lastMonth: [2000000, 2500000, 2600000, 3000000],
    },
    lastthreemonth: {
      labels: ["M1", "M2", "M3"],
      thisQuater: [2400000, 3100000, 2800000],
      lastQuater: [2000000, 2500000, 2600000],
    },
    lastsixmonth: {
      labels: ["M1", "M2", "M3", "M4", "M5", "M6"],
      thisHalf: [2400000, 3100000, 2800000, 3900000, 4200000, 5600000],
      lastHalf: [2000000, 2500000, 2600000, 3000000, 2600000, 3000000],
    },
    year: {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      thisYear: [
        43105822, 56434414, 58456905, 61924713, 74979419, 82911206, 85412533,
        89423746, 89705370, 89764611, 92471301, 97678443,
      ],
      lastYear: [
        44784483, 82705155, 60818284, 55399116, 61622081, 87839568, 58479587,
        44880633, 77021453, 69979566, 91119020, 67898451,
      ],
    },
  },
  orders: {
    week: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
      pending: [22, 30, 44, 26, 31],
      delivered: [38, 24, 32, 40, 18],
      returned: [12, 34, 20, 28, 46],
    },
    month: {
      labels: ["W1", "W2", "W3", "W4"],
      pending: [90, 110, 95, 120],
      delivered: [150, 140, 170, 160],
      returned: [30, 25, 40, 35],
    },
  },
  drinks: { labels: ["High", "Low", "Out"], values: [72, 44, 14] },
  topDrinks: [
    { name: "Heineken", pct: 82, color: "chart-top-drinks-1" },
    { name: "Trophy", pct: 64, color: "chart-top-drinks-2" },
    { name: "Hero", pct: 47, color: "chart-top-drinks-3" },
    { name: "Goldberg", pct: 31, color: "chart-top-drinks-4" },
  ],
  lowStock: [
    {
      name: "Castle Lite",
      amt: 10,
      color: "tag-low-stock-text",
      bg: "tag-low-stock-bg",
    },
    {
      name: "Star",
      amt: 13,
      color: "tag-low-stock-text",
      bg: "tag-low-stock-bg",
    },
    { name: "Desperados", amt: 2, color: "tag-out-text", bg: "tag-out-bg" },
    { name: "Tiger", amt: 1, color: "tag-out-text", bg: "tag-out-bg" },
    { name: "Castle Lite", amt: 0, color: "tag-out-text", bg: "tag-out-bg" },
  ],
};

// /* ---------- Revenue: smooth line ---------- */
const revenueChart = new Chart(document.getElementById("revenueChart"), {
  type: "line",
  data: {
    labels: DATA.revenue.week.labels,
    datasets: [
      {
        label: "This week",
        data: DATA.revenue.week.thisWeek,
        borderColor: col("chart-revenue-line-1"),
        tension: 0.45,
        pointRadius: 0,
        borderWidth: 3,
      },
      {
        label: "Last week",
        data: DATA.revenue.week.lastWeek,
        borderColor: col("chart-revenue-line-2"),
        tension: 0.45,
        pointRadius: 0,
        borderWidth: 3,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: "index", intersect: false },
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: { display: false },
      },
      y: {
        grid: { color: col("card-revenue-line") },
        border: { display: false },
        ticks: { display: false },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (c) => c.dataset.label + ": " + naira(c.parsed.y),
        },
      },
      legend: { labels: { pointStyle: "circle" } },
    },
  },
});

// /* ---------- Orders Overview: grouped, rounded bars ---------- */
const bar = (label, data, color) => ({
  label,
  data,
  backgroundColor: color,
  borderRadius: 8,
  borderSkipped: false,
  barPercentage: 0.8,
  categoryPercentage: 0.7,
});
const ordersChart = new Chart(document.getElementById("ordersChart"), {
  type: "bar",
  data: {
    labels: DATA.orders.week.labels,
    datasets: [
      bar("Pending", DATA.orders.week.pending, col("chart-orders-bar-1")),
      bar("Delivered", DATA.orders.week.delivered, col("chart-orders-bar-2")),
      bar("Returned", DATA.orders.week.returned, col("chart-orders-bar-3")),
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: { display: false },
      },
      y: {
        grid: { color: col("card-orders-line") },
        border: { display: false },
        ticks: { display: false },
      },
    },
    plugins: {
      legend: {
        labels: {
          pointStyle: "circle",
          color: col("card-orders-muted"),
        },
      },
    },
  },
});

// /* ---------- Top Category: grouped, rounded bars ---------- */

const topCategoryChart = new Chart(
  document.getElementById("topCategoryChart"),
  {
    type: "bar",
    data: {
      labels: DATA.orders.week.labels,
      datasets: [
        bar("Pending", DATA.orders.week.pending, col("chart-orders-bar-1")),
        bar("Delivered", DATA.orders.week.delivered, col("chart-orders-bar-2")),
        bar("Returned", DATA.orders.week.returned, col("chart-orders-bar-3")),
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          grid: { display: false },
          border: { display: false },
          ticks: { display: false },
        },
        y: {
          grid: { color: col("card-orders-line") },
          border: { display: false },
          ticks: { display: false },
        },
      },
      plugins: {
        legend: {
          labels: {
            pointStyle: "circle",
            color: col("card-orders-muted"),
          },
        },
      },
    },
  },
);

// /* ---------- Top Brand: smooth line ---------- */
const topBrandChart = new Chart(document.getElementById("topBrandChart"), {
  type: "line",
  data: {
    labels: DATA.revenue.week.labels,
    datasets: [
      {
        label: "This week",
        data: DATA.revenue.week.thisWeek,
        borderColor: col("chart-revenue-line-1"),
        tension: 0.45,
        pointRadius: 0,
        borderWidth: 3,
      },
      {
        label: "Last week",
        data: DATA.revenue.week.lastWeek,
        borderColor: col("chart-revenue-line-2"),
        tension: 0.45,
        pointRadius: 0,
        borderWidth: 3,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    interaction: { mode: "index", intersect: false },
    scales: {
      x: {
        grid: { display: false },
        border: { display: false },
        ticks: { display: false },
      },
      y: {
        grid: { color: col("card-revenue-line") },
        border: { display: false },
        ticks: { display: false },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: (c) => c.dataset.label + ": " + naira(c.parsed.y),
        },
      },
      legend: { labels: { pointStyle: "circle" } },
    },
  },
});

// /* ---------- Drinks Availability: doughnut ---------- */
const drinksChart = new Chart(document.getElementById("drinksChart"), {
  type: "doughnut",
  data: {
    labels: DATA.drinks.labels,
    datasets: [
      {
        data: DATA.drinks.values,
        backgroundColor: [
          col("status-high"),
          col("status-low"),
          col("status-out"),
        ],
        borderWidth: 0,
        spacing: 2,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "58%",
    plugins: {
      legend: { align: "center", labels: { pointStyle: "line" } },
    },
  },
});

// document.getElementById("drinkTotal").textContent = DATA.drinks.values.reduce(
//   (a, b) => a + b,
//   0,
// );

// // /* ---------- Top Drinks: plain CSS progress bars (no Chart.js needed) ---------- */
document.getElementById("top-drink-card").innerHTML = DATA.topDrinks
  .map(
    (d) => `
  <div class="tp-track">
        <div class="tp-track-head">
            <span>${d.name}</span>
            <span>${d.pct}%</span>
        </div>
        <div class="tp-trackarea">
            <div class="track-length" style="width:${d.pct}%;background:${col(d.color)}"></div>
        </div>
    </div>`,
  )
  .join("");

document.getElementById("low-stock-card").innerHTML = DATA.lowStock
  .map(
    (d) => `
                        <div class="ls-card-cnt">
                                <span>${d.name}</span>
                                <span style="background-color:${col(d.bg)}; color:${col(d.color)};">${d.amt} Crates</span>
                        </div>`,
  )
  .join("");

// // /* ---------- "This Week" dropdowns ---------- */
document.getElementById("revenue-select").addEventListener("change", (e) => {
  const d = DATA.revenue[e.target.value];
  revenueChart.data.labels = d.labels;
  revenueChart.data.datasets[0].data = d.thisWeek;
  revenueChart.data.datasets[1].data = d.lastWeek;

  if (e.target.value == "month") {
    revenueChart.data.datasets[0].data = d.thisMonth;
    revenueChart.data.datasets[0].label = "This Month";
    revenueChart.data.datasets[1].data = d.lastMonth;
    revenueChart.data.datasets[1].label = "Last Month";
  }

  if (e.target.value == "lastthreemonth") {
    revenueChart.data.datasets[0].data = d.thisQuater;
    revenueChart.data.datasets[0].label = "This Quater";
    revenueChart.data.datasets[1].data = d.lastQuater;
    revenueChart.data.datasets[1].label = "Last Quater";
  }

  if (e.target.value == "lastsixmonth") {
    revenueChart.data.datasets[0].data = d.thisHalf;
    revenueChart.data.datasets[0].label = "This Half";
    revenueChart.data.datasets[1].data = d.lastHalf;
    revenueChart.data.datasets[1].label = "Last Half";
  }

  if (document.getElementById("revenue-select").value == "year") {
    revenueChart.data.datasets[0].data = d.thisYear;
    revenueChart.data.datasets[0].label = "This Year";
    revenueChart.data.datasets[1].data = d.lastYear;
    revenueChart.data.datasets[1].label = "Last Year";
  }
  revenueChart.update();
});

// document.getElementById("ordRange").addEventListener("change", (e) => {
//   const d = DATA.orders[e.target.value];
//   ordersChart.data.labels = d.labels;
//   ordersChart.data.datasets[0].data = d.pending;
//   ordersChart.data.datasets[1].data = d.delivered;
//   ordersChart.data.datasets[2].data = d.returned;
//   ordersChart.update();
// });

//    When your backend exists, call this instead of using DATA.
//    It expects JSON like: { labels:[...], thisWeek:[...], lastWeek:[...] }
//    and falls back to the hardcoded data if the request fails.

// async function loadRevenue(range) {
//   try {
//     const res = await fetch("/api/revenue?range=" + range);   // your endpoint
//     if (!res.ok) throw new Error("HTTP " + res.status);
//     return await res.json();
//   } catch (err) {
//     console.warn("API failed, using sample data:", err);
//     return DATA.revenue[range];
//   }
// }

// ORDER PAGES
// /* ---------- Order page chart: smooth line ---------- */
const ordersPageChart = new Chart(
  document.getElementById("orders-page-chart"),
  {
    type: "line",
    data: {
      labels: DATA.ordersPage.labels,
      datasets: [
        {
          label: "This week",
          data: DATA.ordersPage.thisWeek,
          borderColor: col("chart-revenue-line-1"),
          tension: 0.45,
          pointRadius: 0,
          borderWidth: 3,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: "index", intersect: false },
      scales: {
        x: {
          grid: { display: false },
          border: { display: false },
          ticks: { display: true, color: col("card-orders-text") },
        },
        y: {
          grid: { color: col("card-revenue-line") },
          border: { display: true, color: col("card-revenue-line")},
          ticks: { display: false },
        },
      },
      plugins: {
        tooltip: {
          callbacks: {
            label: (c) => c.raw + " Orders",
          },
        },
        legend: {
          labels: { pointStyle: "circle", color: col("card-orders-text") },
        },
      },
    },
  },
);
