<script lang="ts">
  import "../app.css";
  import Page from "../lib/components/template/Page.svelte";
  let { children } = $props();
</script>

<Page>
  {@render children()}
</Page>
