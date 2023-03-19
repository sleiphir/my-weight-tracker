<script lang="ts">
  const functions: {name: string, link: string}[] = [
    { name: "Weight", link: "/data/weight" },
    { name: "Calories", link: "/data/calories" },
  ]
</script>

<ul>
  {#each functions as f}
    <li>
      <a class="text-lg text-center px-6 py-4 my-4 w-full block bg-zinc-700 rounded-lg shadow-md cursor-pointer active:shadow-none active:bg-zinc-600" href="{f.link}">{f.name}</a>
    </li>
  {/each}
</ul>