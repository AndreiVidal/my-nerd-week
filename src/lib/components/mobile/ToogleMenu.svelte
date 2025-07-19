<script lang="ts">
  import ButtonToogleMenu from "./ButtonToogleMenu.svelte";
  import Menu from "../template/Menu.svelte";
  import { scale } from "svelte/transition";
    import MenuItem from "../template/MenuItem.svelte";
   import { works } from "$lib/data/works";
  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
  }
</script>

<ButtonToogleMenu {isOpen} toggle={toggleMenu} />

{#if isOpen}
  <div
    role="button"
    tabindex="0"
    aria-label="Fechar menu e blur na tela "
    class="fixed inset-0 backdrop-blur-sm"
    on:click={toggleMenu}
    on:keydown={(e) => (e.key === "Enter" || e.key === " ") && toggleMenu()}
  >
    <nav
      class="flex flex-col gap-3
      absolute top-14 right-2 w-60 
      bg-fuchsia-950/30
      rounded-xl shadow-black p-3 z-40 md:hidden 
      border border-fuchsia-800"
      in:scale={{ duration: 300 }}
      out:scale={{ duration: 200 }}
    >
  <Menu title="Obras">
    <MenuItem href="/works/tensura" name="Tensura"/>
    <MenuItem href="/works/eminence" name="Eminence"/>
    <MenuItem href="/works/frieren" name="Frieren"/>
  </Menu>
    </nav>
  </div>
{/if}
