const validation = (values) => {

    let errors={};

    if(!values.fullname){
        errors.fullname="Name required."
    }
    if(!values.email){
        errors.email="email required."
    } else if(!/\S+@\S+\.\S+/.test(values.email)){
        errors.email="Email is invalid."
    }
    if(!values.password){
        errors.password="password required."
    } else if (values.password.length < 5){
        errors.password="password must be more than five characters"
    }

    return errors;

}

export default validation;