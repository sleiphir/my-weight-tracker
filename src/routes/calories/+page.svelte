<script lang="ts">
  import CaloriesInput from '../../lib/CaloriesInput.svelte';

  function goHome() {
    location.href = '/';
  }
</script>

<main>
  <CaloriesInput onSave={goHome} />
</main>