//Current Project File 
var bio = {
	"name" : "Ashish Apte",
	"role" : "Programmer",
	"contacts" : {
		"mobile" : "65-12345678",
		"email" : "ashish@example.com",
		"github" : "ashishapte78",
		"twitter" : "@ashish",
		"location" : "Singapore"
 	},
 	"welcomeMessage" : "Bacon in sunt dolor fatback excepteur turkey chuck velit.",
 	"skills" : ["Unix Shell Scripting","Perl Programming","Web Developer","System Administration"],
 	"biopic" : "images/fry.jpg"
}

var education = {
	"schools" : [
		{
			"name" : "International Secondary School",
			"location" : "Tampines, Singapore",
			"degree" : "SSC",
			"majors" : ["Maths","Science"],
			"dates" : "2001",
			"url" : "http://internationalsecschool.com"
		},
		{
			"name" : "Elite Junior College",
			"location" : "Citihall, Singapore",
			"degree" : "HSC",
			"majors" : ["Maths","Phusics","Chemistry"],
			"dates" : "2003",
			"url" : "http://elitejuniorcollege.com"
		},
		{
			"name" : "Singapore University",
			"location" : "Changi, Singapore",
			"degree" : "Bachelor Of Computer Science",
			"majors" : ["Digital Systems","Programming"],
			"dates" : "2007",
			"url" : "http://elitesingaporeuniversity.com"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Python Programming",
			"school" : "Udacity",
			"date" : "2012",
			"url" : "http://udacity.com"
		},
		{
			"title" : "JavaScript Programming",
			"school" : "Coursera",
			"date" : "2013",
			"url" : "http://courseera.com"
		}
	]
}

var work = {
	"jobs" : [
		{
			"employer" : "Google",
			"title" : "Frontend Developer",
			"location" : "Bangalore, India",
			"dates" : "Jan 2007 - May 2011",
			"description" : "Bacon ipsum dolor sit amet shoulder drumstick spare ribs shank, magna in sirloin. Turducken dolore tempor irure tenderloin pork belly shankle. Excepteur in strip steak pork chop voluptate tongue, hamburger nostrud kevin enim nulla ut cow incididunt."
		},
		{
			"employer" : "LinkedIn",
			"title" : "Senior Web Developer",
			"location" : "California, USA",
			"dates" : "May 2011 - Dec 2014",
			"description" : "Ad tri-tip short loin anim beef ribs eu ball tip velit deserunt frankfurter sunt nisi filet mignon. Pork loin quis ham hock mollit cupidatat. Id ground round chuck jerky meatball laborum frankfurter short loin in biltong t-bone doner ea irure. Culpa ex ut id."
		},
		{
			"employer" : "Apple",
			"title" : "Lead Architect",
			"location" : "Apple, Singapore",
			"dates" : "May 2014 - Tilldate",
			"description" : "Turducken dolore tempor irure tenderloin pork belly shankle. Excepteur in strip steak pork chop voluptate tongue, hamburger nostrud kevin enim nulla ut cow incididunt. Do pancetta swine hamburger incididunt in excepteur irure pig labore est venison dolor ex adipisicing. Labore capicola veniam, commodo corned beef ut non rump swine pork chop exercitation ball tip ham deserunt."
		}
	]
}

var projects = {
	"project" : [
		{
		"title" : "Website Optimization Project",
		"dates" : "052008-052010",
		"description" : "Bacon ipsum dolor sit amet shoulder drumstick spare ribs shank, magna in sirloin. Turducken dolore tempor irure tenderloin pork belly shankle. Excepteur in strip steak pork chop voluptate tongue, hamburger nostrud kevin enim nulla ut cow incididunt.",
		"images" : [ "images/project1_1.jpg","images/project1_2.jpg" ]
		},
		{
		"title" : "Building Web Templates",
		"dates" : "012013-012015",
		"description" : "Ad tri-tip short loin anim beef ribs eu ball tip velit deserunt frankfurter sunt nisi filet mignon. Pork loin quis ham hock mollit cupidatat. Id ground round chuck jerky meatball laborum frankfurter short loin in biltong t-bone doner ea irure.",
		"images" : [ "images/project2_1.jpg","images/project2_2.jpg" ]
		}
	]
}





bio.bioDisplay = function () {
	//bio Display Function
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);
	var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%",bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
	var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	$('#header').prepend(formattedRole);
	$('#header').prepend(formattedName);
	$('#header').prepend(formattedBioPic);
	$('#topContacts').append(formattedMobile);
	$('#topContacts').append(formattedEmail);
	$('#topContacts').append(formattedTwitter);
	$('#topContacts').append(formattedGithub);
	$('#topContacts').append(formattedLocation);

	$('#header').append(formattedWelcomeMsg);
	$('#header').append(HTMLskillsStart);

	if(bio.skills.length > 0) {
		var skillslen = bio.skills.length;
		for (var i = 0; i < skillslen; i++) {
			var formattedSkills = HTMLskills.replace("%data%",bio.skills[i]);
			
			$('#skills').append(formattedSkills);
		}
	}

	$('#footerContacts').append(formattedMobile);
	$('#footerContacts').append(formattedEmail);
	$('#footerContacts').append(formattedTwitter);
	$('#footerContacts').append(formattedGithub);
	$('#footerContacts').append(formattedLocation);

}


work.workDisplay = function () {
	//Work Display Function
	$('#workExperience').append(HTMLworkStart);

	if (work.jobs.length > 0) {
		var joblen = work.jobs.length;
		for (var i = 0; i < joblen; i++ ) {
			var formatttedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[i].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[i].title);
			var formattedDates = HTMLworkDates.replace("%data%",work.jobs[i].dates);
			var formattedDesc = HTMLworkDescription.replace("%data%",work.jobs[i].description);
			
			$('.work-entry:last').append(formatttedEmployer + formattedTitle);
			$('.work-entry:last').append(formattedDates);
			$('.work-entry:last').append(formattedDesc);
		}
	}
}

education.eduDisplay = function () {
	//Education Display Function
	
	$('#education').append(HTMLschoolStart);

	if (education.schools.length > 0) {
		var schlen = education.schools.length;

		for ( var i = 0; i < schlen; i++ ) {
			var formattedSchName = HTMLschoolName.replace("%data%",education.schools[i].name);
			var formattedSchDegree = HTMLschoolDegree.replace("%data%",education.schools[i].degree);
			var formattedSchDates = HTMLschoolDates.replace("%data%",education.schools[i].dates);
			var formattedSchLocation = HTMLschoolLocation.replace("%data%",education.schools[i].location);
			var formattedSchMajor = HTMLschoolMajor.replace("%data%",education.schools[i].majors);

			$('.education-entry:last').append(formattedSchName + " " + formattedSchDegree);
			$('.education-entry:last').append(formattedSchDates);
			$('.education-entry:last').append(formattedSchLocation);
			$('.education-entry:last').append(formattedSchMajor);
		}
	}

	if (education.onlineCourses.length > 0) {

		// $('.education-entry:last').append(HTMLonlineClasses);
		// $('#education:last').append(HTMLschoolStart);
		$('.education-entry:last').append(HTMLonlineClasses);

		var courselen = education.onlineCourses.length;

		for (var j = 0; j < courselen; j++) {
			var formattedOnlineTitle = HTMLonlineTitle.replace("%data%",education.onlineCourses[j].title);
			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%",education.onlineCourses[j].school);
			var formattedOnlineDates = HTMLonlineDates.replace("%data%",education.onlineCourses[j].date);
			var formattedOnlineURL = HTMLonlineURL.replace("%data%",education.onlineCourses[j].url);

			$('.education-entry:last').append(formattedOnlineTitle  + formattedOnlineSchool);
			$('.education-entry:last').append(formattedOnlineDates);
			$('.education-entry:last').append(formattedOnlineURL);
		}
		
	}
	

}


projects.projectDisplay = function () {
	//Project Display Function
	$('#projects').append(HTMLprojectStart);

	

	if (projects.project.length > 0) {
		var projlength = projects.project.length

		for (var i = 0; i < projlength; i++ ) {
			var formattedProjTitle = HTMLprojectTitle.replace("%data%",projects.project[i].title);
			var formattedProjDates = HTMLprojectDates.replace("%data%",projects.project[i].dates);
			var formattedProjDesc = HTMLprojectDescription.replace("%data%",projects.project[i].description);

			$('.project-entry:last').append(formattedProjTitle);
			$('.project-entry:last').append(formattedProjDates);
			$('.project-entry:last').append(formattedProjDesc);

			var projimagelength = projects.project[i].images.length;
			if (projimagelength > 0) {
				for (var j = 0; j < projimagelength; j++) {
					var formattedProjImage = HTMLprojectImage.replace("%data%",projects.project[i].images[j]);
					$('.project-entry:last').append(formattedProjImage);
				}
			}
		}
	}
	
}


// Other Functions 

var otherFunctions = {};
otherFunctions.mapDisplay = function () {
	$('#mapDiv').append(googleMap);
}



bio.bioDisplay();
work.workDisplay();
projects.projectDisplay();
education.eduDisplay();
otherFunctions.mapDisplay();