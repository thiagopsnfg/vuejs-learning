Vue.component('message', {

    props: ['title', 'body'],

    data(){
        return{
            isvisible: true
        };
    },

    template: `
     <article class="message" v-show="isvisible">

            <div class="message-header">
                <p> {{ title }} </p>

                <button type="button" @click="hideMessage">X</button>
            </div> 

            <div class="message-body">
               {{ body }}
            </div>
     </article>
    `,
    methods:{
        hideMessage(){
            this.isvisible = false;
        }
    }
});

new Vue({

    el: '#root'

});