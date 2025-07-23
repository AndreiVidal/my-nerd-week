<script lang="ts">
  import { marked } from "marked";
  import ReturnButton from "../template/ReturnButton.svelte";
    import Title from "../template/Title.svelte";
  export let character: any = null;

  let sections: string | any[] = [];
  let activeTab = 0;

  if (character?.skills) {
    const parts = character.skills.split("## ").filter(Boolean);

    sections = parts
      .map((part: { split: (arg0: string) => [any, ...any[]] }) => {
        const [firstLine, ...rest] = part.split("\n");
        return {
          title: firstLine.trim(),
          content: rest.join("\n").trim(),
        };
      })
      .filter((section: { title: string }) => section.title !== "");

    if (activeTab >= sections.length) activeTab = 0;
  }
</script>

{#if character && sections.length > 0}
  <div class="min-h-screen bg-gradient-to-br text-white px-6 py-5">
    <div class="max-w-6xl mx-auto">
      <nav class="mb-6">
        <ReturnButton />
      </nav>

      <Title title={character.name} />
      
      <div class="flex flex-wrap gap-2 justify-center mb-6">
        {#each sections as section, i}
          <button
            on:click={() => (activeTab = i)}
            class="px-4 py-2 rounded-full text-sm font-medium transition
              border-2 border-purple-700
              hover:bg-purple-700 hover:text-white
              {activeTab === i
              ? 'bg-purple-700 text-white'
              : 'bg-fuchsia-950/70 text-purple-300'}"
          >
            {section.title}
          </button>
        {/each}
      </div>

      <div
        class="bg-violet-950 rounded-3xl p-6 shadow-xl prose prose-invert max-w-none overflow-x-auto"
      >
        {@html marked.parse(sections[activeTab].content)}
      </div>
    </div>
  </div>
{/if}
