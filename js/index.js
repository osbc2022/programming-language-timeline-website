let timelineHolder = document.querySelector(".timeline-holder");

function toHTML(data){
    let htmldata = data.map((val , i) => {
        let count = i+1;
        if(count%2 === 0){
             return `
                <div class="timeline flex-left">
                    <span class="date"><span class="left"> ${val.date} </span></span> 
                    <span class="line">
                        <div class="dot">.</div>
                    </span>
                    <span class="content text-right">
                        <h3 class="right"> ${val.heading} </h3>
                        <p>${val.description}</p>
                    </span>
                </div>
            `
        }
        else{
            return `
                <div class="timeline">
                    <span class="date text-right"><span class="right"> ${val.date} </span></span> 
                    <span class="line">
                        <div class="dot">.</div>
                    </span>
                    <span class="content">
                        <h3 class="left"> ${val.heading} </h3>
                        <p>${val.description}</p>
                    </span>
                </div>
            `

        }
    })

    return htmldata.join(" ");
}

timelineHolder.innerHTML = toHTML(data);
