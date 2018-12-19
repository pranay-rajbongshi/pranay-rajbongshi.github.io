const clock = document.querySelector('.clock')

setInterval(
    function(){
        let date = new Date().toTimeString().split(" ")[0]
        clock.innerHTML = date
    },
    1000
)