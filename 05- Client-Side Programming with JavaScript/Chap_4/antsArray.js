//from antsArray.html

var distractionList = Array("", "suck his thumb", "tie his shoe",
                            "climb a tree", "shut the door");

function makeSong(){
    var output = document.getElementById("output");
    output.innerHTML = "";
    for(verseNumber =1; verseNumber < distractionList.length; verseNumber++){
        output.innerHTML += verse(verseNumber);
        output.innerHTML += chorus(verseNumber);
    }//end loop
}//end makeSong

function chorus(){
    var result = "...and they all go marching down <br/>";
    result += "to the ground <br/>";
    result += "to get out <br/>";
    result += "of the rain. <br />";
    result += "boom boom boom boom <br />";
    result += "boom boom boom boom <br /> <br/>";
    return result;
}//end chorus

function verse(verseNumber){
    var distraction = distractionList[verseNumber];
    
    var result = "The ants go marching ";
    result += verseNumber + " by " + verseNumber + ", ";
    result += "hurrah, hurrah <br/>";
    result += "The ants go marching ";
    result += verseNumber+ " by "+ verseNumber + ", ";
    result += "hurrah, hurrah <br/>";
    result += "The ants go marching ";
    result += verseNumber+ " by "+ verseNumber + "<br/>";
    result += "The little one stops to";
    result += distraction + "<br/> <br/>";
    
    return result;
}