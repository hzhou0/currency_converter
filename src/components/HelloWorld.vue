<template>
  <div class="body">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
        crossorigin="anonymous">
    <main>
        <form action="">
          <div class="btn-group mb-2 bg-grey">
            <button class="btn btn-dark" type="button">Length</button>
            <button class="btn btn-dark" type="button">Weight</button>
            <button class="btn btn-dark" type="button">Currency</button>
        </div>
        </form>
        <div class="container text-center">
            <label for="input-value">Value to Convert:</label>
            <input class="d-block w-80 mb-1" type="number" name="" id="input-value">
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
            <button class="btn" id="convert-btn" type="post">Calculate</button>
            <label for="output-value">Result:</label>
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
