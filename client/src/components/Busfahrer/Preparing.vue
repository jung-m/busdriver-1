<template>
  <div id="preparing">
    <div id="button">
      <button @click="startGame">Start the ride!</button>
    </div>
  </div>
</template>

<script>
import {store} from '../../store'

export default {
    name: 'Preparing',
    methods: {
        startGame: () => {
            store.dispatch('startGame')
        }
    }
}
</script>

<style>
#preparing {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
}
#button {
  margin-left: auto;
  margin-right: auto;
}
</style>