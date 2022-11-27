function calculateGrade(){
	let grade = document.getElementById("grade").value;
    
	    if (grade > 100) {
	       document.getElementById("result").innerHTML = `Invalid.`
	    }
	    else if (grade >= 79) {
		document.getElementById("result").innerHTML = `Your grade is A.`
	     }
	    else if (grade >= 60 ) {
		document.getElementById("result").innerHTML = `Your grade is B`
	    }
	    else if (grade >= 49) {
		document.getElementById("result").innerHTML = `Your grade is C.`
	    }
	    else if (grade >= 40) {
		document.getElementById("result").innerHTML = `Your grade is D.`
	    }
	    else if  (grade > 0 ) {
		document.getElementById("result").innerHTML = `Your grade is E.`
	    }
	    else if (grade < 0) {
		document.getElementById("result").innerHTML = `Invalid.`
	     }
	    else {
		document.getElementById("result").innerHTML = `Invalid`
	    }
    }