<script lang="ts">
  import { marked } from "marked";
  export let character: any = null;

  let sections: string | any[] = [];
  let activeTab = 0;

  if (character?.skills) {
    const parts = character.skills.split('## ').filter(Boolean);

    sections = parts.map((part: { split: (arg0: string) => [any, ...any[]]; }) => {
      const [firstLine, ...rest] = part.split('\n');
      return {
        title: firstLine.trim(),
        content: rest.join('\n').trim()
      };
    });

    if (activeTab >= sections.length) activeTab = 0;
  }
</script>

{#if character && sections.length > 0}
  <div class="min-h-screen bg-gradient-to-br  text-white px-6 py-10">
    <div class="max-w-6xl mx-auto">
      <nav class="mb-6">
        <a href="/" class="btn">
          ← Início
        </a>
      </nav>

      <h1 class="text-4xl md:text-5xl font-bold mb-10 text-center drop-shadow-lg">
        {character.name}
      </h1>

      <div class="flex flex-wrap gap-2 justify-center mb-6">
        {#each sections as section, i}
          <button
            on:click={() => (activeTab = i)}
            class="px-4 py-2 rounded-full text-sm font-medium transition
              border-2 border-purple-700
              hover:bg-purple-700 hover:text-white
              {activeTab === i ? 'bg-purple-700 text-white' : 'bg-transparent text-purple-300'}"
          >
            {section.title}
          </button>
        {/each}
      </div>

      <div class="bg-gray-800 rounded-3xl p-6 shadow-xl prose prose-invert max-w-none overflow-x-auto whitespace-pre-wrap">
        {@html marked.parse(sections[activeTab].content)}
      </div>
    </div>
  </div>
{/if}
