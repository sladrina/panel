import React, { Component } from 'react';

class SidebarCard extends Component {
    state = { active: false, title:'' };

    render() {
        const { title='', children=''} = this.props;
        const { active } = this.state;
        return (
            <li className={`sidebar-navigation__item-wrap ${active ? 'active' : ''}`}>
                <span className="sidebar-navigation__item">
                    <span className="wrap">
                        <span className="sidebar-navigation__item-image">
                            {children}
                        </span>
                        <span className="sidebar-navigation__item-title">{title}</span>
                    </span>
                </span>
            </li>
        );
    }
}

export default SidebarCard;
