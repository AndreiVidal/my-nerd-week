<script>
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
    w-72
    p-5
"
>
  <Menu title="Obras">
    <MenuItem href="/works/tensura" name="Tensura"/>
    <MenuItem href="/works/eminence" name="Eminence"/>
    <MenuItem href="/works/frieren" name="Frieren"/>
  </Menu>
</aside>
