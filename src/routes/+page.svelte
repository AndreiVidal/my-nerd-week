<script>
  import Title from "$lib/components/template/Title.svelte";
  import ContentWork from "$lib/components/work/ContentWork.svelte";
  import { works } from "$lib/data/works";

</script>
<div class="bg-black/15 flex flex-col justify-center items-center">
  <Title title="My Nerd Wiki" subTitle="Principais Obras"  />
  {#each works as work }
  <div class="flex flex-col">
    <ContentWork work={work}/>
  </div>
  {/each}
</div>
