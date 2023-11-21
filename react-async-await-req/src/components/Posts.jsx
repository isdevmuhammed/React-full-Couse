import { useEffect } from "react";
import axios from "../api/jsonPH";
import useAxiosFunction from '../hooks/useAxiosFunction'

const Posts = () => {
    const [response, loading, error, axiosFetch] = useAxiosFunction();

    const getData = () => {
        axiosFetch({
            axiosInstance: axios,
            url: '/posts',
            method: 'GET',
        })
    }
    return (
        <div>Posts</div>
    )
}

export default Posts