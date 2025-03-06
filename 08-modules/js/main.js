import Chart from 'chart.js/auto';
import { getTemps } from './utils.js';
import 'bootstrap/dist/css/bootstrap.min.css';

(async () => {
  const temps = await getTemps();

  console.log(temps);

  new Chart(
    document.querySelector('.chart'),
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
