  <script>
    import {setContext} from "svelte";
    import {ReviewService} from "./services/review-service";
    import Main from "./pages/Main.svelte"
    import Login from "./pages/Login.svelte"
    import Signup from "./pages/Signup.svelte"
    import Reviews from "./pages/Reviews.svelte";
    import Locations from "./pages/Locations.svelte";
    import Analysis from "./pages/Analysis.svelte";
    import Settings from "./pages/Settings.svelte";
    import Navigator from "./Components/Navigator.svelte";
    import Review from "./pages/review.svelte";
    import Router from "svelte-spa-router";

    setContext("ReviewService", new ReviewService("https://pacific-caverns-35080.herokuapp.com/"));

    let routes = {
      "/": Main,
      "/login": Login,
      "/signup": Signup,
      "/locations": Locations,
      "/reviews": Reviews,
      "/review": Review,
      "/analysis": Analysis,
      "/settings": Settings,
      "/logout": Main
    }
  </script>

  <div class="uk-container">
    <Navigator/>
    <Router {routes} />
  </div>
