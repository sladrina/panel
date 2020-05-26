import React, { Component } from 'react';
import {ReactComponent as IconArrow} from "../images/svg/arrow-down.svg";
import {ReactComponent as IconSettings} from "../images/svg/settings.svg";

class SidebarCardWithProps extends Component {
    state = { expanded: false, title:'' };

    handleExpandCard = () => this.setState({ expanded: !this.state.expanded });

    render() {
        const { expanded } = this.state;
        const { title='',options = [], children='' } = this.props;
        return (
            <li className={`sidebar-navigation__item-wrap ${expanded ? 'expanded' : ''}`} onClick={this.handleExpandCard}>
                <span className="sidebar-navigation__item">
                    <span className="wrap">
                        <span className="sidebar-navigation__item-image">
                            {children}
                        </span>
                        <span className="sidebar-navigation__item-title">{title}</span>
                    </span>
                    <span className="sidebar-navigation__item-arrow">
                        <IconArrow className={'arrow'} />
                    </span>
                </span>
                {expanded && (
                    <ul className="sidebar-navigation__list">
                        {options.map(option => (
                            <li className={`sidebar-navigation__list-item-wrap`} key={option.value}>
                                <a className="sidebar-navigation__list-item" href="/">
                                    <span className="sidebar-navigation__list-item-image">
                                        <IconSettings />
                                    </span>
                                    <span className="sidebar-navigation__list-item-title">{option.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </li>
        );
    }
}

export default SidebarCardWithProps;
