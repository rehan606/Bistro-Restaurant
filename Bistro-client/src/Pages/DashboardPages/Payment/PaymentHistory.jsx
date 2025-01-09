import React from 'react';
import SectionTitle from '../../CommonPages/SectionTitle';
import useAuth from '../../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const PaymentHistory = () => {
    const { user} = useAuth()
    const axiosSecure = useAxiosSecure()

    const {data: payments = []} = useQuery({
        queryKey: ['payments', user.email ] ,

        queryFn: async () =>{
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    // console.log(payments.length)

    return (
        <div>
            <SectionTitle subHeadding='Payment History' headding='History'></SectionTitle>
            <div>
                <h3>Total Payment History : {payments.length} </h3>

                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Email</th>
                                <th>Price</th>
                                <th>TransactionID</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                            {
                                payments.map((payment, index )=> <tr key={payment._id}>
                                <th>{index + 1}</th>
                                <td>{user.email}</td>
                                <td>{payment.price}</td>
                                <td>{payment.transectionId}</td>
                                <td>{payment.status}</td>
                            </tr>
                            )}
                        
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;