<template>
    <div>
        <List
            :todoList="todoList"
            @statusControl="statusControl"
            @listDelete="listDelete"
        ></List>
        <ListAdd
            @listAdd="listAdd"
        ></ListAdd>
    </div>
</template>

<script>
import List from "./List"
import ListAdd from "./ListAdd"

export default {
    components:{
        List,
        ListAdd
    },
    data(){
        return{
            todoList:[]
        }
    },
    methods:{
        listAdd(memo){
            console.log('받았어');
            this.todoList.push({memo:memo, status:'create'});
            console.log(this.todoList);
        },
        statusControl(index, status) {
            this.todoList[index].status = status;
        },
        listDelete(index){
            this.todoList.splice(index,1);
        }
    }
}


</script>
