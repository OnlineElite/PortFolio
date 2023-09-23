// fill the tech skills range

const techSkills = [
    { name : 'HTML5', range : 95 },
    { name : 'CSS3', range : 95 },
    { name : 'Bootstrap', range : 95 },
    { name : 'JavaScript', range : 85 },
    { name : 'DOM', range : 98},
    { name : 'JSON', range : 94 },
    { name : 'HTTP', range : 93 },
    { name : 'AJAX', range : 90 },
    { name : 'PostgreSQL', range : 90 },
    { name : 'Node.js', range : 30 }
]

techSkills.forEach((val) => {
    const techlang = document.getElementById('techlang')
        const techname = document.createElement('div')
        techname.classList.add('techname')
            const langNmae = document.createElement('p')
            langNmae.textContent = val.name;
        techname.appendChild(langNmae)
            const outer = document.createElement('div')
            outer.classList.add('outer')
                const inner = document.createElement('div')
                inner.classList.add('inner')
                inner.style.width = val.range+"%";
            outer.appendChild(inner)
        techname.appendChild(outer)
    techlang.appendChild(techname)
})


const freeTimeTasks = [
    {name : 'Internet browsing' , percent : 15},
    {name : 'Programming' , percent : 50},
    {name : 'Travel' , percent : 15},
    {name : 'Sports' , percent : 20}
]


const numbers = document.getElementsByClassName('number')
const taskNames = document.getElementsByClassName('taskName')
freeTimeTasks.forEach((val) => {
    
    for(let num of numbers){
        for(let task of taskNames){
            console.log(task.getAttribute('name'))
            if(num.getAttribute('name') == task.getAttribute('name') & num.getAttribute('name') == val.name){
                console.log(`numid ${num.getAttribute('name')} taskid ${task.getAttribute('name')}`)
                let counter = 0;
                setInterval(() =>{
                    if(counter == val.percent){
                        clearInterval()
                    }else{
                        counter += 1;
                        num.textContent = counter + "%";
                    }
                }, 40)
                task.textContent = val.name;
            }
            else{
                continue;
            }
        }
    }
})

//hellow