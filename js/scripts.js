let hands = ["✊", "🖐", "✌"];
let score = 0;

function play(playerHand){
    let index = Math.floor(Math.random() * 3);
    let cpuHand = hands[index];
    let result;

    if(cpuHand === playerHand) result = "Draw.";
    else{
        switch(playerHand){
            case '✊':
                if(cpuHand === '🖐'){
                    result = "Paper covers rock. CPU wins.";
                    if(score > 0) score--;
                }
                else{
                    result = "Rock crushes scissors. Player wins.";
                    score++;
                }
                break;
            case '🖐':
                if(cpuHand === "✊"){
                    result = "Paper covers rock. Player wins.";
                    score++;
                }
                else{
                    result = "Scissors cuts paper. CPU wins.";
                    if(score > 0) score--;
                }
                break;
            default:
                if(cpuHand === "✊"){
                    result = "Rock crushes scissors. CPU wins.";
                    if(score > 0) score--;
                }
                else{
                    result = "Scissors cuts paper. Player wins.";
                    score++;
                }
        }
    }

    document.getElementById("scoreSpan").innerText = score.toString();
    document.getElementById("resultTable").innerHTML +=
        "<tr>" +
            "<td>" + playerHand + "</td>" +
            "<td>" + cpuHand + "</td>" +
            "<td>" + result + "</td>" +
        "</tr>";
}