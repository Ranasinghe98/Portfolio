import React from 'react'
import './customCursor.css'

let cursor = document.querySelector('.cursor')
let cursorLazy = document.querySelector('.cursor-lazy')
//let links = document.querySelectorAll('a')

let editCursor = function editCursor(event){
    cursor.style.left = event.clientX + 'px'
    cursor.style.top = event.clientY + 'px'
    cursorLazy.style.left = event.clientX + 'px'
    cursorLazy.style.top = event.clientY + 'px'
}

window.addEventListener('mousemove', editCursor)

const CustomCursor = () => {
    return(<>

        <div className="cursor"></div>
        <div className="cursor-lazy"></div>

    </>)
}

export default CustomCursor
