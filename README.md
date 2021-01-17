# currency_converter

## Functions
    * Automatically convert the currency on websites to the currency set by user
    * Manual conversion is available on the popup window, where users can enter a price and select a unit to convert to.
    
## How to install
    * Download from https://github.com/hzhou0/currency_converter
    * Unzip "currency_converter-master"
    * Enter following command lines in terminal, replace <...> accrodingly:
        * cd <the path to your currency_converter-master folder>
            * Example: cd Desktop/currency_converter-master
        * npm install
        * npm install -g @vue/cli
        * npm run build
    * Go to chrome://extensions/ in Google Chrome
    * Make sure Developer mode is on
    * Click "Load unpacked"
    * Navigate to "currency_converter-master" folder
    * Select "dist" folder
    * You are all done!!

## How to use
    * Click on "Details" under the installed extention (on chrome://extensions/)
    * Click on "Extension options" to set your preference, then close the options window
    * Refresh the site you want to convert

## Trouble Shooting
    * if you get errors after entering "npm install", try "sudo npm install" 
    * if you get errors after entering "npm install -g @vue/cli", try "sudo npm install -g @vue/cli"
    * if you get errors after entering "npm run build", try entering "sudo npm install -g @vue/cli" before hand
