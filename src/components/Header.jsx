import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as IconMenu } from '../images/svg/menu.svg';
import { ReactComponent as IconLogo } from '../images/svg/logo.svg';
import { ReactComponent as IconUser } from '../images/svg/user.svg';
import { ReactComponent as IconArrow } from '../images/svg/arrow-down.svg';
import { ReactComponent as IconLogout } from '../images/svg/logout.svg';

class Header extends Component {
    state = {};

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, false);
    }

    handleMenu = () => this.setState({ open: !this.state.open });

    handleClickOutside = event => {
        const domNode = this.list;
        if (!domNode || !domNode.contains(event.target)) {
            this.setState({
                open: false,
            });
        }
    };

    handleDropdown = () => this.setState({ open: !this.state.open });

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, false);
    }

    render() {
        const { avatar } = this.props;
        const { open } = this.state;

        return (
            <header className="header">
                <div className="header-wrap">
                    <nav className="header-menu">
                        <div className="header-logo_wrap">
                            <NavLink to="/" className="header-logo">
                                <IconLogo />
                            </NavLink>
                            <NavLink to="/" className="header-logo_toggler">
                                <IconMenu />
                            </NavLink>
                        </div>
                        <div className="header-user" ref={el => (this.list = el)} onClick={this.handleMenu}>
                            <div
                                className={`header-user_wrap ${open ? 'show' : ''}`}
                                onClick={this.handleDropdown}
                            >
                                <NavLink className="header-user_profile" to="/" >
                                    <div className="header-user_profile-wrap">
                                        {avatar ? <div className="header-user_profile-avatar" /> : <IconUser />}
                                    </div>
                                    <div className="header-user_profile-select">
                                        <span className="name">Алексей</span>
                                        <IconArrow />
                                    </div>
                                </NavLink>
                            </div>
                            {open && (
                                <ul className="header-user_dropdown">
                                    <li className={`header-user_dropdown-item`}>
                                        <NavLink className="description" to="/">
                                            <span className="image">
                                                <IconLogout />
                                            </span>
                                            <span className="title">Выход</span>
                                        </NavLink>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </nav>
                </div>
            </header>
        );
    }
}

export default Header;
