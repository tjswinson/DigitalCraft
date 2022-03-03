import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setInitialState } from "../redux/actions";

const Landing = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setInitialState());
    }, []);

    return (
        <p>Landing</p>
    )

};

export default Landing;