<script lang="ts">
    import {mainBar, navBar, subTitle, title} from "../stores";
    import towel from "/src/assets/towel.png";
    import SettingsForm from "../Components/SettingsForm.svelte";
    title.set("Visit Tramore Ltd.");
    subTitle.set("Edit and then save your settings");
    navBar.set({
        bar: mainBar
    });
</script>

<div class="uk-flex-middle uk-text-center" uk-grid>
    <div class="uk-width-1-2@m ">
        <img width="300" src="{towel}" alt="towel">
    </div>
    <div class="uk-width-1-2@m">
        <div class="uk-card uk-card-default uk-card-body uk-box-shadow-large uk-width-2xlarge">
            <h3 class="uk-card-title uk-text-center">Edit any entry and press save</h3>
            <SettingsForm/>
        </div>
    </div>
</div>
