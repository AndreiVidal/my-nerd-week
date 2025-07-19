<script>
  import Logo from "./Logo.svelte";
  import ToogleMenu from "../mobile/ToogleMenu.svelte";
</script>

<header
  class="
    flex justify-between md:justify-center items-center
    h-20 md:h-24
    border-b-4 border-fuchsia-950/30
    px-4 md:px-10
    relative
"
>
  <Logo />
  <ToogleMenu />
</header>
