<script lang="ts">
    import { works } from "$lib/data/works";
  import Menu from "./Menu.svelte";
    import MenuItem from "./MenuItem.svelte";
</script>

<aside
  aria-label="Barra lateral"
  class="
    hidden md:flex flex-col
    self-start
    border-4 border-fuchsia-950/30 rounded-md
    gap-5
    w-96
    p-5
"
>
  <Menu title="Obras">
    {#each works as work }
    <MenuItem href="/works/{work.id}" name={work.title}/>
    {/each}
  </Menu>
</aside>
