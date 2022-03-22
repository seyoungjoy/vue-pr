<template>
    <div>
        <h1>투두리스트 추가</h1>
        <input type="text" v-model="memo" placeholder="투두리스트를 입력해주세요.">
        <button @click="listAdd">리스트 추가</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            memo:null
        }
    },
    methods:{
        listAdd(){
            if(this.memo === null){
                alert('할일을 입력해주세요');
            }else{
                this.$emit("listAdd", this.memo);
                this.memo = null;
            }
        }
    },
    mounted() {
        this.emitter.on('listEdit', (memo) => {
            console.log(memo);
        })
    },

}
</script>
