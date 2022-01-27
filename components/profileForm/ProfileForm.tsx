import { FormEvent, useRef } from 'react';
import classes from './ProfileForm.module.css';

const ProfileForm = (props: any) => {
    const oldPasswordRef = useRef<HTMLInputElement>(null);
    const newPasswordRef = useRef<HTMLInputElement>(null);

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const enteredOldPassword = oldPasswordRef.current?.value;
        const enteredNewPassword = newPasswordRef.current?.value;

        props.onChangePassword({
            oldPassword: enteredOldPassword,
            newPassword: enteredNewPassword,
        });
    };
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor="new-password">New Password: </label>
                <input type="password" id="new-password" ref={newPasswordRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor="old-password">Old Password: </label>
                <input type="password" id="old-password" ref={oldPasswordRef} />
            </div>
            <button className={classes.button}>Change Password</button>
        </form>
    );
};

export default ProfileForm;
