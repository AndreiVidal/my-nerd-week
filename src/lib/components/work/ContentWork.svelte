<script lang="ts">
    import { marked } from "marked";
    import MenuItem from "../template/MenuItem.svelte";

    export let work: any = null
</script>


{#if work}
<div
class="
flex flex-col
gap-5
"
>
<nav class="flex">
    <MenuItem href="/" name="Inicio" />
    <MenuItem href="./tensura/persons/" name="Personagens" />
</nav>
    <img src="{work.image}" alt="foto da obra"
    class="
    md:h-96
    rounded-md
    mx-2.5
    "
    >
    <article class="prose prose-sm md:prose-lg prose-invert mx-4">
        {@html marked.parse(work.description)}
    </article>
</div>
{/if}