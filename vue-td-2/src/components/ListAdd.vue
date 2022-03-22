<template>
    <div>
        <h1>할일 추가하기</h1>
        <div>
            <input type="text" placeholder="할일을 추가하세요" v-model="memo">
            <button
                v-if="this.mode === 'add'"
                @click="addList()"
            >할일 추가하기</button>
            <button
                v-else
                @click="editBtn"
            >수정하기</button>
        </div>
    </div>
</template>
<script>
import {eventBus} from "../main";

export default {
    data(){
        return{
            memo:null,
            index:null,
            mode:'add',
        }
    },
    created(){
      eventBus.$on('listEdit', (memo, index) => {
          this.memo = memo;
          this.index = index;
          this.mode = 'edit'
      })
    },
    methods:{
        addList(){
            if(this.memo === null){
                alert("할일을 입력해주세요.")
            }else{
                this.$emit('addList', this.memo, 'create', 'add');
                this.memo = null;

            }
        },
        editBtn(){
            if(this.memo === null){
                alert("할일을 입력해주세요.")
            }else{
                this.$emit('editBtn', this.memo, this.index, 'create');
                this.memo = null;
                this.mode = 'add';
            }
        }

    }
}
</script>
