<script lang="ts">
  import { page } from "$app/state";
  import MenuItem from "$lib/components/template/MenuItem.svelte";
  import { characters } from "$lib/data/character-tempest";
</script>
    <div class="grid grid-cols-2 md:grid-cols-6">
{#each characters as character}
  {#if page.params.id == character.group}
<div class="flex flex-col justify-center items-center">
    <img
      src={character.images}
      alt="personagem {character.name}"
      class="
   bg-amber-950
      rounded-full
      h-40
      w-30
      overflow-hidden
      "
    />
    
    <MenuItem
      href="/works/{page.params.id}/persons/{character.id}"
      name={character.name}
    />
</div>

  {/if}
{/each}
</div>