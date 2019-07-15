<template>
    <div>
      <h1>这是 主组件</h1>
      <hr>
      <account></account>
      <hr>
      <amount></amount>
    </div>
</template>

<script>
import account from './compoments/account.vue'
import amount from './compoments/amount.vue'

export default {
    data(){
        return{
           
        }
    },
    methods:{},
    components:{
        account,
        amount
    }
}
</script>

<style lang="">
    
</style>