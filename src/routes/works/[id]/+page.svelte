<script>
    import { page } from "$app/state";
    import ContentWork from "$lib/components/work/ContentWork.svelte";
</script>
<ContentWork work={page.data.work} />