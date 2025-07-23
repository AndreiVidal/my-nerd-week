<script lang="ts">
  import { works } from "$lib/data/works";
  import { goto } from "$app/navigation";

  function openWork(slug: string) {
    goto(`/works/${slug}`);
  }
</script>

<section class="min-h-screen bg-gradient-to-br from-indigo-700 via-purple-800 to-indigo-900 py-14 px-6 text-white">
  <h1 class="text-4xl font-bold text-center mb-12">🌟 Obras em Destaque</h1>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
    {#each works as work}
      <div
        class="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col transition hover:shadow-2xl cursor-pointer"
        on:click={() => openWork(work.slug)}
      >
        <div class="aspect-[16/9] overflow-hidden">
          <img
            src={work.image}
            alt={work.title}
            class="w-full h-full object-cover"
          />
        </div>

        <div class="p-5 text-gray-800 flex flex-col flex-1">
          <h2 class="text-xl font-bold mb-2">{work.title}</h2>
          <p class="text-sm line-clamp-4 flex-1">
            {@html work.description.split("\n")[2]}
          </p>
          <button class="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition self-start">
            Ver mais
          </button>
        </div>
      </div>
    {/each}
  </div>
</section>
