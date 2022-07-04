<script>
    import { fade, scale } from "svelte/transition";
    import FeedbackItem from "./FeedbackItem.svelte";
    import { FeedbackStore } from "../stores";

</script>

<main>
    {#each $FeedbackStore as fb (fb.id)}
        <div in:scale out:fade="{{duration: 500}}">
            <FeedbackItem item="{fb}" />
        </div>
    {/each}
</main>