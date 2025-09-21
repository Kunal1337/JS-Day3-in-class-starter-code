const members = [
    {first_name:"John", last_name: "Doe", email:"johndoe@example.com", birthdate:"1999-12-31", salary:80000},
    {first_name:"Jane", last_name: "Smith", email:"janesmith@example.com", birthdate:"2015-09-01", salary:75000}
];



//OLD WAY DEMO - CONSTRUCTOR FUNCTION

class Employee {
    constructor(firstName, lastName, email, birthdate) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.birthdate = birthdate;
    }
    getEmployee() {
    return {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        birthdate: this.birthdate
    };
}

    static addEmployee(firstName, lastName, email, birthdate) {
        const newEmp = new Employee(firstName, lastName, email, birthdate);
        return newEmp;
    }
    editEmployee(updates) {
        Object.assign(this, updates);
    }
}

const newEmp = new Employee("Kunal", "Biswas", "kunal31905@example.com", "2005-03-19");

console.log(newEmp);
console.log(newEmp.firstName);
console.log(newEmp.lastName);

const employees = [new Employee ("joe", "mama", "jjoe@gmail.com", "2001-01-19"),
                   new Employee("sue","perman", "sPerman@yahoo.com", "1995-11-09"),
                   new Employee("harry", "potter", "hpotter@gmail.com", "1990-07-31")]
                   
console.log("All Employees:", employees);


// parts of emp 
employees.forEach(emp => {
    console.log(`Name: ${emp.firstName} ${emp.lastName}, Email: ${emp.email}`);
});

                     


                    //ES6 way - CLASSES - Create a new Employee class that adds a new employee and console logs them
  // Goals:
  // 1. Create a new Employee class with a constructor for Employee giving them a firstname, lastname, email, and birthdate
// 2. Instantiate (i.e. create a new instance) of an Employee with your info and save it to a const with your first name
// 3. After step 2, console log your const and then try to console.log parts of the object
// 4. Then create a const array that creates many "new Employee" objects and says to an array.  Console this object as a whole and parts of it
// 5. Add methods to your class to "getEmployees" which just returns all the fields in the object.
//    Also add methods to addEmployee (this will be static) and a method to editEmployee
//    Test your methods using JS
// 6. Try to get instances of your class object to display in the table.  You can set the innerhtml of the
//    of the table to be empty and then replace it with the looped-through values of your object

function displayEmployees(employees) {
    const tbody = document.querySelector("#employeeTable tbody");
    tbody.innerHTML = ""; // 

    employees.forEach(emp => {
        const empData = emp.getEmployee();
        const row = `
            <tr>
                <td>${empData.firstName}</td>
                <td>${empData.lastName}</td>
                <td>${empData.email}</td>
                <td>${empData.birthdate}</td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}

displayEmployees(employees);


//Try to output 3 instances of your class object into the table




// callbacks



function verifyPaymentC(orderTotal, callback) {  
    setTimeout(() => {
        if (orderTotal < 5000) {
            callback(null, `Payment of $${orderTotal} verified successfully`);
        } else {
            callback(`Payment of $${orderTotal} requires manager approval`, null);
        }
    }, 1000); 
}

// Show result in the <p id="day3-text">
verifyPayment(3000, (error, result) => {
    const display = document.getElementById("day3-text");
    display.textContent = error || result;
});




function verifyPaymentP(orderTotal) {   //promise only 
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (orderTotal < 5000) {
                resolve(`Payment of $${orderTotal} verified successfully`);
            } else {
                reject(`Payment of $${orderTotal} requires manager approval`);
            }
        }, 1000);
    });
}

// Call it and display the result
verifyPayment(3000)
    .then(result => {
        document.getElementById("day3-text").textContent = result;
    })
    .catch(error => {
        document.getElementById("day3-text").textContent = error;
    });




function verifyPayment(orderTotal) {    //promise
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (orderTotal < 5000) {
                resolve(`Payment of $${orderTotal} verified successfully`);
            } else {
                reject(`Payment of $${orderTotal} requires manager approval`);
            }
        }, 1000);
    });
}

// Async function that takes a dynamic orderTotal
async function showPaymentA(orderTotal) {    //Async/Await/Promise
    const display = document.getElementById("day3-text");
    try {
        const result = await verifyPayment(orderTotal);
        display.textContent = result;
    } catch (error) {
        display.textContent = error;
    }
}

verifyPayment(3000); 
