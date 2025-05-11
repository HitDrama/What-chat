import axios from 'axios';
import  { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setPosts } from '@/redux/postSlice';

const useGetAllPost = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchAllPosts = async () => {
            try{
                const res = await axios.get('http://localhost:8000/api/v1/post/all', { withCredentials: true });
                if(res.data.success){
                    console.log(res.data.posts);
                    dispatch(setPosts(res.data.posts));
                }
            }catch(error){
                console.log(error);
            }
        };
        fetchAllPosts();
    },[]);
};

export default useGetAllPost
