import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {ReactComponent as IconMore} from "../images/svg/more.svg";
import {ReactComponent as IconEdit} from "../images/svg/edit.svg";
import {ReactComponent as IconArchive} from "../images/svg/archive.svg";
import {ReactComponent as IconDelete} from "../images/svg/delete.svg";


class ButtonMore extends Component {
    state = {active: false};

    handleExpandCard = () => this.setState({ expanded: !this.state.expanded });

    render() {
        const { expanded } = this.state;

        return (
            <div className={`seller-table__more ${expanded ? 'active' : ''}`} onClick={this.handleExpandCard}>
                <div className="more">
                    <IconMore />
                </div>
                    <div className="actions">
                        <ul className="actions-list">
                            <li>
                                <NavLink className="actions-list__item" to="/" >
                                    <IconEdit className={'item'} />
                                    <span>Редактировать</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="actions-list__item" to="/" >
                                    <IconArchive className={'item'} />
                                    <span>Архивировать</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink className="actions-list__item" to="/" >
                                    <IconDelete className={'item'} />
                                    <span>Удалить</span>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
            </div>
        );
    }
}

export default ButtonMore;
