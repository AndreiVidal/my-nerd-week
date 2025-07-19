<script lang="ts">
    import { marked } from "marked";

    export let character: any = null
</script>


{#if character}
<div
class="
flex flex-col
gap-5
"
>
    <img src="{character.images}" alt="foto da obra"
    class="j
    md:h-96
    object-contain
    overflow-hidden
    rounded-md
    mx-2.5
    "
    >
    <article class="prose prose-sm md:prose-lg prose-invert mx-4">
        {@html marked.parse(character.description)}
    </article>
</div>
{/if}