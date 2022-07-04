<script>
    import {FeedbackStore} from "../stores";

    $: count = $FeedbackStore.length
    $: average = $FeedbackStore.reduce((a, {rating}) => a+ rating , 0) / $FeedbackStore.length
</script>

<div class="feedback-stats">
    <h1>{count} Ulasan</h1>
    <h1>rata-rata penilaian: {average}</h1>
</div>

<style>
    h1 {
        font-size: 24px;
    }
    .feedback-stats {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: white;
    }
</style>