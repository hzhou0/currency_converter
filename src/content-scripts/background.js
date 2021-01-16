chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        chrome.tabs.executeScript(null,
            {file: './foreground.js'}, () => console.log('i injected'))
    });
});
chrome.extension.getBackgroundPage().console.log('foo');
