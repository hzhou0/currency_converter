<template>
    <div>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
              integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
              crossorigin="anonymous">
        <!-- <ul>
            <li v-for="currency in allCurrency" :key="currency">{{currency.code}}</li>
        </ul> -->

        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="unit-default">Unit to Convert To</label>
            </div>
            <select class="custom-select" id="unit-default" v-model="unitDefault">
                <option disabled value="">Choose...</option>
                <option v-for="cur in currency" :key="cur">{{ cur.code }}</option>
            </select>
        </div>

        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <label class="input-group-text" for="unit-dollar">Unit represented by $ sign</label>
            </div>
            <select class="custom-select" id="unit-dollar" v-model="unitDollar">
                <option disabled value="">Choose...</option>
                <option v-for="cur in currency" v-show="cur.symbol_native === '$'" :key="cur">
                    {{ cur.code }}
                </option>
            </select>
        </div>
    </div>
</template>

<script>
import currency from '@/util/available-currency.js';
import {baseCurSym, dollarSym} from '@/util/rate'

export default {
    name: 'OptionPage',
    data: function () {
        return {
            currency,
            unitDollar: "",
            unitDefault: ""
        };
    },
    async beforeMount() {
        this.unitDollar = await dollarSym();
        this.unitDefault= await baseCurSym()

    },
    watch: {
        unitDollar: function(newVal){
            chrome.storage.sync.set({dollar: newVal})
        },
        unitDefault: function(newVal){
            chrome.storage.sync.set({outputCurrency: newVal})
        }
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
