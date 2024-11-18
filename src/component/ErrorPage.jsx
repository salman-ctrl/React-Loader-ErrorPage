import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const eror = useRouteError();

    return <div>yah, halaman kamu tuju error!!!!!!!!!</div>
}

export default ErrorPage;