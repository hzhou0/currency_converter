<template>
  <div>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
        crossorigin="anonymous">
    <header>
        <div class="btn-group">
            <button id="length" class="btn btn-primary active" type="button">Length</button>
            <button id="weight" class="btn btn-primary" type="button">Weight</button>
            <button id="currency" class="btn btn-primary" type="button">Currency</button>
        </div>
    </header>
    <main>
        <div class="container text-center">
            <label class="mt-2" for="input-value">Value to Convert:</label>
            <input type="number" name="" id="input-value">
            <div id="convert-from" class="form-group">
                <label for="length-from">From:</label>
                <select class="form-control" id="length-from">
                    <option>{{unit1}}</option>
                    <option>{{unit2}}</option>
                </select>
            </div>
            <div id="convert-to" class="form-group">
                <label for="length-from">To:</label>
                <select class="form-control" id="length-to">
                    <option>{{unit1}}</option>
                    <option>{{unit2}}</option>
                </select>
            </div>
            <button class="btn-light" id="convert-btn">Calculate</button>
            <label class="mt-2" for="output-value">Result:</label>
            <input type="number" name="" id="output-value">
        </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
    return{
      "unit1": 3,
      "unit2": 3
    }
  },
  mounted () {
    browser.runtime.sendMessage({})
  },
  computed: {
    defaultText () {
      return browser.i18n.getMessage('extName')
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
