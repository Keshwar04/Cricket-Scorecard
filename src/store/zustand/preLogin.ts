import { create } from 'zustand';
import { passwordIcon, stateCredentialOrError } from '../../type/prelogin';


export const usePreLoginStore = create((set:any) => ({
  
    active: 'login',
    setActive: (form: string) => set(() => ({ active: form })),

    isboolean: {pwdIconShow:false, pwdInfoShow:false},
    setIsBoolean: (updatedValue:passwordIcon) => set(() => ({ isboolean: updatedValue })),

    errors: {} as stateCredentialOrError,
    setErrors: (errData: stateCredentialOrError) => set(() => ({errors: errData })),

    userCredntial: {} as any,
    setUserCredential: (credentialData: any) => set(() => ({ userCredntial: credentialData }))
    
}))