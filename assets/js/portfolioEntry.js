console.log("portfolioEntry.js is running...")

class portfolioEntry{
    constructor(){
        this.imageOne = document.createElement("img")
        this.imageTwo = document.createElement("img")
        this.imageThree = document.createElement("img")
        this.caption = document.createElement("p")
        this.entryID = String

        this.imageOne.classList.add("portfolioImage")
        this.imageTwo.classList.add("portfolioImage")
        this.imageThree.classList.add("portfolioImage")
    }   

    setEntryID(eID){
        this.entryID = eID
    }

    setCaption(eID) //Captions can be changed here. Write captions in speech marks.
    {
        const captions = [
            "caption for image 0", // id 0
            "caption for image 1", // id 1
            "caption for image 2", // id 2
            "caption for image 3", // id 3
            "caption for image 4", // id 4
            "caption for image 5"  // id 5
        ]
        
        this.caption.textContent = captions[eID]
        this.caption.classList.add("portfolioEntryCaption")
    }

    populateImages(){
        this.imageOne.id = (this.entryID+"1")
        this.imageTwo.id =(this.entryID+"2")
        this.imageThree.id = (this.entryID+"3")

        this.imageOne.src="./assets/images/Portfolio/"+this.entryID+"1.png"
        this.imageTwo.src="./assets/images/Portfolio/"+this.entryID+"2.png"
        this.imageThree.src="./assets/images/Portfolio/"+this.entryID+"3.png"    
    }
}

function createPortfolioEntries(){
    let newEntryDiv

    const mCW = document.createElement("div")    

    let count = 0
    while(count < 1){ //CHANGE THIS NUMBER TO CHANGE THE AMOUNT OF ENTRIES ON THE PAGE (will not create entries with less than 3 images and a caption.)
        console.log("creating entries.")
        newEntryDiv = document.createElement("div")
        newEntryDiv.classList.add("portfolioEntryDiv")

        let newEntry = new portfolioEntry()

        newEntry.setEntryID(count.toString())
        newEntry.setCaption(count.toString())
        newEntry.populateImages()

        if(newEntry.imageOne.height != 0)
        {
            if(newEntry.imageTwo.height != 0)
            {
                if(newEntry.imageThree.height != 0)
                {
                    if(newEntry.caption.textContent != "")
                    {
                        newEntryDiv.appendChild(newEntry.imageOne)
                        newEntryDiv.appendChild(newEntry.imageTwo)
                        newEntryDiv.appendChild(newEntry.imageThree)
                        newEntryDiv.appendChild(newEntry.caption)              
        
                        mCW.appendChild(newEntryDiv)
                    }                    
                }                   
            }
        }//This is disgusting....

        console.log(mCW)
        document.body.insertBefore(mCW, document.getElementById("portfolio_footer"))
        count++  
    } 
}




