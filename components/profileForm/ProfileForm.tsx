import { FormEvent, useRef } from 'react';

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
        <form onSubmit={submitHandler}>
            <div>
                <label htmlFor="new-password">New Password</label>
                <input type="password" id="new-password" ref={newPasswordRef} />
            </div>
            <div>
                <label htmlFor="old-password">Old Password</label>
                <input type="password" id="old-password" ref={oldPasswordRef} />
            </div>
            <div>
                <button>Change Password</button>
            </div>
        </form>
    );
};

export default ProfileForm;
