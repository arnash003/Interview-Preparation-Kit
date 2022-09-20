function timeConversion(s) {
    // Write your code here
    let amPm = s.charAt(8);
    let militaryHour = "";
    if (amPm == "A"){
        if (s.substring(0, 2) == "12"){
            militaryHour = "00";
        } 
        else {
            militaryHour = s.substring(0, 2);
        }
    }
    else {
        if (s.substring(0, 2) == 12){
            militaryHour = s.substring(0, 2);
        } else {
            militaryHour = parseInt(s.substring(0, 2), 10) + 12;
        }
    }
        return militaryHour + s.substring(2,8);
    }
    
    // 1) 12am -> 00
    // 2) 1am to 12pm -> do nothing
    // 3) 1pm to 11pm -> take hour, add 12 eg 3pm = 15
