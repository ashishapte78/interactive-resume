// $("#main").append("Ashish Apte");
// var awesomeThoughts = "I am Ashish and I am AWESOME";
// var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
// console.log(awesomeThoughts);
// console.log(funThoughts);
// $("#main").append(funThoughts);
//var formattedName = "Ashish Apte";
//var formattedRole = "Web Developer";
//var name =  "Ashish Apte";
//var role = "Web Developer";
//var formattedName = HTMLheaderName.replace("%data%",name);
//var formattedRole = HTMLheaderRole.replace("%data%",role);
//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);
//$("#header").prepend(HTMLheaderName.replace("%data%",formattedName));
//$("#header").append(HTMLheaderRole.replace("%data%",formattedRole));
//var s = "audacity";
//var udacityizer = function(s){
//	s = s.slice(1);
//	s = s.charAt(0).toUpperCase() + s.slice(1);
//	return s;
//}
//var new1 = orig.slice(1);
//console.log(udacityizer(s));
var name = "AlbERt EINstEiN";

function nameChanger(oldName) {
	var finalName = oldName;
	var arrayOfName = finalName.split(" ");
	var firstName = arrayOfName[0].toLowerCase();
	//console.log(firstName);
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    //console.log(firstName);
    var lastName = arrayOfName[1].toUpperCase();
    finalName = firstName + " " + lastName;

	return finalName;

}

// console.log(nameChanger(name));
var skills = [ "Programming","Scripting","Unix"];

var bio = {
	"name" : "Ashish Apte",
	"role" : "Programmer",
	"contact" : { 
		"mobile" : 6591088291,
		"email" : "ashish@example.com",
		"github" : "ashishapte78",
		"twitter" : "@ashish",
		"location" : "Singapore"
	},
	"bioPic" : "images/me.jpg",
	"WelcomeMessage" : "Welcome to my page",
	"skills" : ["Programming","Scripting","Unix Administration"]
};

var work = {};
work.jobPosition = "Vice President";
work.employer = "XYZ Company";
work.experence = "10 Years";
work.city = "Singapore";

var education = {};
education["name"] = "B.E. Computer Science";
education["lastSchool"] = "Mumbai University";
education["lastSchoolYear"] = "2000";
education["lastSchoolCity"] = "Mumbai";

//console.log(bio.name);

var formattedName = HTMLheaderName.replace("%data%",bio.name);
var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
var formattedMessage = HTMLWelcomeMsg.replace("%data%",bio.WelcomeMessage);
var formattedBioPic = HTMLbioPic.replace("%data%",bio.bioPic);
var formattedMobile = HTMLmobile.replace("%data%",bio.contact.mobile);

var formattedWorkTitle = HTMLworkTitle.replace("%data%",work.jobPosition);
var formattedSchoolDegree = HTMLschoolDegree.replace("%data%",education.name);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").prepend(formattedBioPic);
$("#header").append(formattedMobile);
$("#header").append(formattedWorkTitle);
$("#header").append(formattedSchoolDegree);

