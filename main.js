var quotes = ["To live is the rarest thing in the world. Most people exist, that is all.", "That it will never come again is what makes life so sweet.", "If there's a book that you want to read, but it hasn't been written yet, then you must write it.", "You can have everything in life, if you will just help other people get what they want.", "All the world's a stage, and all the men and women merely players.", "Be kind, for everyone you meet is fighting a hard battle.", "Unable are the loved to die for love is immortality.", "Let me live, love, and say it well in good sentences.", "Don't let your happiness depend on something you may lose.", "Ideas are like rabbits. You get a couple, learn how to handle them, soon you have a dozen."];

var author = ["Oscar Wilde", "Emily Dickinson", "George Eliot", "Toni Morrison", "Zig Ziglar", "William Shakespeare", "Plato", "Emily Dickinson", "Sylvia Plath", "John Steinbeck"];

var colorBack = ["#164B60", "#2D033B", "#5F264A", "#146C94", "#3A1078", "#6554AF", "#04293A", "#2E0249", "#1E5128", "#025464"];

function timeOfTheDay(){
    let time = new Date;
    let hour = time.getHours();

    var dayTime;
    if(hour < 12){
        dayTime = "morning";
    }
    else if(hour >= 12 && hour <= 17){
        dayTime = "afternoon";
    }
    else if(hour > 17 && hour <= 19){
        dayTime = "evening";
    }
    else if(hour > 19 && hour < 24){
        dayTime = "night";
    }

    $("#timeOfDay").text(dayTime);
}

timeOfTheDay();

$("#genQuote").click(function (e) { 
    var index = Math.floor(Math.random() * 10);
    $("#mainContent").text(`❝${quotes[index]}❞`);
    $("#author").text("-By " + author[index]);
    var newColor = colorBack[index];
    console.log(newColor);
    $("body, #genQuote").css("background-color", `${newColor}`);
    $("#mainContent, #author").css("color", `${newColor}`);
});