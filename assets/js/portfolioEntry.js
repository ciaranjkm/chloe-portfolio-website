console.log("portfolioEntry.js is running...")

class portfolioEntry{
    constructor(){
        this.imageOne = document.createElement("img")
        this.imageTwo = document.createElement("img")
        this.imageThree = document.createElement("img")
        this.caption = document.createElement("a")
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
        const captionsText = [
            "this is the caption text", // id 0
            "", // id 1
            "", // id 2
            "", // id 3
            "", // id 4
            ""  // id 5
        ]
        const captionLinks = [
            "", // optional links to add for credits.
            "",
            "",
            "",
            "",
            ""
        ]
     
        var p = document.createElement("p")
        p.textContent = captionsText[eID]

        if(captionLinks[eID] == "")
        {
            this.caption.append(p)
        }
        else
        {
            this.caption.setAttribute('href', captionLinks[eID])
            this.caption.setAttribute('target', "_blank")
            this.caption.append(p)
        }
        console.log(this.caption)

        this.caption.classList.add("portfolioEntryCaption")
    }

    populateImages(){
        this.imageOne.setAttribute('id', this.entryID+"1")
        this.imageTwo.setAttribute('id', this.entryID+"2")
        this.imageThree.setAttribute('id', this.entryID+"3")

        this.imageOne.src="./assets/images/Portfolio/"+this.entryID+"1.png"
        this.imageTwo.src="./assets/images/Portfolio/"+this.entryID+"2.png"
        this.imageThree.src="./assets/images/Portfolio/"+this.entryID+"3.png"    
    }
}

function createPortfolioEntries(){
    let newEntryDiv = document.createElement("div")

    let mCW = document.createElement("div")    
    mCW.classList.add("portfolioEntry")

    let count = 0
    while(count < 1){ //CHANGE THIS NUMBER TO CHANGE THE AMOUNT OF ENTRIES ON THE PAGE (will not create entries with less than 3 images and a caption.)
        console.log("creating entries.")
        let newEntry = new portfolioEntry()

        newEntry.setEntryID(count.toString())
        newEntry.setCaption(count.toString());
        
        newEntry.populateImages()
        console.log(newEntry.imageOne, newEntry.imageTwo, newEntry.imageThree)

        if(newEntry.imageOne.height != 0)
        {
            console.log("check")
            if(newEntry.imageTwo.height != 0)
            {
                if(newEntry.imageThree.height != 0)
                {
                    if(newEntry.caption.firstChild.textContent != "")
                    {
                        console.log("check")
                        newEntryDiv.appendChild(newEntry.imageOne)
                        newEntryDiv.appendChild(newEntry.imageTwo)
                        newEntryDiv.appendChild(newEntry.imageThree)
                        newEntryDiv.appendChild(newEntry.caption)              
        
                        mCW.append(newEntryDiv)
                    }                    
                }                   
            }
        }//This is disgusting....

        console.log(mCW)
        let divToAddTo = document.getElementById('mainContentWindow_portfolio')
        divToAddTo.append(mCW)
        
        count++  
    } 
}




