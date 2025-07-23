<script>
    import { page } from "$app/state";
    import CharacterSkills from "$lib/components/character/CharacterSkills.svelte";
</script>
<CharacterSkills character={page.data.character} />