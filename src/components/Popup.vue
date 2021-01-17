<template>
    <div class="body">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"
              integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
              crossorigin="anonymous">
        <main>
            <div class="container text-center">
                <label for="input-value">Convert:</label>
                <input class="d-block w-80 mb-1" type="number" id="input-value" v-on:change="update" v-model="amount">
                <div id="convert-to" class="form-group">
                    <label for="unit-dollar">To:</label>
                    <select class="custom-select" id="unit-dollar" v-on:change="update" v-model="unit2">
                        <option disabled value="">Choose...</option>
                        <option v-for="cur in currency" :key="cur.code">
                            {{ cur.code }}
                        </option>
                    </select>
                </div>
                <label for="output-value">Result:</label>
                <input type="number" v-bind:value="proxy" id="output-value">
            </div>
        </main>
    </div>
</template>

<script>
import {baseCurSym, dollarSym, get_rates} from "@/util/rate";
import currency from '@/util/available-currency.js';
import {convert, convertTargetSym} from '@/util/rate.js';

export default {
    name: 'HelloWorld',
    data() {
        return {
            currency,
            "unit2": "",
            "amount": 0,
            "proxy": 0
        }
    },
    async beforeMount() {
        this.unit2 = await convertTargetSym();
    },
    methods: {
        update: async function () {
            this.proxy= await convert(this.amount, this.unit2)
        }
    },
    watch:{
        unit2: (newVal)=>{
            chrome.storage.sync.set({currencyTo: newVal})
        }
    }
}

</script>
<style scoped>
html {
    /* background: #333333;
    color: aliceblue; */
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-size: 1.3rem;
}

main {
    background: #767676;
    padding: 1rem;
}

.container {
    display: flex;
    flex-direction: column;
}

#convert-btn {
    background: #a9a9a9;
    color: #fff;
    border-radius: 5px;
}

</style>
