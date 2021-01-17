<template>
    <div>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
            crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
        <!-- <ul>
            <li v-for="currency in allCurrency" :key="currency">{{currency.code}}</li>
        </ul> -->
<div class="container">
        <div class="title mb-3 mt-3">
                <h1 class="display-4 d-inline-block">Settings </h1>
                <i class="fas fa-cogs fa-3x"></i>
            </div>

        <div class="options">

        <div class="input-group mb-4">
            <div class="input-group-prepend">
                <label class="input-group-text" for="unit-default">Default Unit</label>
            </div>
            <select class="custom-select" id="unit-default" v-model="unitDefault">
                <option disabled value="">Choose...</option>
                <option v-for="currency in allCurrency" :key="currency">{{currency.code}}</option>
            </select>
        </div> 

        <div class="input-group mt-4">
            <div class="input-group-prepend">
                <label class="input-group-text" for="unit-dollar">Unit represented by $ sign</label>
            </div>
            <select class="custom-select" id="unit-dollar" v-model="unitDollar">
                <option disabled value="">Choose...</option>
                <option v-for="currency in allCurrency" v-show="currency.symbol_native == '$'" :key="currency">{{currency.code}}</option>
            </select>
        </div>  
        </div>
</div>
    </div>
</template>

<script>
import currency from '../util/available-currency.js';

export default {
  name: 'OptionPage',
  data() {
        return {allCurrency: currency};
    }
}
</script>

<style scoped>
.container {
    width: 300px;
    height: 300px;
}

</style>
