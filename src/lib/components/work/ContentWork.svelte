<script lang="ts">
    import { marked } from "marked";
    export let work: any = null
</script>


{#if work}
<div
class="
flex flex-col
justify-center
items-center
gap-5
"
>
<section class="flex flex-col items-start justify-center gap-2 p-2 border border-violet-950 rounded-md">
    <img src="{work.image}" alt="foto da obra"
    class="
    md:h-96
    rounded-md
    "
    >
    <nav class="flex">
        <a href="/works/{work.id}/persons/" class="btn">Personagens </a>
    </nav>
</section>
    <article class="prose prose-sm md:prose-lg prose-invert mx-4">
        {@html marked.parse(work.description)}
    </article>
</div>
{/if}