<script lang="ts">
   export let title:string = "Menu"
</script>
<nav class="
    flex flex-col
    gap-1.5
">
    <span class="text-sm font-black text-white/40">{title}</span>
    <ul class="flex flex-col">
        <slot></slot>
    </ul>

</nav>
