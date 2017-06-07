//CLASS
class Bus {
    construct (name, stops, colour, monFriTimes, friTimes) {
        this.name = name;
        this.stops = stops;
        this.monFriTimes = monFriTimes;
    }

    getStops() {
        console.log("this function will get all the stops for " + this.name)
        console.log(this.stops)
    }
}


//OBJECTS
var awapuni = new Bus ("awapuni", awapuniStops, "#f69238", awapuniTimesMonFri, awapuniTimesFriOnly);

var Rugby = new Bus ("Rugby", RugbyStops, "#f69238", RugbyTimesMonFri, RugbyTimesFriOnly);

var Highbury = new Bus ("Highbury", HighburyStops, "#f69238", HighburyTimesMonFri, HighburyTimesFriOnly);

var Takaro = new Bus ("Takaro", TakaroStops, "#f69238", TakaroTimesMonFri, TakaroTimesFriOnly);


//JQUERY STUFF
$(document).ready(function(){



});


//Help me please, oh please help me, im so lost and every moment in this class hurts my eart.
