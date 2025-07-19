<script lang="ts">
    export let title: string = ""
    export let subTitle: string = ""
</script>
<div class="
    flex flex-col gap-0.5
    md:px-5
">
    <h1
      class="
        text-center md:text-left
        text-xl font-black
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
