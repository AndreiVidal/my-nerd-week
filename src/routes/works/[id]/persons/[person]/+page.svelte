<script>
    import { page } from "$app/state";
    import ContentCharacter from "$lib/components/character/ContentCharacter.svelte";
</script>
<ContentCharacter character={page.data.character} />s