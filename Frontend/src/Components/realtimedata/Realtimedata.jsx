import React from "react";
import StartFirebase from "../firebaseConfig";
import { ref, onValue } from "firebase/database";
import { Table } from "react-bootstrap";

const db = StartFirebase();

export class Realtimedata extends React.Component {
    constructor() {
        super();
        this.state = {
            tableData: []
        };
    }
    componentDidMount() {
        const dbref = ref(db, 'sensors2');
        onValue(dbref, (snapshot) => {
            let records = [];
            snapshot.forEach(childSnapshot => {
                let keyName = childSnapshot.key;
                let data = childSnapshot.val();
                records.push({ "key": keyName, "data": data });
            });
            this.setState({ tableData:records});
        });
    }

    render() {
        return (
            <div>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Key</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tableData.map((record, index) => (
                            <tr key={index}>
                                <td>{record.key}</td>
                                <td>{JSON.stringify(record.data)}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </div>
        );
    }
}

export default Realtimedata; 
