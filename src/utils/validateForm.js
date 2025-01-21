import {object, string,number} from "yup";


let userSchema = object ({
    fullname:string().min(4, "Debe tener almenos 4 caracteres del Nombre y Apellido").required(),
    mobile: number().positive( ).required(),
    email:string().email().required(),
})

const validateForm = async(dataForm) =>{
    try {
        await userSchema.validate(dataForm)
        return {status: "success", message: "Validaciones correctas!" }

    } catch (error) {
        return {status: "error", message: error.message }
    }
}
export default validateForm;