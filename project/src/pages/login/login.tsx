import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import { AccessType, EMAIL_REG_EXP, PASSWORD_REG_EXP, Paths } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { loginAction } from '../../services/api-actions';

export function Login(): JSX.Element {
  const { authorizationStatus } = useAppSelector((state) => state);
  const [isValid, setSubmitValidStatus] = useState(false);
  const [currentFormData, setFormData] = useState({
    email: '',
    password: '',
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (authorizationStatus === AccessType.authorized) {
      navigate(Paths.Root);
    }
  }, [authorizationStatus, navigate]);

  const formSubmitHandler = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (isValid) {
      const login = currentFormData.email;
      const password = currentFormData.password;
      dispatch(loginAction({ login, password }));
    }
  };

  const emailChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...currentFormData, [name]: value });
    validateSigninForm(value, currentFormData.password);
  };

  const passwordChangeHandler = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...currentFormData, [name]: value });
    validateSigninForm(currentFormData.email, value);
  };

  const validateSigninForm = (email: string, password: string) => {
    setSubmitValidStatus(EMAIL_REG_EXP.test(email) && PASSWORD_REG_EXP.test(password));
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={formSubmitHandler}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input className="login__input form__input" type="email" name="email" placeholder="Email" required onChange={emailChangeHandler} />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input className="login__input form__input" type="password" name="password" placeholder="Password" required onChange={passwordChangeHandler} />
              </div>
              <button className="login__submit form__submit button" type="submit" disabled={!isValid}>Sign in</button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
