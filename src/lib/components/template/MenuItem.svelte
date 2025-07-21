<script lang="ts">
    export let href:string = "/"
    export let name:string = ""
</script>
<li
class="list-none"
>
    <a {href}
    class="
    flex gap-2
    items-center
    cursor-pointer
    px-4 py-2
    text-white
    
    hover:underline hover:text-fuchsia-950 hover:bg-white/20
    ">
        <span class="text-sm">{name}</span>
    </a>
</li>