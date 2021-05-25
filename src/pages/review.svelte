<script>
    import towel from "/src/assets/towel.png";
    import {navBar, mainBar, subTitle, title} from "../stores"
    import ReviewForm from "../components/ReviewForm.svelte";

    title.set("Visit Tramore Ltd.");
    subTitle.set("Leave a Review!");
    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-1-2@m ">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <img width="300" src="{towel}" alt="towel">
        </div>
    </div>
    <div class="uk-width-1-2@m ">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <ReviewForm/>
        </div>
    </div>
</div>