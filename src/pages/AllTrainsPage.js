import React from 'react';

const AllTrainsPage = ({ trains, loading }) => {
    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h1>All Trains</h1>
            <table>
                <thead>
                    <tr>
                        <th>Train Name</th>
                        <th>Train Number</th>
                        <th>Departure Time</th>
                        <th>Seats Available</th>
                        <th>Price</th>
                        <th>Delayed By</th>
                    </tr>
                </thead>
                <tbody>
                    {trains.map((train, index) => (
                        <tr key={index}>
                            <td>{train.trainName}</td>
                            <td>{train.trainNumber}</td>
                            <td>
                                {train.departureTime.Hours}:{train.departureTime.Minutes}:{train.departureTime.Seconds}
                            </td>
                            <td>
                                Sleeper: {train.seatsAvailable.sleeper}, AC: {train.seatsAvailable.AC}
                            </td>
                            <td>
                                Sleeper: {train.price.sleeper}, AC: {train.price.AC}
                            </td>
                            <td>{train.delayedBy}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllTrainsPage;