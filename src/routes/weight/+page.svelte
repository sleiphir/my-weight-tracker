<script lang="ts">
  import WeightInput from '../../lib/WeightInput.svelte';


  function goHome() {
    location.href = '/';
  }
</script>

<main>
  <WeightInput onSave={goHome} />
</main>