<template>
    <div>
        <h4> 这是amount组件-我和account是兄弟组件</h4>
        （获取到兄弟组件的值）<br>
        总数量是：{{count}}
        <!-- $store即this.$store -->
        <!--  <h4> 子组件2</h4>
        <button @click="add2">增加2</button>
        <button @click="reduce2">减少2</button>
        <input type="text" v-model="$store.state.count"> -->
    </div>
</template>

<script>
export default {
    computed:{
        count(){
            return this.$store.state.count
        }
    }
}
</script>

