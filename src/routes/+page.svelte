<script lang="ts">
	import { browser } from '$app/environment';
	import type CaloriesInfo from '../types/CaloriesInfo';
	import type WeightInfo from '../types/WeightInfo';
	import * as Storage from '../utils/localStorage';

	const functions: { name: string; link: string }[] = [
		{ name: 'Weight Tracking', link: '/weight' },
		{ name: 'Calories Tracking', link: '/calories' },
		{ name: 'Data management', link: '/data' },
		{ name: 'Statistics', link: '/stats' },
		{ name: 'Settings', link: '/settings' }
	];

	// Transform strings in local storage to numbers
	if (browser) {
		let weightList = Storage.getArray<WeightInfo>('weight').map(elem => { return { weight: parseFloat(elem.weight.toString()), date: elem.date }});
		let caloriesList = Storage.getArray<CaloriesInfo>('calories').map(elem => { return { calories: parseInt(elem.calories.toString()), date: elem.date }});
		Storage.set<WeightInfo[]>("weight", weightList);
		Storage.set<CaloriesInfo[]>("calories", caloriesList);
	}
	
</script>

<ul>
	{#each functions as f}
		<li>
			<a
				class="text-lg text-center px-6 py-4 my-4 w-full block bg-zinc-700 rounded-lg shadow-md cursor-pointer active:shadow-none active:bg-zinc-600"
				href={f.link}>{f.name}</a
			>
		</li>
	{/each}
</ul>

<style lang="postcss">
	:global(html) {
		background-color: theme(colors.zinc.900);
		color: theme(colors.white);
	}
</style>
