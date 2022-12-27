console.log("its working");
//send message to background page
document.documentElement.setAttribute('amazonxtra-extension-installed', true);

// chrome.runtime.sendMessage(
//     "Hello Amazon",
//     //take response from background page
//     (response)=> {
//         console.log(response);
//     }
// )


// chrome.runtime.onMessage.addListener((message, sender , sendResponse) => {
//   console.log(message);
//   console.log(sender);
//   sendResponse("HI Content Page . I am From Laravel");//send response to background js
// });




window.addEventListener("message", (e)=>{
    console.log(`Received message: ${e.data.search_string}`);
    chrome.runtime.sendMessage(
      e.data.search_string,
        //take response from background page
        (response)=> {
            console.log(response);
        }
    )
  });

