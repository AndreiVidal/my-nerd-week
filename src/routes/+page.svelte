<script lang="ts">
  import { works } from "$lib/data/works";
  import Title from "$lib/components/template/Title.svelte";

</script>

<section
  class=" bg-gradient-to-br from-indigo-700 via-purple-800 to-indigo-900 py-8 px-4 text-white"
>
  <Title title="Obras em Destaque" />

  <div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto"
  >
    {#each works as work}
      <a
        href={`/works/${work.slug}`}
        class="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col transition hover:shadow-2xl"
      >
        <div class=" aspect-[16/9] overflow-hidden">
          <img
            src={work.image}
            alt={work.title}
            class="w-full h-full object-cover"
          />
        </div>

        <div class=" p-5 text-gray-800 flex flex-col flex-1">
          <h2 class="text-xl font-bold mb-2">{work.title}</h2>
          <p class="text-sm line-clamp-4 flex-1">
            {@html work.description.split("\n")[2]}
          </p>
          <span
            class="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition self-start"
          >
            Ver mais
          </span>
        </div>
      </a>
    {/each}
  </div>
</section>
