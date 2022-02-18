import React from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import {useForm} from "react-hook-form";
import {observer} from "mobx-react-lite";
import stylesContainer from '../../shared/styles/container.module.css';
import stylesButtonsBlock from '../../shared/styles/buttons-container.module.css';
import stylesFormFieldsBlock from '../../shared/styles/form-fields-block.module.css';
import {Button, Input} from "../../shared/ui";
import {Path} from "../../shared/route";
import {AuthStore} from "../../store/auth-store";

type LoginDataType = {
    email: string;
    password: string;
}

const Login = observer(() => {

    const {register, handleSubmit, formState: {isSubmitting, errors}} = useForm<LoginDataType>();
    const {login, authorization} = AuthStore;
    const navigate = useNavigate()

    const loginSubmitHandler = (dataForm: LoginDataType): void => {
        const {email, password} = dataForm
        login(email, password)
        navigate(Path.trades)
    }

    if (authorization) {
        return <Navigate to={Path.trades}/>
    }

    return (
        <form
            className={stylesContainer.container}
            onSubmit={handleSubmit(loginSubmitHandler)}
        >
            <h2>Sign In</h2>
            <div className={stylesFormFieldsBlock.inputBlock}>
                <Input
                    {...register("email", {required: "This field is required."})}
                    placeholder="email"
                />
                {errors?.email?.message &&
                <span className={stylesFormFieldsBlock.error}>{errors?.email?.message}</span>}
                <Input
                    {...register("password", {
                        required: "This field is required.",
                        minLength: {
                            value: 8,
                            message: "Password must have at least 8 characters"
                        }
                    })}
                    placeholder="password"
                    type="password"
                />
                {errors?.password?.message &&
                <span className={stylesFormFieldsBlock.error}>{errors?.password?.message}</span>}
            </div>
            <div className={stylesButtonsBlock.buttonBlock}>
                <Button type="submit" disabled={isSubmitting}>
                    Sign in
                </Button>
                <div className={stylesButtonsBlock.signIn}>
                    <div>Don't have an account?</div>
                    <div>
                        <Link to={Path.signUp} className={stylesButtonsBlock.link}>
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </form>
    );
});

export default Login;