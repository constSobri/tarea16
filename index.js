const parrafos = document.querySelectorAll(".parrafo")
const imagen = document.querySelectorAll(".imagen")

parrafos.forEach(parrafo => {
    parrafo.addEventListener("dragstart", event => {
        parrafo.classList.add("dragging")
        event.dataTransfer.setData("id", parrafo.id)
    })

    parrafo.addEventListener("dragend", event => {
        parrafo.classList.remove("dragging")
    })
})

imagen.forEach(papelera => {
    papelera.addEventListener("dragover", event =>{
        event.preventDefault()
    })

    papelera.addEventListener("drop", event => {
        const id_parrafo = event.dataTransfer.getData("id")
        const parrafo = document.getElementById(id_parrafo)
        parrafo.remove()
    })
})