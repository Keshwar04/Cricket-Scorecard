export type buttonType = {
    title: string,
    activeTitle: boolean,
    handleClick: () => void,
    width: any
}

export type eventType = {
    target: {
        name: string,
        value: string
    }
}

export type credentialOrErrorType = {
    name: string | undefined,
    mail: string,
    pwd: string
}

export type stateCredentialOrError = {
    login?: {
        name: string,
        mail: string,
        pwd: string
    },
    signup?: {
        name: string,
        mail: string,
        pwd: string
    }
}

export type passwordIcon = {
    pwdIconShow?:boolean,
    pwdInfoShow?:boolean
}

// export type zustandObject = {
//     active:string,
//     setActive:(form: string) => void,
//     isboolean: passwordIcon,
//     setIsBoolean:(updatedValue:passwordIcon) => void,
//     userCredntial:stateCredentialOrError,
//     setUserCredential:(credentialData: stateCredentialOrError) => void,
//     errors:stateCredentialOrError,
//     setErrors:(errData: stateCredentialOrError) => void
// }

