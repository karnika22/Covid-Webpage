    async function fetchData(){
        let response=await fetch("https://api.rootnet.in/covid19-in/stats/latest")
        let result=await response.json();
        let reg=result.data.summary;

        let total=document.querySelector("#total");
        total.innerHTML=`<div> <h2> ${reg.total}</h2></div>`

        let death=document.querySelector("#death");
        death.innerHTML=`<div> <h2> ${reg.deaths}</h2></div>`


    }
    fetchData();
