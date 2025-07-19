<script>
  import Aside from "./Aside.svelte";
  import Footer from "./Footer.svelte";
  import Header from "./Header.svelte";
  import { page } from "$app/state"
</script>

<div
  class="flex flex-col
 min-h-screen
 bg-gradient-to-tr from-violet-500 via-purple-700 to-fuchsia-950 text-amber-50
 "
>
  <div 
  >
    <main>
      <slot />
    </main>
  </div>

</div>
