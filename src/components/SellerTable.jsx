import React from 'react';
import ButtonMore from "./ButtonMore";

const SellerTable = ({ rows = [] }) => {
    return (
        <div className="seller-table__wrapper">
            <table className="seller-table">
                <thead>
                <tr>
                    <th>№</th>
                    <th>Название организации</th>
                    <th>ИНН</th>
                    <th>Статус</th>
                    <th>Действия</th>
                </tr>
                </thead>

                <tbody>
                {rows.map(row => (
                    <tr key={row.name}>
                        <td>{row.number}</td>
                        <td>{row.name}</td>
                        <td>{row.manager}</td>
                        <td>
                            <span className={`button-status offline ${row.status}`}>{row.title}</span>
                        </td>
                        <td>
                            <ButtonMore />
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default SellerTable;
