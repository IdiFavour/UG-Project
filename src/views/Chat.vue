<script>
  import Talk from 'talkjs';
export default {
    name: 'Inbox',
    props: {
        currentUser: {
            type: Object,
            required: true
        }
    },
    mounted() {
        Talk.ready.then(() => {
          window.talkSession = new Talk.Session({
            appId: 'tBH1DjE0',
            me: me,
          });
        // creating our user
            var me = new Talk.User({
                id: '654321',
                name: 'Nacho',
                email: 'Nacho@example.com',
                photoUrl: 'https://demo.talkjs.com/img/sebastian.jpg',
                welcomeMessage: 'Hey, how  I help?',
                role: "default"
            });  
            var other = new Talk.User({
              id: '654321',
              name: 'Sebastian',
              email: 'Sebastian@example.com',
              photoUrl: 'https://demo.talkjs.com/img/sebastian.jpg',
              welcomeMessage: 'Hey, how can I help?',
              role: 'default',
            });          
        })
        var conversation = talkSession.getOrCreateConversation(
          Talk.oneOnOneId(me, other)
        );
        conversation.setParticipant(me);
        conversation.setParticipant(other);
        var inbox = talkSession.createInbox();
        inbox.select(conversation);
        inbox.mount(document.getElementById('talkjs-container'));
    }
}
</script>
<template>
  <div id="talkjs-container" style="width: 90%; margin: 30px; height: 500px">
    <i>Loading chat...</i>
  </div>
</template>