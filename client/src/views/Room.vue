<template>
  <div class="room">

    <b-container id="container" fluid>
      <b-row class="no-gutters" align-v="center">
        <b-col md="3">
          <b-collapse id="collapse">
            <div id="collapse-content">
              <Chat id="chat" />
            </div>
          </b-collapse>
          <div id="collapse-btn">
          </div>
        </b-col>
        <b-col class="vh-100">
          <div class="h-100 game-wrap">
            <v-button id="collapse-btn" variant="primary" v-b-toggle="'collapse'">Chat</v-button>
            <Game id="game" />
          </div>
        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script>
// @ is an alias to /src
import Chat from '@/components/Chat.vue'
import Game from '@/components/Game.vue'

export default {
  name: 'Room',
  components: {
    Chat,
    Game
  }
}
</script>

<style scoped>
@media (max-width: 768px) {
  #collapse {
    height:50vh;
  }

  #collapse-content {
    height: 50vh;
  }
}

@media (min-width: 768px) {
  #collapse-btn {
    display: none !important;
  }

  #collapse {
    display:block !important;
  }

  #collapse-content {
    height: 100vh;
  }
}

#container{
  padding:0;
}

.game-wrap {
  display: flex;
  flex-flow: column;
}
</style>