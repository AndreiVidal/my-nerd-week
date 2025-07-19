<script>
  import Title from "$lib/components/template/Title.svelte";
import MenuItem from "../lib/components/template/MenuItem.svelte";
</script>

<Title title="My Nerd Wiki" subTitle="Principais obras"  />
<ul
  class="
    flex
    "
>
  <MenuItem href="/works/tensura" name="Tensura" />
  <MenuItem href="/works/eminence" name="Eminence" />
  <MenuItem href="/works/frieren" name="Frieren" />
</ul>
