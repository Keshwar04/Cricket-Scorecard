import { create } from 'zustand';


export const usePreLoginStore = create((set: any) => ({
  
    active: 'login',
    setActive: (form: any) => {
        set(() => ({ active: form }))
    },

    isboolean: {pwdIconShow:false, pwdInfoShow:false},
    setIsBoolean: (updatedValue:any) => {
        set(() => ({ isboolean: updatedValue }))
    },

    errors: { login: { name: '', mail: '', pwd: '' }, signup: { name: '', mail: '', pwd: '' } },
    setErrors: (errData: any) => {
        set(() => ({errors: errData }))
    },

    userCredntial: { login: { name: '', mail: '', pwd: '' }, signup: { name: '', mail: '', pwd: '' } },
    setUserCredential: (credentialData: any) => {
        set(() => ({ userCredntial: credentialData }))
    }



}))