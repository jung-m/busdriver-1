<template>
  <div class="home">
    <Chat />
<!--      <div id="card">-->
<!--        <Card v-bind:value="8" v-bind:color="'spades'" />-->
<!--      </div>-->

<!--    <b-container id="container" fluid>-->
<!--      <b-row class="no-gutters" align-v="center">-->
<!--        <b-col md="3">-->
<!--          <b-collapse id="collapse">-->
<!--            <div id="collapse-content">-->
<!--              <Chat />-->
<!--            </div>-->
<!--          </b-collapse>-->
<!--          <div id="collapse-btn">-->
<!--          </div>-->
<!--        </b-col>-->
<!--        <b-col class="vh-100">-->
<!--          <v-button id="collapse-btn" variant="primary" v-b-toggle="'collapse'">Chat</v-button>-->
<!--          <div>-->
<!--            main comp-->
<!--          </div>-->
<!--        </b-col>-->
<!--      </b-row>-->
<!--    </b-container>-->
  </div>
</template>

<script>
//import Card from "../components/Busfahrer/Card_perf.vue";
import Chat from '../components/Chat'

export default {
   name: 'Design',
    components: {
      Chat
    }
}
</script>

<style scoped>

</style>
