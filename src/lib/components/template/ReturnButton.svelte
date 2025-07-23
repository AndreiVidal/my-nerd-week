<script lang="ts">
  import { goto } from '$app/navigation';

  function returnButton() {
    if (history.length > 1) {
      history.back();
    } else {
      goto('/');
    }
  }
</script>

<button on:click={returnButton} class="btn">
  ← Voltar
</button>
