<script lang="ts">
	import * as Storage from '../../utils/localStorage';
	import { onMount } from 'svelte';
	import { Chart } from 'chart.js/auto';
	import moment from 'moment';
  import defaultSettings from '../../settings';
	import type { ChartConfiguration } from 'chart.js';
	import type WeightInfo from '../../types/WeightInfo';
	import type CaloriesInfo from '../../types/CaloriesInfo';
	import type Settings from '../../types/Settings';

	let chart: HTMLCanvasElement;
  const settings = Storage.get<Settings>("settings") ?? defaultSettings;
	const weightList = Storage.getArray<WeightInfo>('weight');
	const caloriesList = Storage.getArray<CaloriesInfo>('calories');
  const dailyWeight = weightList.map(data => { return { weight: data.weight, date: moment(data.date).format('YYYY/MM/DD HH:mm') } });
  const dailyCalories = caloriesList.map(data => { return { calories: data.calories, date: moment(data.date).format('YYYY/MM/DD HH:mm') } });
	const averageCalories = dailyCalories.reduce((acc, val) => acc += val.calories, 0) / dailyCalories.length;
	const weightDiff = dailyWeight[dailyWeight.length - 1].weight - dailyWeight[0].weight;
  const dates = Array.from(new Set(dailyWeight.map(e => e.date).concat(dailyCalories.map(e => e.date)).sort()));
  const weightChartArray = [];
  const caloriesChartArray = [];
  let weightIndex = 0;
  let caloriesIndex = 0;

  for(let i = 0; i < dates.length; i++) {
    if (weightIndex >= dailyWeight.length || dailyWeight[weightIndex].date != dates[i]) {
      weightChartArray.push(null);
    } else {
      weightChartArray.push(dailyWeight[weightIndex].weight);
      weightIndex++;
    }
    if (caloriesIndex >= dailyCalories.length || dailyCalories[caloriesIndex].date != dates[i]) {
      caloriesChartArray.push(null);
    } else {
      caloriesChartArray.push(dailyCalories[caloriesIndex].calories);
      caloriesIndex++;
    }
  }

	const data = {
		labels: dates,
		datasets: [
			{
				label: 'Weight',
				data: weightChartArray,
				backgroundColor: ['#7000e1'],
        borderColor: ['#7000e1'],
				spanGaps: true,
        tension: 0.4,
        yAxisID: 'weight',
			},
			{
				label: 'Calories',
				data: caloriesChartArray,
				backgroundColor: ['#fc8800'],
        borderColor: ['#fc8800'],
        tension: 0.4,
        spanGaps: true,
        yAxisID: 'calories',
			}
		]
	};

	const config: ChartConfiguration = {
		type: 'line',
		data: data,
		options: {
      scales: {
				weight: {
          min: settings.chart.min_weight,
          max: settings.chart.max_weight,
          type: 'linear',
          position: 'left'
        },
        calories: {
          min: settings.chart.min_calories,
          max: settings.chart.max_calories,
          type: 'linear',
          position: 'right'
        }
			},
			plugins: {
				legend: {
					position: 'bottom',
					display: true,
					labels: {
						usePointStyle: true,
						padding: 20,
						font: {
							size: 14
						}
					}
				},
				title: {
					display: true,
					text: 'Weight & Calories'
				}
			}
		}
	};
	onMount(() => {
		const ctx = chart.getContext('2d');
		if (!ctx) {
			throw new Error("Could not get context from chart object");
		}
		new Chart(ctx, config);
	});
</script>

<table class="border-separate border-spacing-x-2 text-zinc-300">
	<tbody>
		<tr>
			<td class="text-right">calories / day</td>
			<td class="font-bold">{Math.round(averageCalories)} Kcal</td>
		</tr>
		<tr>
			<td class="text-right">Weight evolution</td>
			<td class="font-bold">{weightDiff.toFixed(2)} Kg</td>
		</tr>
	</tbody>
</table>
<div class="flex align-center justify-center w-full h-[calc(100vh-3.25rem)]">
	<canvas bind:this={chart} height='100%' width='100%' />
</div>
