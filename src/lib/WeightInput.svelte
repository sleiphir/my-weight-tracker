<script lang="ts">
	import type WeightInfo from '../types/WeightInfo';
  import * as Storage from '../utils/localStorage';

  export let onSave: (weight: number) => void;

  const data = Storage.get<WeightInfo>("weight");
  let weight: number = data[data.length - 1]?.weight ?? null;

  function save() {
    const date = new Date();
    Storage.push<WeightInfo>("weight", { weight, date })
    onSave(weight);
  }
</script>

<form class="flex flex-col" on:submit|preventDefault={save}>
  <label for="helper-text" class="block mb-2 text-sm font-medium">Your weight today</label>
  <div class="inline-flex mt-2 rounded-md shadow-sm items-center justify-center text-center">
    <input type="number" step="0.1" name="input-weight" id="input-weight" bind:value={weight} class="z-10 border text-sm rounded-l-lg focus:ring-zinc-500 block p-2.5  bg-zinc-700 border-zinc-600 placeholder-zinc-400 text-white focus:border-zinc-500" placeholder="0.00">
    <div class="w-16 border text-sm rounded-r-lg block p-2.5 bg-zinc-700 border-zinc-600 placeholder-zinc-400 text-white focus:ring-zinc-500 focus:border-zinc-500">
      <span>Kg</span>
    </div>
  </div>
  <button type="submit" class="focus:outline-none mt-2 text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 bg-zinc-600 hover:bg-zinc-700 focus:ring-zinc-900">
    Save
  </button>
</form>
