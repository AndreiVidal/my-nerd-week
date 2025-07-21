<script lang="ts">
  import { marked } from "marked";

  export let character: any = null;
</script>

{#if character}
  <div
    class="
      flex flex-col
      px-5
      "
  >
    <nav class="flex gap-2.5">
      <a href="/" class="btn">Inicio</a>
      <a href="/" class="btn">Habilidades</a>
    </nav>
  </div>
  <div
    class="grid md:grid-cols-2
      justify-center items-start"
  >
    <img
      src={character.images}
      alt="foto da obra"
      class="
        w-full
        md:max-h-[720px]
        object-cover
        rounded-4xl
        overflow-hidden
        p-5
        "/>
    <article
      class="prose prose-sm md:prose-lg prose-invert
        bg-zinc-900/50 backdrop-blur-md
        rounded-xl shadow-lg p-5 my-4 mx-2
        md:max-h-[720px] overflow-auto
        scrollbar-thin scrollbar-thumb-violet-600 scrollbar-track-violet-300/20
    "
    >
      {@html marked.parse(character.description)}
    </article>
  </div>
{/if}
