import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useCart = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useAuth()
    const { data: cart = [], refetch } = useQuery({
        queryKey: ['cart', user?.email], // Removed undefined refetch from queryKey
        queryFn: async () => {
            if (!user?.email) return [];
            const res = await axiosSecure.get(`/carts?email=${user.email}`);
            return res.data;
        },
    });
    // const { data: cart = [] }= useQuery({
    //     queryKey: [ refetch, 'cart', user?.email],
    //     queryFn: async () => {
    //         const res = await axiosSecure.get(`/carts?email=${user.email}`)
    //         return res.data
    //     }
    // })
    return [cart , refetch]
};

export default useCart;