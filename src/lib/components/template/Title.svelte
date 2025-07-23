<script lang="ts">
    export let title: string = ""
    export let subTitle: string = ""
</script>
<div class="
    flex flex-col gap-0.5
  items-center justify-center
    rounded-sm
    w-full
    my-3
    p-3
">
    <h1
      class="
        text-center md:text-left
        text-4xl font-black
    "
    >
      {title}
    </h1>
    <h2 
      class="
        text-center md:text-left
        text-xs
        font-black
    "
    >{subTitle}</h2>
</div>
