const form_validation = (steps, data) => {
    var regemail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    var regmob = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/i;
    const errors = {};

    switch(steps){
        case 0: 
            if(!data.name){
                errors.name = "Required";
                console.log(typeof data.name);
            }else if(data.name.charAt(0) === data.name.charAt(0).toLowerCase() || !isNaN(data.name.charAt(0)) ){
                errors.name = "Your first name's letter should be Capitalized!"
            }else if(/\d/.test(data.name)){
                errors.name = "Your name shouldn't consist of letters!"
            }
            else if(data.name.length >= 12){
                errors.name = 'Your name should be no more 12 charachters, please try again';
            }else if(data.name.length < 3){
                errors.name = "Enter valid name (fullname)!"
                console.log(typeof data.name.slice(0));
            }

            
            if(!data.surname){
                errors.surname = "Required";
            }else if(data.surname.charAt(0) === data.surname.charAt(0).toLowerCase() || !isNaN(data.surname.charAt(0))){
                errors.surname = "Your first surname's letter should be Capitalized!"
            }else if(/\d/.test(data.surname)){
                errors.surname = "Your name shouldn't consist of letters!"
            }else if(data.surname.length >= 12){
                errors.surname = 'Your surname should be no more 12 charachters, please try again';
            }else if(data.surname.length < 3){
                errors.surname = "Enter valid name (fullname)!"
            }

            if(!data.pass){
                errors.pass = "Required";
                console.log(data.pass == data.pass.charAt(0).toLowerCase());
            }else if(data.pass.charAt(0) === data.pass.charAt(0).toLowerCase() || !isNaN(data.pass.charAt(0))){
                errors.pass = "Your password's first letter should be Capitalized and not a digit";
                console.log(isNaN(data.pass.charAt(0)));
            }else if(data.pass.length >= 10){
                errors.pass = 'Your password should be no more 10 charachters, please try again';
            }else if(data.pass.length < 5){
                errors.pass = "Enter valid password!"
            }

            if(!data.repeatpass){
                errors.repeatpass = 'Required';
            }else if(data.repeatpass !== data.pass){
                errors.repeatpass = `Passwords didn't match, try again!`;
            }
            break;
        case 1:
            if(!data.email.length){
                errors.email = "Required";
            }else if(!regemail.test(data.email)){
                errors.email = "Invalid email";
             }

            if(!data.mobile){
                errors.mobile = "Required";
            }else if(!regmob.test(data.mobile)){
                errors.mobile = "Invalid mobile";
             }

            if(!data.city){
                errors.city = "Required";
            }

            break;
            case 2: 
            
                if(!data.image){
                    errors.image = 'Required';
            }
            break;
            default:
            break;
    }

    return errors;

}

export default form_validation;