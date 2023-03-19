<script lang="ts">
	import defaultSettings from "../../settings";
	import type Settings from "../../types/Settings";
  import * as Storage from "../../utils/localStorage";

  let settings = Storage.get<Settings>("settings") ?? defaultSettings;
  Storage.set("settings", settings);

  function save()
  {
    Storage.set("settings", settings);
    location.href = "/";
  }
</script>

<form class="flex flex-col" on:submit|preventDefault={save}>
  <label for="helper-text" class="block text-sm font-medium">Chart min calories</label>
  <div class="inline-flex mt-2 rounded-md shadow-sm items-center justify-center text-center">
    <input type="number" step="1" name="input-min-calories" id="input-min-calories" bind:value={settings.chart.min_calories} class="z-10 border text-sm rounded-l-lg focus:ring-zinc-500 block p-2.5  bg-zinc-700 border-zinc-600 placeholder-zinc-400 text-white focus:border-zinc-500" placeholder="0">
    <div class="w-16 border text-sm rounded-r-lg block p-2.5 bg-zinc-700 border-zinc-600 placeholder-zinc-400 text-white focus:ring-zinc-500 focus:border-zinc-500">
      <span>kcal</span>
    </div>
  </div>
  <label for="helper-text" class="block mt-2 text-sm font-medium">Chart max calories</label>
  <div class="inline-flex mt-2 rounded-md shadow-sm items-center justify-center text-center">
    <input type="number" step="1" name="input-min-calories" id="input-min-calories" bind:value={settings.chart.max_calories} class="z-10 border text-sm rounded-l-lg focus:ring-zinc-500 block p-2.5  bg-zinc-700 border-zinc-600 placeholder-zinc-400 text-white focus:border-zinc-500" placeholder="0">
    <div class="w-16 border text-sm rounded-r-lg block p-2.5 bg-zinc-700 border-zinc-600 placeholder-zinc-400 text-white focus:ring-zinc-500 focus:border-zinc-500">
      <span>kcal</span>
    </div>
  </div>
  <label for="helper-text" class="block mt-2 text-sm font-medium">Chart min weight</label>
  <div class="inline-flex mt-2 rounded-md shadow-sm items-center justify-center text-center">
    <input type="number" step="1" name="input-min-calories" id="input-min-calories" bind:value={settings.chart.min_weight} class="z-10 border text-sm rounded-l-lg focus:ring-zinc-500 block p-2.5  bg-zinc-700 border-zinc-600 placeholder-zinc-400 text-white focus:border-zinc-500" placeholder="0">
    <div class="w-16 border text-sm rounded-r-lg block p-2.5 bg-zinc-700 border-zinc-600 placeholder-zinc-400 text-white focus:ring-zinc-500 focus:border-zinc-500">
      <span>Kg</span>
    </div>
  </div>
  <label for="helper-text" class="block mt-2 text-sm font-medium">Chart max weight</label>
  <div class="inline-flex mt-2 rounded-md shadow-sm items-center justify-center text-center">
    <input type="number" step="1" name="input-min-calories" id="input-min-calories" bind:value={settings.chart.max_weight} class="z-10 border text-sm rounded-l-lg focus:ring-zinc-500 block p-2.5  bg-zinc-700 border-zinc-600 placeholder-zinc-400 text-white focus:border-zinc-500" placeholder="0">
    <div class="w-16 border text-sm rounded-r-lg block p-2.5 bg-zinc-700 border-zinc-600 placeholder-zinc-400 text-white focus:ring-zinc-500 focus:border-zinc-500">
      <span>Kg</span>
    </div>
  </div>
  <button type="submit" class="focus:outline-none mt-4 text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 bg-zinc-600 hover:bg-zinc-700 focus:ring-zinc-900">
    Save
  </button>
</form>