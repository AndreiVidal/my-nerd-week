<script>
  import Aside from "./Aside.svelte";
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";
  import { page } from "$app/state"
</script>

<div
  class="flex flex-col
 min-h-screen
 gap-3
 bg-gradient-to-tr from-violet-500 via-purple-700 to-fuchsia-950 text-amber-50
 "
>
  <Header />
  <div class="flex flex-1 gap-5 max-w-7xl mx-auto w-full p-1.5">
    <main class="flex-1">
      <slot></slot>
    </main>
    {#if !page.url.pathname.endsWith('persons') } 
    <Aside />
    {/if}
  </div>

  <Footer />
</div>
