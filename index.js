async function fetchData(){
    let response=await fetch("https://api.rootnet.in/covid19-in/stats/latest")
    let result=await response.json();
    let reg=result.data.summary;
    //console.log(reg.total, reg.recovered, reg.deaths, reg.active)
    console.log(reg.total, reg.deaths)
}
fetchData();
let parent=document.getElementById("res");

        let dtlist=document.createElement("datalist");
        dtlist.setAttribute("id","myStateList");
        parent.append(dtlist);
        for(let i=0;i<reg.length;i++){
            let option=document.createElement("option");

  option.setAttribute("value",reg[i].loc);
            dtlist.append(option);
        }