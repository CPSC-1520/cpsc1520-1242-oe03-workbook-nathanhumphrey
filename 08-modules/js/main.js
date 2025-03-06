import { getTemps } from './utils.js';
import Chart from 'chart.js/auto';

(async () => {
  const temps = await getTemps();

  console.log(temps);

  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'bar',
      data: {
        labels: temps.map(row => row.month),
        datasets: [
          {
            label: 'Avg Monthly Temps for 2025',
            data: temps.map(row => row.temp),
          },
        ],
      },
    },
  );
})();
