<script lang="ts">
	import type CaloriesInfo from '../types/CaloriesInfo';
  import * as Storage from '../utils/localStorage';

  export let onSave: (calories: number) => void;

  const data = Storage.get<CaloriesInfo>("calories");
  let calories: number = data[data.length - 1]?.calories ?? null;

  function save() {
    const date = new Date();
    Storage.push<CaloriesInfo>("calories", { calories, date })
    onSave(calories);
  }
</script>

<form class="flex flex-col" on:submit|preventDefault={save}>
  <label for="helper-text" class="block mb-2 text-sm font-medium">Your calories today</label>
  <div class="inline-flex mt-2 rounded-md shadow-sm items-center justify-center text-center">
    <input type="number" step="1" name="input-calories" id="input-calories" bind:value={calories} class="z-10 border text-sm rounded-l-lg focus:ring-zinc-500 block p-2.5  bg-zinc-700 border-zinc-600 placeholder-zinc-400 text-white focus:border-zinc-500" placeholder="0">
    <div class="w-16 border text-sm rounded-r-lg block p-2.5 bg-zinc-700 border-zinc-600 placeholder-zinc-400 text-white focus:ring-zinc-500 focus:border-zinc-500">
      <span>kcal</span>
    </div>
  </div>
  <button type="submit" class="focus:outline-none mt-2 text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 bg-zinc-600 hover:bg-zinc-700 focus:ring-zinc-900">
    Save
  </button>
</form>
