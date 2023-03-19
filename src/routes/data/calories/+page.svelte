<script lang="ts">
	import type CaloriesInfo from '../../../types/CaloriesInfo';
	import * as Storage from '../../../utils/localStorage';
  import moment from "moment";

	$: caloriesList = Storage.getArray<CaloriesInfo>("calories");
  
	function save(event: any) {
    const calories = event.target.value as number;
    const index = event.target.dataset.index as number;
    const date  = event.target.dataset.datetime as Date;
    Storage.updateArray<CaloriesInfo>("calories", index, { calories, date });
  }

	function remove(event: any) {
    const index = event.target.dataset.index;
    Storage.removeFromArray("calories", index);
    caloriesList = [...Storage.getArray<CaloriesInfo>("calories")];
  }
</script>

{#if caloriesList.length > 0}
<table class="text-center border-spacing-x-4 border-spacing-y-3 border-separate">
  <thead>
    <th>Calories (kcal)</th>
    <th>Date</th>
    <th></th>
  </thead>
  <tbody>
    {#each caloriesList as data, index}
    <tr>
      <td>
        <input data-index={index} data-datetime={data.date} type="number" step="1" id="calories-input" aria-describedby="Calories input" value={data.calories} on:change={save} class="border text-sm rounded-lg block w-full p-2.5  bg-zinc-700 border-zinc-600 placeholder-zinc-400 text-white focus:ring-zinc-500 focus:border-zinc-500" placeholder="Calories (kcal)">
      </td>
      <td>
        <span>{moment(data.date).format("YYYY/MM/DD, hh:mm:ss")}</span>
      </td>
      <td>
        <button data-index={index} on:click={remove} class="focus:outline-none w-full text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 bg-zinc-600 hover:bg-zinc-700 focus:ring-zinc-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>          
        </button>
      </td>
    </tr>
    {/each}
  </tbody>
</table>
{:else}
<span>No data tracked yet.</span>
{/if}