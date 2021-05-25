<script>
    import {getContext, onMount} from 'svelte'

    const reviewService = getContext("ReviewService");
    let reviewList = [];

    onMount(async () => {
        reviewList = await reviewService.getReviews();
    });
</script>

<h3 class="uk-heading-divider">
    Review List </h3>
<div class="uk-table uk-table-divider">
    <table class="uk-table">
        <thead>
        <th>
            Review
        </th>
        <th>
            Recommend
        </th>
        <th>
            Location
        </th>
        <th>
            User
        </th>
        </thead>
        <tbody class="uk-text-left">
        {#each reviewList as review}
            <tr>
                <td>
                    {review.review}
                </td>
                <td>
                    {review.method}
                </td>
                <td>
                    {review.location}
                </td>
                <td>
                    {review.user.firstName}
                </td>
            </tr>
        {/each}
        </tbody>
    </table>
</div>