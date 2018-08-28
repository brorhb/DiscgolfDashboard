<template>
  <div class="flex flex-wrap justify-center">
    <div class="bg-white w5-l w-100  mh2 mv3 br2 pa2 bl bb accenttwo">
      <div class="black">
        Weather
      </div>
    </div>
    <div class="bg-white w5-l w-100 mh2 mv3 br2 pa2 bl bb accenttwo">
      <div class="black">
        Wind
      </div>
    </div>
    <div class="bg-white w5-l w-100 mh2 mv3 br2 pa2 bl bb accenttwo">
      <div class="black">
        twitter
      </div>
    </div>
    <div class="bg-white w5-l w-100 mh2 mv3 br2 pa2 bl bb accenttwo">
      <div class="black">
        <app-reddit></app-reddit>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    cards: ['weather', 'wind', 'twitter', 'reddit']
  })
}
</script>
