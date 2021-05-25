<script>
    import ReviewList from "../components/ReviewList.svelte";
    import crab from "/src/assets/crab.png";
    import {navBar, mainBar, subTitle, title} from "../stores"

    title.set("Visit Tramore Ltd.");
    subTitle.set("Latest Reviews");
    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-text-center" uk-grid>
    <div class="uk-width-1-2@m ">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <ReviewList/>
        </div>
    </div>
    <div class="uk-width-1-2@m">
        <img width="300" src="{crab}" alt="crab">
    </div>
</div>