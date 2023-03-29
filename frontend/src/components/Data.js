import React, { useState, useEffect } from "react";
import Papa from "papaparse";

function Data() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("\\data\\county_production_sc.csv")
            .then((response) => response.text())
            .then((csv) => {
                Papa.parse(csv, {
                    header: true,
                    complete: (result) => {
                        setData(result.data);
                    },
                });
            });
    }, []);

    return (
        <div>
            <h1>CSV Data</h1>
            <ul>
                {data.map((item, index) => (
                    <li key={index}>{item.columnName}</li>
                ))}
            </ul>
        </div>
    );
}

export default Data;
