import React from 'react';
import {ReactComponent as IconShop} from "../images/svg/business.svg";
import {ReactComponent as IconSettings} from "../images/svg/settings.svg";
import SidebarCardWithProps from "./SidebarCardWithProps";
import SidebarCard from "./SidebarCard";


const Sidebar = () =>
    <div className="sidebar">
        <ul className="sidebar-navigation">
            <SidebarCardWithProps
                title={'Dashboard1'}
                options={[
                    { id: 0, label: 'Dashboard2', value: '' },
                    { id: 1, label: 'Dashboard3', value: '' },]}
            >
                <IconShop />
            </SidebarCardWithProps>
            <SidebarCard title={'Settings1'}><IconSettings /></SidebarCard>
            <SidebarCard title={'Settings2'}><IconSettings /></SidebarCard>
        </ul>
    </div>;

export default Sidebar;
