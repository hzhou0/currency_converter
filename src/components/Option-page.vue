<template>
    <div>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
            crossorigin="anonymous">
        <!-- <ul>
            <li v-for="currency in allCurrency" :key="currency">{{currency.code}}</li>
        </ul> -->

        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="unit-default">Default Unit</label>
            </div>
            <select class="custom-select" id="unit-default" v-model="unitDefault">
                <option disabled value="">Choose...</option>
                <option v-for="currency in allCurrency" :key="currency">{{currency.code}}</option>
            </select>
        </div> 

        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="unit-dollar">Unit represented by $ sign</label>
            </div>
            <select class="custom-select" id="unit-dollar" v-model="unitDollar">
                <option disabled value="">Choose...</option>
                <option v-for="currency in allCurrency" v-show="currency.symbol_native == '$'" :key="currency">{{currency.code}}</option>
            </select>
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
  body {
    background: #e9dfda;
  }
  header {
    margin-top: 1.3rem;
    margin-left: 1.3rem;
    margin-right: 1.3rem;
  }
  .container {
    background: #f7f2ef;
  }
</style>
