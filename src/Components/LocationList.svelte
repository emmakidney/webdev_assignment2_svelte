<script>
  import {onMount, getContext} from 'svelte'
 const reviewService = getContext("ReviewService");

  let locationList;
  onMount(async () => {
      locationList = await reviewService.getLocations()
  })
</script>

<h3 class="uk-heading-divider">
 Locations
</h3>
<div class="uk-table uk-table-divider">
  <table class="uk-table">
    <thead>
      <th>
        Name
      </th>
    </thead>
    <tbody class="uk-text-left">
    {#if locationList}
     {#each locationList as location}
      <tr>
        <td>{location.location}</td>
      </tr>
      {/each}
      {/if}
    </tbody>
  </table>
</div>