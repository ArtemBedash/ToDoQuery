import {FormikProvider, useFormik} from "formik";
import {TextField} from "@mui/material";
import {AppButton} from "~/ui";
import {validationSchema} from "~/pages/Form/Form.validations.ts";
import{useAddDataMutation,useGetDataQuery,useUpdateDataMutation} from "~/store/api/userDataApi.ts";

interface IFormValues {
    firstName: string;
    lastName: string;
    company: string;
    birthDate: string;
    email: string;
}

const initialValues:IFormValues = {
    firstName: "",
    lastName: "",
    company: "",
    birthDate: "",
    email: "",
}


export const Form = () => {
const{data: userData = []} = useGetDataQuery();
    const [addData] = useAddDataMutation();
    const[updateData] = useUpdateDataMutation();


    const onSubmit = async (e: any) => {
        const user = userData.find(user => user.email === values.email)

        console.log(user)
        console.log(values)
        e.preventDefault();
        console.log(errors);
        if(user){
            await updateData({id:user.id,...values})
        }
        else{ await addData( {id: Date.now().toString(),...values})}


    }

    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    })

    const {
        values,
    errors,
    touched,
    // isValid,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit,
        dirty,
        submitCount

} = formik;


    return (
        <FormikProvider value={formik}>
            <div
                style={{
                    height: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <form onSubmit={handleSubmit}>
                    <TextField
                        name='firstName'
                        value={values.firstName}
                        onChange={handleChange}
                        label="First Name"
                        error={(touched.firstName || submitCount > 0) && !!errors.firstName}
                        helperText={(touched.firstName || submitCount > 0) && errors.firstName}
                        onBlur={handleBlur}

                    />
                    <TextField
                        name='lastName'
                        value={values.lastName}
                        onChange={handleChange}
                        label="Last Name"
                        error={touched.lastName && !!errors.lastName}
                        helperText={touched.lastName && errors.lastName}
                        onBlur={handleBlur}

                    />
                    <TextField
                        name='company'
                        value={values.company}
                        onChange={handleChange}
                        label="Company"
                        error={touched.company && !!errors.company}
                        helperText={touched.company && errors.company}
                        onBlur={handleBlur}


                    />
                    <TextField
                        name='birthDate'
                        value={values.birthDate}
                        onChange={handleChange}
                        label="Birth Date"
                        error={touched.birthDate && !!errors.birthDate}
                        helperText={touched.birthDate && errors.birthDate}
                        onBlur={handleBlur}


                    />
                    <TextField
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                        label="Email"
                        error={touched.email && !!errors.email}
                        helperText={touched.email && errors.email}
                        placeholder="john@acme.com"
                        onBlur={handleBlur}



                    />

                    <AppButton type='submit' onClick={onSubmit} disabled={!dirty|| isSubmitting}>Submit</AppButton>
                </form>
            </div>
        </FormikProvider>
    );
};

export default Form;