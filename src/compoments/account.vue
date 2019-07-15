<template>
    <div>
        <h4> 子组件1</h4>
        <button @click="add1">增加1</button>
        <button @click="reduce1">减少1</button>
        <input type="text" v-model="$store.state.count">
    </div>
</template>
<script>
export default {
    data() {
        return {
         
        }
    },
    methods:{
        add1(){
            // this.$store.state.count++;
            this.$store.commit('increment');
        },
        reduce1(){
            this.$store.state.count--;
        }
    }
}
</script>
