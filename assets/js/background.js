console.log("Its BackGround");

chrome.tabs.onActivated.addListener((tab) => {
  //console.log(tab);
  chrome.tabs.get(tab.tabId, (currentTabData) => {
    //console.log(currentTabData.url);
    //scripting content js with background js
  //  if(currentTabData.url !== "chrome://newtab/"){
  //     chrome.scripting.executeScript({
  //      target: {tabId: currentTabData.id},
  //       file : ['/assets/js/content.js'],
  //     });
  //   }

  //send message to content page
  // setTimeout(()=>{
  //   chrome.tabs.sendMessage(
  //     tab.tabId,
  //     "Hello Content. Iam From Background . This is Tab Id " + tab.tabId,
  //     //take response from content page
  //     (response)=> {
  //         console.log(response);
  //     }
  // )
  // },2000)
    
  })
})
//rcv message from content page 


// window.addEventListener("message", (e)=>{
//   console.log(`Received message: ${e.data.search_string}`);
// });


chrome.runtime.onMessage.addListener((message, sender , sendResponse) => {
  console.log(message);
  console.log(sender);
  sendResponse("HI Content Page . I am From Laravel");//send response to background js
});


