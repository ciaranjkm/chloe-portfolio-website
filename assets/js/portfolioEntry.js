console.log("this script is running.")

class portfolioEntry{
    constructor(){
        this.imageOne = document.createElement("img")
        this.imageTwo = document.createElement("img")
        this.imageThree = document.createElement("img")
        this.caption = String
        this.entryID = String

        this.imageOne.classList.add("portfolioImageOne")
        this.imageTwo.classList.add("portfolioImageTwo")
        this.imageThree.classList.add("portfolioImageThree")
    }   

    setEntryID(eID){
        this.entryID = eID
    }

    populateImages(){
        this.imageOne.id = (this.entryID+"1")
        this.imageTwo.id =(this.entryID+"2")
        this.imageThree.id = (this.entryID+"3")

        this.imageOne.src="../assets/images/Portfolio/"+this.entryID+"1.png"
        this.imageTwo.src="../assets/images/Portfolio/"+this.entryID+"2.png"
        this.imageThree.src="../assets/images/Portfolio/"+this.entryID+"3.png"        
    }
}

function createPortfolioEntries(){
    var newEntryDiv

    var count = 0
    while(count < 6){
        var newEntryDiv = document.createElement("div")
        newEntryDiv.classList.add("portfolioEntryDiv")

        var newEntry = new portfolioEntry()

        newEntry.setEntryID(count.toString())
        newEntry.populateImages()

        newEntryDiv.appendChild(newEntry.imageOne)
        newEntryDiv.appendChild(newEntry.imageTwo)
        newEntryDiv.appendChild(newEntry.imageThree)

        count++
    }
    document.body.insertBefore(newEntryDiv, document.getElementById("portfolio_footer"))
}





