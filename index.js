var today = new Date();
var time = today.getHours();
var greeting;
if (time < 12) {
    greeting = "Good Morning EveryBody";
}
else if (time > 12) {
    greeting = "Good AfterNoon EveryBody";

}
absenties = [""];
for (i = 1; i <=60; i++) {


    var x = document.createElement("button");


    x.setAttribute("type", "button");
    x.setAttribute("class", "btn btn-success");
    x.setAttribute("data-toggle", "button");
    x.setAttribute("aria-pressed", "false");




    x.innerHTML = i;


    document.getElementById("xxx").appendChild(x);
}





function getHost() {


    for (i = 1; i <= 5; i++) {
        var z = document.getElementsByClassName("btn btn-primary s")[i - 1];
        s = z.getAttribute("aria-pressed");
        if (s === "true") {
            var z1 = z.innerHTML;
            return "Host: " + z1 ;
            
        }


    }
    return "Host not selected";

}
function getCoHost() {


    for (i = 1; i <= 4; i++) {
        var z = document.getElementsByClassName("btn btn-primary c")[i - 1];
        s = z.getAttribute("aria-pressed");
        if (s === "true") {
            var z1 = z.innerHTML;
            return "Co-Host:" + z1 ;

        }


    }
    return "Co-Host not selected";

}

function getHour() {


    for (i = 1; i <= 5; i++) {
        var z = document.getElementsByClassName("btn btn-primary h")[i - 1];
        s = z.getAttribute("aria-pressed");
        if (s === "true") {
            var z1 = z.innerHTML;
            return z1 + "Hour Attendance";

        }
    }



}
function getAbsenties() {

    absroll = "Absenties:";
    presroll = "Presenties:";
    for (i = 1; i <= 60; i += 1) {

        var z = document.getElementsByClassName("btn btn-success")[i - 1];

        var z1 = z.getAttribute("aria-pressed");
        if (z1 === "true") {
            absroll = absroll + "," + i.toString();
        }
        else {
            presroll = presroll + "," + i.toString();
        }

    }


    document.getElementById("rrr").value = greeting+"\n"+getHour() + "\n" +getHost() + "\n" +getCoHost()+"\n"+presroll + "\n" + absroll;


}
function CopytoClipBoard() {
    /* Get the text field */
    var copyText = document.getElementById("rrr");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
    
    /* Alert the copied text */
    alert("Copied the text " );
  }