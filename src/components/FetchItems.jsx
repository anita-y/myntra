import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { catalogAction } from "../store/catalog"

const FetchItems = () => {
    const dispatch = useDispatch();
    const controller = new AbortController();
    const signal = controller.signal;

    useEffect(() => {
        fetch("http://localhost:8080/items", {signal})
        .then((res) => res.json())
        .then(({items}) => {
            dispatch(catalogAction.showItems(items[0]))
        });
        //cleanup code
        // return () => {
        //     controller.abort();
        // }

    }, [])

    return <></>
}

export default FetchItems