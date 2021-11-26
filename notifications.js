
async function fetchNotifications(){
    let response=await fetch("https://api.rootnet.in/covid19-in/notifications");
    let result = await response.json();
    let parent=document.getElementById("notice");
    let notices=result.data.notifications;

    for(let i=0;i<notices.length;i++){
        parent.innerHTML+=` <ul ><li className="newnotice"> ${notices[i].title} <br> <a href="${notices[i].link}">Follow Resource</a></li> </ul>`
    }
}
fetchNotifications();

