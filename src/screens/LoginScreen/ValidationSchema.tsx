import * as yup from 'yup';
export const ValidationSchema = yup.object().shape({
    email: yup
        .string()
        .email('Please enter a valid email')
        .required('Email is required'),
    password: yup
        .string()
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
            'Your password must meet the following criteria:At least 8 characters long,Contains at least one special character (e.g., @, #, $), Contains at least one uppercase letter, Contains at least one lowercase letter, Contains at least one number'
        )
        .required('Password is required'),
});