import { credentialOrErrorType} from "../type/prelogin";

export const validator = (userCredntial:credentialOrErrorType,fieldState:string) =>{

    const regexMail = /^([A-Za-z0-9$])+\@([a-z])+\.([a-z])+$/;
    const regexPwd = /^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$]).{4,})+$/;
    const error = {} as credentialOrErrorType
   
    if(!userCredntial.name){
        error.name = 'Enter Username'
    }else if(userCredntial.name.length < 4){
        error.name = 'Username must be 4 character'
    }else{
        error.name = ''
    }
    if (!userCredntial.mail) {
      error.mail = 'Enter email'
    } else if (!regexMail.test(userCredntial.mail)) {
      error.mail = 'Enter valid email format'
    } else {
     error.mail = ''
    }

    if (!userCredntial.pwd) {
      error.pwd = 'Enter password'
    } else if (!regexPwd.test(userCredntial.pwd)) {
      error.pwd = 'update'
    }else{
      error.pwd = ''
    }

    if(fieldState === 'login'){
      delete error.name
    }

    return error;
}