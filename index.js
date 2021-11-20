    async function fetchData(){
        let response=await fetch("https://api.rootnet.in/covid19-in/stats/latest")
        let result=await response.json();
        let reg=result.data["unofficial-summary"][0];
        console.log(reg)
        let total=document.querySelector("#total");
        total.innerHTML=`<h2> ${reg.total}</h2>`

        let death=document.querySelector("#death");
        death.innerHTML=` <h2> ${reg.deaths}</h2>`

        let recovered=document.querySelector("#recovered");
        recovered.innerHTML=` <h2> ${reg.recovered}</h2>`

        let active=document.querySelector("#active");
        active.innerHTML=` <h2> ${reg.active}</h2>`


    }
    fetchData();
