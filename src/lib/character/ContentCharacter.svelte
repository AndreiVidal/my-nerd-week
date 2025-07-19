<script lang="ts">
    import { marked } from "marked";

    export let character: any = null
</script>


{#if character}
<div
class="
grid md:grid-cols-2
w-full
gap-5
"
>
    <img src="{character.images}" alt="foto da obra"
    class="
    w-full
    md:max-h-[500px]
    object-contain
    rounded-4xl
    overflow-hidden
    p-5
    "
    >
    <article class="prose prose-sm md:prose-lg prose-invert
			bg-zinc-900/50 backdrop-blur-md
			rounded-xl shadow-lg p-4 mx-auto
			md:max-h-[500px] overflow-auto
			scrollbar-thin scrollbar-thumb-violet-600 scrollbar-track-violet-300/20
		">
        {@html marked.parse(character.description)}
    </article>
</div>
{/if}