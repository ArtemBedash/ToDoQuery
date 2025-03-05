import * as Yup from 'yup';


export const validationSchema = Yup.object().shape({
    firstName: Yup.string().required().min(2,"Minimum 2 characters"),
    lastName: Yup.string().required().min(2,"Minimum 2 characters"),
    company: Yup.string().required().min(2,"Minimum 2 characters"),
    birthDate: Yup.string().required().matches( /^\d{2}\.\d{2}\.\d{4}$/,"dd.mm.year"),
    email: Yup.string().email('Invalid email').required()
})