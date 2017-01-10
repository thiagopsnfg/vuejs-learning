Vue.component('tasks-list', {

     template: `
     <div>    
        
        <task v-for="task in tasks"> {{ task.task }} </task>

    </div>
    `,

     data(){
         
         return {
         
             tasks: [
                  { task: 'Learn more javascript', completed: true },
                  { task: 'Winner more money', completed: false },
                  { task: 'Study ingles', completed: true  },
                  { task: 'Studie more ingles', completed: false },
             ]
         }
     }

});

Vue.component('task', {
     
     template: '<li><slot></slot></li>'
}); 

new Vue({
    
    el:'#root'

});