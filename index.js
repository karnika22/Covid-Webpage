async function fetchData(){
    let response=await fetch("https://api.rootnet.in/covid19-in/stats/latest")
    let result=await response.json();
    let reg=result.data.summary;
    //console.log(reg.total, reg.recovered, reg.deaths, reg.active)
    console.log(reg.total, reg.deaths)
        let parent=document.getElementsByClassName("text");
        parent.append(reg.total);
    }
fetchData();