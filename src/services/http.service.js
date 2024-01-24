import axios from "axios"


const getHeader = () => {
    return { "Content-Type": "application/json"}
}

export const GET = async(url, routeParam="") => {

    try {
        return await axios.get(url,{
            params:routeParam,
            headers:getHeader
        })
    } catch (error) {

    }
}