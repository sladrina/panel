import React, { Component } from 'react';
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import SellerTable from "../components/SellerTable";

export default class Dashboard extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="page-header">
                    <span className="title">Компании</span>
                </div>
                <div className="page__wrapper">
                    <div className="main-row">
                        <div className="page-title">Список компаний</div>
                        <div className="searchbar"><SearchBar placeholder={'Поиск'} /></div>
                    </div>
                    <SellerTable rows={[
                        {number:1, name: 'Apple Inc.', manager:'John', status: 'online', title: 'Online'},
                        {number:2, name: 'Microsoft Inc.', manager:'Sarah', status: 'offline', title: 'Offline'},
                        {number:3, name: 'Google Inc.', manager:'Addie', status: 'away', title: 'Away'},
                    ]}
                    />
                </div>
                <Footer text={'2020 MyCompany'} />
            </div>
        );
    }
}
