const carousels = document.querySelectorAll("div.portfolioEntry-images")

let isDragStart = false, previousPageX, previousScrollLeft



for(let i = 0; i < carousels.length; i++)
{
    const dragstart = (e) =>{
        isDragStart = true
        previousPageX = e.pageX
        previousScrollLeft = carousels[i].scrollLeft
    }
    
    const dragging = (e) =>{
        if(!isDragStart)
            return
        e.preventDefault()
        let posDifference = e.pageX - previousPageX
        carousels[i].scrollLeft = previousScrollLeft - posDifference
    }
    
    const dragstop = () =>{
        isDragStart = false
    }


    carousels[i].addEventListener("mousedown", dragstart)
    carousels[i].addEventListener("mousemove", dragging)
    carousels[i].addEventListener("mouseup", dragstop)
}




