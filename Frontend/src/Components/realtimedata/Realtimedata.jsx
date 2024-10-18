import React from "react";
import StartFirebase from "../firebaseConfig";
import { ref, onValue } from "firebase/database";
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

const db = StartFirebase();

export class Realtimedata extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            tooltipData: null,
        };
    }

    componentDidMount() {
        const dbref = ref(db, 'sensors2');
        onValue(dbref, (snapshot) => {
            const data = snapshot.val();
            console.log('Data received from Firebase:', data); // Console log added
            this.setState({ data });
        }, (error) => {
            console.error('Error fetching data:', error); // Log any errors
        });
    }

    handleRadioClick = () => {
        const { data } = this.state;
        if (data) {
            this.setState({ tooltipData: data });
        }
    }

    render() {
        const { tooltipData } = this.state;
        const { radioId } = this.props;

        return (
            <>
                <OverlayTrigger
                    placement="top"
                    overlay={
                        <Tooltip id={`tooltip-${radioId}`}>
                            {tooltipData ? (
                                <div>
                                    <p><strong>Key:</strong> {radioId}</p>
                                    <p><strong>pH:</strong> {tooltipData.ph}</p>
                                    <p><strong>TDS:</strong> {tooltipData.tds}</p>
                                    <p><strong>Water Flow:</strong> {tooltipData.water_flow}</p>
                                    <p><strong>Water Level:</strong> {tooltipData.water_level}</p>
                                </div>
                            ) : (
                                <p>Loading...</p>
                            )}
                        </Tooltip> 
                    }
                >
                    <input
                        type="radio"
                        name="house"
                        className={`radio-button radio-${radioId}`}
                        onClick={this.handleRadioClick}
                    />
                </OverlayTrigger>
            </>
        );
    }
}

export default Realtimedata;
// import React from "react";
// import StartFirebase from "../firebaseConfig";
// import { ref, onValue } from "firebase/database";
// import { Table } from "react-bootstrap";
// const db = StartFirebase();
// export class Realtimedata extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             tableData: []
//         };
//     }
//     componentDidMount() {
//         const dbref = ref(db, 'sensors2');
//         onValue(dbref, (snapshot) => {
//             let records = [];
//             snapshot.forEach(childSnapshot => {
//                 let keyName = childSnapshot.key;
//                 let data = childSnapshot.val();
//                 records.push({ "key": keyName, "data": data });
//             });
//             this.setState({ tableData:records});
//         });
//     }
//     render() {
//         return (
//             <div>
//                 <Table striped bordered hover>
//                     <thead>
//                         <tr>
//                             <th>Key</th>
//                             <th>Data</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {this.state.tableData.map((record, index) => (
//                             <tr key={index}>
//                                 <td>{record.key}</td>
//                                 <td>{JSON.stringify(record.data)}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </Table>
//             </div>
//         );
//     }
// }
// export default Realtimedata; 