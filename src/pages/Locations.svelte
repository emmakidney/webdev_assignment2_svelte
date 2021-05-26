<script>
    import LocationList from "../Components/LocationList.svelte";
    import sandcastle from "/src/assets/sandcastle.png";
    import {navBar, mainBar, subTitle, title} from "../stores"

    title.set("Visit Tramore Ltd.");
    subTitle.set("All Current Locations");
    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-text-center" uk-grid>
    <div class="uk-width-1-2@m ">
        <img width="300" src="{sandcastle}" alt="sandcastle">
    </div>
    <div class="uk-width-1-2@m">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge ">
            <LocationList/>
        </div>
    </div>
</div>
