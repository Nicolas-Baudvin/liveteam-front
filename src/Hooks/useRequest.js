import Axios from 'axios';
import { useCallback, useState } from 'react';

const useRequest = () => {
    const [data, setData] = useState();
    const [err, setErr] = useState();
    const [isLoading, setLoading] = useState(false);

    const request = useCallback(async (url, method = "post", data = {}, headers = {}) => {
        setLoading(true);
        try
        {
            const res = await Axios({
                url,
                method,
                data,
                headers: {
                    ...headers,
                    Authorization: `Bearer ${localStorage.getItem("tkn")}`
                }
            });

            if (res.data)
            {
                setData(res.data);
                setLoading(false);
            }
        }
        catch (e)
        {
            if (e.response?.data?.error)
                setErr(e.response.data.error);
            else if (e.response?.data?.errors[0])
                setErr(e.response.data.errors[0].msg);
            else
                setErr("Erreur interne au serveur. Contactez un administrateur");

            setLoading(false);
        }
    }, []);

    return { data, err, request, isLoading };
};

export default useRequest;