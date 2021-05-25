<script>
    import {navBar, mainBar, subTitle, title} from "../stores"
    import Chart from 'svelte-frappe-charts';
    import {getContext, onMount} from "svelte";
    import ReviewForm from "../components/ReviewForm.svelte";

    const reviewService = getContext("ReviewService");

    title.set("Visit Tramore Ltd.");
    subTitle.set("Analysis");
    navBar.set({
        bar: mainBar
    });

    let locations = [];
    let reviewList = [];
    let recommendData = {
        labels: ["Would Recommend", "Would Not Recommend"],
        datasets: [
            {
                values: [0, 0]
            }
        ]
    };

    let reviewsData = {
        labels: [],
        datasets: [
            {
                values: []
            }
        ]
    }

    async function refreshCharts() {
        let reviewList = await reviewService.getReviews();
        reviewList.forEach(review => {
            if (review.method == "Would Recommend") {
                recommendData.datasets[0].values[0] += review.review
            } else if (review.method == "Would Not Recommend") {
                recommendData.datasets[0].values[1] += review.review
            }
        })
        reviewsData.datasets[0].values = [];
        locations.forEach((location, i) => {
            reviewList.forEach(review => {
                if (review.location._id == location._id) {
                    if (!reviewsData.datasets[0].values[i]) {
                        reviewsData.datasets[0].values[i] = review.review;
                    } else {
                        reviewsData.datasets[0].values[i] += review.review;
                    }
                }
            });
        });
    }

    function justReviewed()
    {
        refreshCharts();
    }

    onMount(async () => {
        locations = await reviewService.getLocations()
        reviewsData.labels = [];
        locations.forEach(location => {
            reviewsData.labels.push(`${location.location}`)
        });
        await refreshCharts();
    });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-1-2@m ">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge uk-margin">
            <Chart data={recommendData} type="pie"/>
        </div>
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge uk-margin">
            <Chart data={reviewsData} type="bar"/>
        </div>
    </div>
    <div class="uk-width-1-2@m ">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge uk-margin">
            <ReviewForm/>
        </div>
    </div>
</div>