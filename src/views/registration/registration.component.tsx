import React, {useRef} from 'react';
import {Link, Navigate, useNavigate} from 'react-router-dom';
import {useForm} from "react-hook-form";
import {observer} from "mobx-react-lite";
import stylesContainer from '../../shared/styles/container.module.css';
import stylesButtonsBlock from '../../shared/styles/buttons-container.module.css';
import stylesFormFieldsBlock from '../../shared/styles/form-fields-block.module.css';
import {Button, Input} from "../../shared/ui";
import {Path} from "../../shared/route";
import {AuthStore} from "../../store/auth-store";

type RegistrationDataType = {
    email: string;
    nickName: string;
    password: string;
    checkPassword: string;
}

const Registration = observer(() => {

    const {
        register,
        handleSubmit,
        watch,
        formState: {isSubmitting, errors}
    } = useForm<RegistrationDataType>();
    const password = useRef({});
    const navigate = useNavigate()
    password.current = watch("password", "");

    const {registration, authorization} = AuthStore;

    const registrationSubmitHandler = (dataForm: RegistrationDataType): void => {
        const {email, nickName, password} = dataForm;
        registration(email, nickName, password)
        navigate(Path.signIn)
    }

    if (authorization) {
        return <Navigate to={Path.trades}/>
    }

    return (
        <form
            className={stylesContainer.container}
            onSubmit={handleSubmit(registrationSubmitHandler)}
        >
            <h2>Sign Up</h2>
            <div className={stylesFormFieldsBlock.inputBlock}>
                <Input
                    {...register("email", {required: "This field is required."})}
                    placeholder="email"
                />
                {errors?.email?.message &&
                <span className={stylesFormFieldsBlock.error}>{errors?.email?.message}</span>}
                <Input
                    {...register("nickName", {required: "This field is required."})}
                    placeholder="nick name"
                />
                {errors?.nickName?.message &&
                <span className={stylesFormFieldsBlock.error}>{errors?.nickName?.message}</span>}
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
                <Input
                    {...register("checkPassword", {
                        required: "This field is required.",
                        validate: value => value === password.current || "The passwords do not match"
                    })}
                    placeholder="check password"
                    type="password"
                />
                {errors?.checkPassword?.message &&
                <span className={stylesFormFieldsBlock.error}>{errors?.checkPassword?.message}</span>}
            </div>
            <div className={stylesButtonsBlock.buttonBlock}>
                <Button type="submit" disabled={isSubmitting}>
                    Register
                </Button>
                <div className={stylesButtonsBlock.signIn}>
                    <div>Do you have an account?</div>
                    <div>
                        <Link to={Path.signIn} className={stylesButtonsBlock.link}>
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </form>
    );
});

export default Registration;