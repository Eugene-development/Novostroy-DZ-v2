<script>
    import { fade } from 'svelte/transition';
    import { flip } from 'svelte/animate';
</script>

<div in:fade={{ duration: 1000}} out:fade>
    <slot/>
</div>
