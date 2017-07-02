// _____________________________________________________________________________
// Get elements from the DOM
var form = document.getElementById("test-form");
var oBar = document.getElementById("bar-o");
var oBarCaption = oBar.firstElementChild;
var cBar = document.getElementById("bar-c");
var cBarCaption = cBar.firstElementChild;
var eBar = document.getElementById("bar-e");
var eBarCaption = eBar.firstElementChild;
var aBar = document.getElementById("bar-a");
var aBarCaption = aBar.firstElementChild;
var nBar = document.getElementById("bar-n");
var nBarCaption = nBar.firstElementChild;

// _____________________________________________________________________________
// Set up the events so that the score is calculated when test results are submitted
function scoreTest(event) {
	event.preventDefault();

	// Calculate the score for the test
	var oResult = 8 + Number(form.elements["q5"].value) - Number(form.elements["q10"].value) + Number(form.elements["q15"].value) - Number(form.elements["q20"].value) + Number(form.elements["q25"].value) - Number(form.elements["q30"].value) + Number(form.elements["q35"].value) + Number(form.elements["q40"].value) + Number(form.elements["q45"].value) + Number(form.elements["q50"].value);
	var cResult = 14 + Number(form.elements["q3"].value) - Number(form.elements["q8"].value) + Number(form.elements["q13"].value) - Number(form.elements["q18"].value) + Number(form.elements["q23"].value) - Number(form.elements["q28"].value) + Number(form.elements["q33"].value) - Number(form.elements["q38"].value) + Number(form.elements["q43"].value) + Number(form.elements["q48"].value);
	var eResult = 20 + Number(form.elements["q1"].value) - Number(form.elements["q6"].value) + Number(form.elements["q11"].value) - Number(form.elements["q16"].value) + Number(form.elements["q21"].value) - Number(form.elements["q26"].value) + Number(form.elements["q31"].value) - Number(form.elements["q36"].value) + Number(form.elements["q41"].value) - Number(form.elements["q46"].value);
	var aResult = 14 - Number(form.elements["q2"].value) + Number(form.elements["q7"].value) - Number(form.elements["q12"].value) + Number(form.elements["q17"].value) - Number(form.elements["q22"].value) + Number(form.elements["q27"].value) - Number(form.elements["q32"].value) + Number(form.elements["q37"].value) + Number(form.elements["q42"].value) + Number(form.elements["q47"].value);
	var nResult = 38 - Number(form.elements["q4"].value) + Number(form.elements["q9"].value) - Number(form.elements["q14"].value) + Number(form.elements["q19"].value) - Number(form.elements["q24"].value) - Number(form.elements["q29"].value) - Number(form.elements["q34"].value) - Number(form.elements["q39"].value) - Number(form.elements["q44"].value) - Number(form.elements["q49"].value);

	// Add the test results to the score graph
	oBarCaption.textContent = "Openness: " + oResult;
	cBarCaption.textContent = "Conscientiousness: " + cResult;
	eBarCaption.textContent = "Extraversion: " + eResult;
	aBarCaption.textContent = "Agreeableness: " + aResult;
	nBarCaption.textContent = "Neuroticism: " + nResult;
}

form.onsubmit = scoreTest
