<template>
    <div>
        <h1>오늘의 할일</h1>
        <ul>
            <li
                :class="{'done':list.status==='done'}"
            v-for="(list, index) in  todoList" :key="index"
            >
                <p>{{list.memo}}</p>
                <p>{{list.status}}</p>
                <button
                    v-if="list.status === 'create'"
                    @click="$emit('statusControl', index, 'done')"
                >완료</button>
                <button
                    v-else
                    @click="$emit('statusControl', index, 'create')"
                >부활</button>
                <button
                    @click="$emit('listDelete', index)"
                >제거</button>
                <button
                    @click="listEdit(list.memo)"
                    v-if="list.status === 'create'"
                >수정</button>
            </li>

        </ul>
    </div>
</template>
<script>
export default {
    props:["todoList"],
    data(){
        return{

        }
    },
    methods:{
        listEdit(memo){
            this.emitter.emit("listEdit", memo)
        }

    }
}
</script>
<style>
.done{
    color:red;
    text-decoration: line-through;
;
}
</style>
