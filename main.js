//main operation

function Operation(number) {
    let exit = false;
    if (localStorage.getItem(1) === null || localStorage.getItem(1) == 0) {
        Register();
    }
    while (exit == false) {
        let number = parseInt(prompt("Enter the operation number"));
       
        if (isNaN(number) == true) {
            alert("Please enter a valid number");
            continue;
        }

        if (number == 4) {
            exit = true;
        }

        if (number == 1) {
            //function for operation 1
            Login();
            //  localStorage.setItem(1, creds); ici  bosdu yoxsa doludu onu yoxlamaq lazimdi.
            //Bosdusa register funk ise dusmelidi yox eger doludusa update info calisdirmaq olar

        }
        else if (number == 2) {
            if (localStorage.getItem(3) != null) {
                continue;
            }
            if (localStorage.getItem(1) != null) {
                continue;
            }
            //function for operation 2
            Register();


        }
        else if (number == 3) {
            //function for operation 3
            if (localStorage.getItem(3) == null) {
                continue;
            }
            UpdateInformation();
        }
        else if (number == 4) {
            exit = true;
        }
        else {
            alert("There is no operation related to this number");
        }

    }

}




function Login() {
    let exit = false;
    let email = null;
    let password = null;
    while (exit == false) {
        email = prompt("Enter your email for Login");
        password = prompt("Enter your password for Login");
        exit = true;
    }
    let logCred = [email, password];
    localStorage.setItem(3, logCred);


    console.log(localStorage.getItem(3));
}

console.log(localStorage.getItem(3));

function Register() {
    let exit = false;
    while(exit == false){

    let name = prompt("Enter your name for Register");
    if (name == ""){
        alert("you can't leave name empty");
        //throw new Error("you can't leave name section empty");
        continue;
    }
    let surname = prompt("Enter your surname for Register");
    if (surname == ""){
        alert("you can't leave surname empty");
        //throw new Error("you can't leave name section empty");
       continue;
    }
    let RegisterEmail = prompt("Enter your email Register");
    if (RegisterEmail  == ""){
        alert("you can't leave email empty");
        //throw new Error("you can't leave name section empty");
    }
    let RegisterPassword = prompt("Enter your password for Register");
    if (RegisterPassword == ""){
        alert("you can't leave password empty");
        //throw new Error("you can't leave name section empty");
        continue;
    }else{
        exit = true;
    }
    
    
    let creds = [name, surname, RegisterEmail, RegisterPassword];

    console.log(creds);
    
    localStorage.setItem(1, creds);
    

    }
}

console.log(localStorage.getItem(1));


function UpdateInformation() {
    
    let UpdateName = prompt("change your name");
    let UpdateSurname = prompt("change your surname");
    let UpdateEmail = prompt("change your email");
    let UpdatePassword = prompt("change your password");
    let Updatecreds = [UpdateName, UpdateSurname, UpdateEmail, UpdatePassword];

    console.log(Updatecreds);
    localStorage.setItem(2, Updatecreds);
    localStorage.removeItem(1);
    localStorage.setItem(1, Updatecreds);

    //refresh den sonra da melumatlar qalir
}


console.log(localStorage.getItem(2));
//setItem de olan melumatlari almaq ucun istifade edilir


console.log(Operation());

