<script lang="ts">
    import { onMount, getContext } from "svelte";
    const reviewService = getContext("ReviewService");
    export let justReviewed;

    let locationList = [];
    let reviewText = "5 stars!";
    let selectedMethod = 0;
    let selectedLocation = 0;
    let methods = ["Would Recommend", "Would Not Recommend"]
    let errorMessage = "";

    onMount(async () => {
        locationList = await reviewService.getLocations()
    });

    async function review() {
        const success = await reviewService.review(review[reviewText], methods[selectedMethod], locationList[selectedLocation])
        if (success) {
            if(justReviewed) justReviewed();
        } else {
            errorMessage = "Review not completed - some error occurred";
        }
    }
</script>

<form on:submit|preventDefault={review} class="uk-form-stacked uk-text-left">
    <div class="uk-grid uk-grid-stack">
        <div class="uk-width-1-2@m">
            <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">Enter review</label>
                <div class="uk-form-controls">
                    <input bind:value={reviewText} class="uk-input" id="form-stacked-text" type="text" name="review" placeholder="5 stars!">
                </div>
            </div>
            <div class="uk-margin">
                <div class="uk-form-label">Recommendation </div>
                <div class="uk-form-controls">
                    <label><input bind:group={selectedMethod} value={0} class="uk-radio" type="radio" name="method"> {methods[0]} </label><br>
                    <label><input bind:group={selectedMethod} value={1} class="uk-radio" type="radio" name="method"> {methods[1]} </label>
                </div>
            </div>
        </div>
        <div class=" uk-width-1-2@m">
            <div class="uk-margin uk-text-left">
                <div class="uk-form-label">Select Location </div>
                <div class="uk-form-controls ">
                    {#each locationList as location, i}
                        <label>
                            <input bind:group={selectedLocation} value={i} class="uk-radio" type="radio" name="location" />
                            {location.location}
                        </label>
                        <br>
                    {/each}
                </div>
            </div>
            <div class="uk-margin">
                <button class="submit uk-button uk-button-primary uk-button-large uk-width-1-1">Submit</button>
            </div>
            {#if errorMessage}
                <div class="uk-text-left uk-text-small">
                    {errorMessage}
                </div>
            {/if}
        </div>
    </div>
</form>