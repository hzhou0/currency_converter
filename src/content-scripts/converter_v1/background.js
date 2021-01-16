chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => { 

            chrome.tabs.insertCSS(null, { file: './mystyles.css' });
            chrome.tabs.executeScript(null, 
                {file: './foreground.js' }, () => console.log('i injected'))
        
    });
});