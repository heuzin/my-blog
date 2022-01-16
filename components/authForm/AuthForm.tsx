import { useState, useRef, FormEvent } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import classes from './AuthForm.module.css';
import Link from 'next/link';

const createUser = async (email: string, password: string) => {
    const response = await fetch('/api/auth/signup', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || 'Something went wrong!');
    }

    return data;
};

const AuthForm = () => {
    const formRef = useRef<HTMLFormElement>(null);
    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);
    const confirmPasswordInputRef = useRef<HTMLInputElement>(null);
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(true);

    const router = useRouter();

    const switchAuthModeHandler = () => {
        setError('');
        formRef.current?.reset();
        setIsLogin((prevState) => !prevState);
    };

    const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const enteredEmail = emailInputRef.current?.value;
        const enteredPassword = passwordInputRef.current?.value;
        const enteredConfirmPassword = confirmPasswordInputRef.current?.value;

        if (!isLogin && enteredPassword !== enteredConfirmPassword) {
            setError('Passwords does not match!');
            return;
        }

        if (isLogin) {
            const result: any = await signIn('credentials', {
                redirect: false,
                email: enteredEmail,
                password: enteredPassword,
            });

            console.log(result);

            if (!result.error) {
                router.replace('/profile');
            } else {
                setError(result.error);
            }
        } else {
            try {
                await createUser(enteredEmail!, enteredPassword!);
            } catch (error) {
                setError((error as Error).message);
            }
        }
    };

    return (
        <section className={classes.auth}>
            <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
            {error && <p className={classes.error}>{error}</p>}
            <form ref={formRef} className={classes.form} onSubmit={submitHandler}>
                <div className={classes.controls}>
                    <div className={classes.control}>
                        <input
                            aria-label="email"
                            placeholder="Email"
                            type="email"
                            id="email"
                            required
                            ref={emailInputRef}
                        />
                    </div>
                    <div className={classes.control}>
                        <input
                            aria-label="password"
                            placeholder="Password"
                            type="password"
                            id="password"
                            required
                            ref={passwordInputRef}
                        />
                    </div>
                </div>
                {!isLogin && (
                    <div className={classes.control}>
                        <input
                            aria-label="confirm password"
                            placeholder="Confirm Password"
                            type="password"
                            id="confirm-password"
                            required
                            ref={confirmPasswordInputRef}
                        />
                    </div>
                )}

                <div className={classes.actions}>
                    <button>{isLogin ? 'Login' : 'Create Account'}</button>
                    <Link href={''}>
                        <a onClick={switchAuthModeHandler}>
                            {isLogin ? 'Create new account' : 'Login with existing account'}
                        </a>
                    </Link>
                </div>
            </form>
        </section>
    );
};

export default AuthForm;
