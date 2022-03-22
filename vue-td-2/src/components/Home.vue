<template>
    <div>
        <List
        :todoList="todoList"
        @statusControl="statusControl"
        @deleteList="deleteList"
        ></List>
        <ListAdd
        @addList="addList"
        @editBtn="editBtn"
        ></ListAdd>
    </div>
</template>
<script>
import List from './List.vue'
import ListAdd from './ListAdd.vue'

export default {
    data(){
        return{
            todoList:[],
        }
    },
    components:{
        List,
        ListAdd
    },
    methods:{
        addList(memo, status, mode){
            this.todoList.push({memo:memo, status:status, mode:mode});
            console.log(this.todoList);
        },
        editBtn(memo, index, status){
            this.todoList[index].memo = memo;
            this.todoList[index].status = status;

        },
        statusControl(index,status){
            this.todoList[index].status = status;
        },
        deleteList(index){
            this.todoList.splice(index,1);
        },

    }
}
</script>
