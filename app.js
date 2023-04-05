
// let date = document.getElementById('date')
// let description = document.getElementById('description').value
// console.log(description)

//

let tasks = []

function randertask(){
let tskcontianer = document.getElementById('checkbox')
tskcontianer.innerHTML=""
tasks.map((task)=>{
    let div = document.createElement('div')
    let checkbox = document.createElement('input')
    checkbox.setAttribute("type", "checkbox")
    let label = document.createElement('label')
    let date = document.createElement('p')

    

    label.innerText = task.description
    date.innerText = task.date
    div.classList.add('form')

    console.log(task)

tskcontianer.appendChild(div)
div.appendChild(checkbox)
div.appendChild(label)
div.appendChild(date)


})


}

function sucessalert(){
    let sucessalert = document.getElementById('sucessalert')
    sucessalert.innerText='task added successfully '
    sucessalert.classList.add('sucess-alert')

    setTimeout(()=>{
        sucessalert.classList.remove('sucess-alert')
        sucessalert.innerText=""
    },2000)

}



function add() {
      let  date = document.getElementById("myDate")
      let description = document.getElementById('description')
      let paragraph = document.getElementById('paragraph')
      paragraph.style.display='none'
    // console.log(description)
    //  console.log(date)
    let registartask = {
       date: date.value,
       description: description.value
    }
    tasks.push(registartask)
randertask()
sucessalert()
}
    