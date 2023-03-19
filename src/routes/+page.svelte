<script lang="ts">
	import defaultSettings from "../settings";
	import type Settings from "../types/Settings";
  import * as Storage from "../utils/localStorage";

  const functions: {name: string, link: string}[] = [
    { name: "Weight Tracking", link: "/weight" },
    { name: "Calories Tracking", link: "/calories" },
    { name: "Data management", link: '/data' },
    { name: "Statistics", link: '/stats' },
    { name: "Settings", link: '/settings' },
  ]
</script>

<ul>
  {#each functions as f}
    <li>
      <a class="text-lg text-center px-6 py-4 my-4 w-full block bg-zinc-700 rounded-lg shadow-md cursor-pointer active:shadow-none active:bg-zinc-600" href="{f.link}">{f.name}</a>
    </li>
  {/each}
</ul>


<style lang="postcss">
  :global(html) {
    background-color: theme(colors.zinc.900);
    color: theme(colors.white)
  }
</style>