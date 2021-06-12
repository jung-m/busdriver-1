<template>
  <div class="bg-white" id="chat">

    <div id="chat-inner">
      <div id="messages">
        <div v-for="messageObj in messageArray" :key="messageObj.message + messageObj.name">
          <span class="name">{{ messageObj.name}}:</span> {{ messageObj.message }}
        </div>
      </div>

      <div id="newMessage">
        <form v-on:submit="newMessage">
          <input type="text" placeholder="Message" name="message" />
          <button type="submit" value="">Send</button><br>
        </form>
      </div>
    </div>

    <div id="players">
      <div id="users">
        In the room:
        <div v-for="user in users" :key="user.id">
          {{ user.name }}
        </div>
      </div>

      <div id="shot-log">
        In development
      </div>
    </div>

  </div>
</template>


<script>
import {store} from '../store'

export default {
  name: 'Chat',
  computed: {
    name(){
      return store.state.name
    },
    messageArray(){
      return store.state.messageArray
    },
    users(){
      return store.state.game.users
    },
    game(){
      return store.state.game
    }
  },
  watch:{
    messageArray: async function(){             //TODO set message ids for unique keys in the array
      await setTimeout(200)                                       //FIND ANOTHER SOLUTION FOR THIS SHIT
      var objDiv = document.getElementById("messages");
      objDiv.scrollTop = objDiv.scrollHeight;
    }
  },
  methods: {
    newMessage: (e) => {
      e.preventDefault()
      let message = e.target.elements.message.value
      store.dispatch('sendMessage', message)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#chat {
  height: 100%;
}

#chat-inner {
  display: flex;
  flex-flow: column;
  height: 50%;
}

#messages {
  overflow-y: auto;
  flex: 1 1 auto;
}

#newMessage {
  flex: 0 1 1em;
}

#newMessage > form > input {
  width: 70%;
  padding: 4px 8px;
}

#newMessage > form > button {
  width: 30%;
  padding: 4px 8px;
}

#players {
  height: 50%;
}
#users {
  height:50%;
}

#shot-log {
  height:50%;
}

</style>
