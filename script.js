 function calculateArea() {
            // Get the radius from the user using the prompt() function
            let radius = prompt("Enter the radius of the circle:");
            // write you code here and display the result to the user
 
	 let radiusInput = parseFloat(radius); 
	 
     if( isNaN(radiusInput)||radiusInput <= 0 ){
		 alert("Please enter a valid positive number.");
		 return 
	 }

	 let area = Math.PI * radius * radius;

	 alert(`The area of the circle with radius ${radiusInput} is ${area.toFixed(2)}`);

	 return area
           
}
calculateArea();
