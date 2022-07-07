const Colors = document.querySelectorAll(".btn")



Colors.forEach(Color=> {
Color.addEventListener("click", (event) => {
    let btnColor=event.target.data
    console.log(btnColor)
})
})