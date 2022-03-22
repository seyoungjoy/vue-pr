<template>
    <div>
        <h1>할일 목록</h1>
        <ul>
            <li
                :class="{'done':list.status === 'done'}"
                v-for="(list, index) in todoList" :key="index"
            >
                <p class="list">{{list.memo}}</p>
                <button
                    v-if="list.status==='create'"
                @click="$emit('statusControl',index,'done')"
                >완료</button>
                <button
                    v-if="list.status==='done'"
                    @click="$emit('statusControl',index,'create')"
                >부활</button>
                <button
                @click="$emit('deleteList', index)"
                >삭제</button>
                <button
                @click="listEdit(list.memo, index)"
                >수정</button>
            </li>
        </ul>
    </div>
</template>
<script>
import {eventBus} from "../main";
export default {
    props:["todoList"],
    data(){
        return{

        }
    },
    methods:{
        listEdit(memo, index){
            eventBus.listEdit(memo, index)
        }
    }
}
</script>
<style scoped>
.list{
    display: inline-block;
    margin-right:10px;
}
.done p{
    text-decoration: line-through;
    color:red;
}
</style>
