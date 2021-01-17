import { get_rates } from '@/util/rate'
chrome.runtime.onInstalled.addListener( ()=>{
    get_rates()
})
chrome.alarms.create("30min", {
    delayInMinutes: 30,
    periodInMinutes: 30
});

chrome.alarms.onAlarm.addListener(function(alarm) {
    if (alarm.name === "30min") {
       get_rates()
    }
});