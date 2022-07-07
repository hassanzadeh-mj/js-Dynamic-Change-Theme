const Colors = document.querySelectorAll(".btn")



Colors.forEach(Color=> {
Color.addEventListener("click", (event) => {
    let btnColor=event.target.dataset.color
    document.documentElement.style.setProperty( "--theme-color",btnColor )
})
})

// in react js
// Colors.forEach(Color=> {
//     Color.addEventListener("click", (event) => {
//         let btnColor=event.currentTarget.dataset.color
//         document.documentElement.style.setProperty( "--theme-color",`${btnColor}` )
//     })
//     })
