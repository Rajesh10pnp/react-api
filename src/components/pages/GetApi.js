import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Style.css';


const GetApi = () => {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getusers();
    }, []);

    const getusers = async () => {
        try {
            let userdetails = await axios.get(
                "https://jsonplaceholder.typicode.com/photos"
            );
            setUser(userdetails.data);
            setLoading(false);
        } catch (error) { }
    }

    return (
        <>
            {
                loading ? (
                    <div className='d-flex justify-content-center p-5'>
                        <div className='spinner-border' role="status">
                            {/* <span className='sr-only'>Loding...</span> */}
                        </div>
                    </div>
                ) : (
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Title</th>
                                <th scope="col">User URL</th>
                                <th scope="col">ThumbnailUrl</th>
                            </tr>
                        </thead>

                        <tbody>
                            {user.map((users, index) => (
                                <tr>
                                    <td scope="row">{users.id}</td>
                                    <td>{users.title}</td>
                                    {/* <td>{users.url}</td> */}
                                    <td>
                                        <img src={users.url} />
                                    </td>
                                    <td>
                                        <img src={users.thumbnailUrl} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
        </>
    )
}

export default GetApi