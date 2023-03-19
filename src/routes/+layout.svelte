<script>
  import "../app.css";
  import { onMount } from 'svelte'
  import { pwaInfo } from 'virtual:pwa-info'

  onMount(async () => {
    if (pwaInfo) {
      const { registerSW } = await import('virtual:pwa-register')
      registerSW({
        immediate: true,
        onRegistered(r) {
          // uncomment following code if you want check for updates
          // r && setInterval(() => {
          //    console.log('Checking for sw update')
          //    r.update()
          // }, 20000 /* 20s for testing purposes */)
          console.log(`SW Registered: ${r}`)
        },
        onRegisterError(error) {
          console.log('SW registration error', error)
        }
      })
    }
  })
  
  $: webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : ''

  console.log(pwaInfo)
</script>

<svelte:head>
    {@html webManifest}
</svelte:head>

<main class="flex flex-col justify-center items-center h-screen w-screen">
  <slot />
</main>
