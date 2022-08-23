import { Paths } from '../../const';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { MouseEvent } from 'react';
import { logoutAction } from '../../services/api-actions';

export function SignOut(): JSX.Element {
  const { email, avatarURL } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const clickHandler = (evt: MouseEvent<HTMLAnchorElement>): void => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <NavLink to={Paths.Favorites} className="header__nav-link header__nav-link--profile">
            <div className="header__avatar-wrapper user__avatar-wrapper">
              {avatarURL && <img src={avatarURL} alt="avatar" />}
            </div>
            <span className="header__user-name user__name">{email}</span>

            {email && <span className="header__favorite-count">3</span>} {/* нужно сделать загрузку список избранных сразу по факту авторизации */}

          </NavLink>
        </li>
        <li className="header__nav-item">
          <NavLink onClick={clickHandler} to={Paths.Root} className="header__nav-link">
            <span className="header__signout">Sign out</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
