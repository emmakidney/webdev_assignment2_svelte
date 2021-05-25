<script>
    import {title, subTitle, navBar, welcomeBar} from "../stores"
    import sun from "/src/assets/sun.png";
    import {getContext} from "svelte";
    const reviewService = getContext("ReviewService");

    title.set("Visit Tramore Ltd.");
    subTitle.set("Sign up or Log in");

    navBar.set({
        bar: welcomeBar
    });
    reviewService.logout();

</script>

<div class="uk-text-center" uk-grid>
    <div class="uk-width-1-2@m">
        <img width="200" src="{sun}" alt="sun">
        <p> Visit While You Can! </p>
    </div>
    <div class="uk-width-1-2@m ">
        <div class="uk-width-2xlarge">
            <h3 class="uk-heading-small uk-flex"> Waterford's Most Famous Beach </h3>
            <p> The Sea, The Sea </p>
        </div>
    </div>
</div>