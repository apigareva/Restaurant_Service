import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { selectStatusById } from "../entities/request/slice";

export const useRequest = (thunk, payload) => {
    const dispath = useDispatch();
    const [request, setRequest] = useState(null);

    const requestStatus = useSelector(state => selectStatusById(state, request?.requestId));

    useEffect(() => {
        const request = dispath(thunk(payload))
        setRequest(request);
        return () => {
            request.abort();
            setRequest(null);
        }
    }, [payload, thunk, dispath]);

    return requestStatus;
};
