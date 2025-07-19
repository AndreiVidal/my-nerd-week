<script lang="ts">
  export let isOpen: boolean;
  export let toggle: () => void;
</script>

<button
  on:click={toggle}
  aria-expanded={isOpen}
  aria-label="Abrir menu"
  class="md:hidden flex items-center justify-center z-50 relative"
>
  <svg
    class:open={isOpen}
    viewBox="0 0 100 100"
    fill="none"
    stroke="currentColor"
    stroke-width="5"
    class="h-16 text-amber-50"
  >
    <path
      class="top"
      d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
    />
    <path class="middle" d="m 30,50 h 40" />
    <path
      class="bottom"
      d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
    />
  </svg>
</button>

<style>
  :root {
    --transition-duration: 400ms;
  }

  svg {
    transition: transform var(--transition-duration);
  }

  .top {
    stroke-dasharray: 40 160;
    transition: stroke-dashoffset var(--transition-duration);
  }

  .middle {
    transform-origin: 50%;
    transition: transform var(--transition-duration);
  }

  .bottom {
    stroke-dasharray: 40 85;
    transition: stroke-dashoffset var(--transition-duration);
  }

  .open {
    transform: rotate(45deg);
  }

  .open .top,
  .open .bottom {
    stroke-dashoffset: -64px;
  }

  .open .middle {
    transform: rotate(90deg);
  }
</style>
