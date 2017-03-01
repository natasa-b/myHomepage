var x = 5
var y = 6
var z = x + y

var password = 'js-developer'

var carsArray = [
	"Opel",
	"Renault",
	"Citoren",
	"Porcshe"
]

var personObject = {
	firstName: "Simun",
	lastName: "Strukan",
	position: "JavaScript developer",
	email: "simun.strukan@gmail.com"
}

//Writting to console
console.log(z)
console.log(carsArray)

//defining functions 
function myFirstFunction(name) {

	//setting some var in function

	var msgContent = "Hello there," + name 

	console.log(msgContent)
}

//calling function 
myFirstFunction("Simun")

// alternative function definition
var mySecondFunction = function(car){
	var msgContent = "I drive " + car
	return msgContent
}

// calling and loging function in same line and passing array element as function parameter
console.log(mySecondFunction(carsArray[1]))

// Loops 
for (var i = 0; i < carsArray.length; i++) {
	// console.log(carsArray[i])
}

for (element in personObject) {
	// console.log(personObject[element])
}

//callbacks 

function parentFunction(callback) {
	//lets set some variable
	var someString = "Hello there"

	callback(someString) // whatever parameters we define here will be passed to our callbackFunction
}

function callbackFunction(someString) {
	//display alert
	alert(someString)
}

parentFunction(callbackFunction)

//alternate callbacks the jquery way

var myFunction = function(callback) {
	var msgContent = "Hello world!"
	callback(msgContent)
}

myFunction(function(msgContent){
	alert(msgContent)
})


// Using jquery
$(document).ready(function(){
	console.log("ready")

	// Simple login form

	$('#submit-btn').click(function() {
		var emailValid = false
		var passwordValid = false
		var emailRegex = /\S+@\S+\.\S+/
		var inputEmail = $('#input-email').val()
		var inputPassword = $('#input-password').val()

		if (emailRegex.test(inputEmail)) {
			emailValid = true
		}
		else {
			emailValid = false
			$('.output').text('Input email is not valid email')
		}

		if (inputPassword == password) {
			passwordValid = true	
		}
		else {
			$('.output').text('Provided login is incorrect')
			passwordValid = false
		}

		if (passwordValid && emailValid) {
			$('.output').text('You are cool')
			$('#input-email').val('')
			$('#input-password').val('')
		}

	})

	//Display default array contents
	function showArray() {
		var text = ''
		for (var i = 0; i < carsArray.length; i++) {
			text += carsArray[i] + '</br>'
		}	
		$('.array-output').html(text)
	}

	showArray()
	
	// Add element to array

	$('#append-btn').click(function() {
		var elementValue = $('#input-element').val()
		carsArray.push(elementValue)
		showArray()
		$('#input-element').val('')
	})
})

var comments = []

//Small comments box
$(document).ready(function(){
	
	var showComments = function() {
		$('.comments').empty()
		for (comment in comments) {
			$('.comments').append('<p>' + comments[comment].username + '</p>')
			$('.comments').append('<p>' + comments[comment].msg + '</p>')
		}
	}
	
	$('#comment-btn').click(function(){
		console.log("comment")
		var username = $('#input-username').val()
		var msg = $('#input-comment').val()
		
		var comment = {username: username, msg: msg}

		comments.push(comment)
		showComments()
	})
})


