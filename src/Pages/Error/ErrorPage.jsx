import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                            <span className="sr-only">Error</span>404
                        </h2>
                        <p className="text-2xl font-semibold md:text-3xl">Sorry, we could not find this page.</p>
                        <p className="mt-4 mb-8 dark:text-gray-400">But do not worry, you can find plenty of other things on our homepage.</p>
                        <Link to='/'><button className="btn btn-outline hover:btn-secondary">Back To Homepage</button></Link>
                    </div>
                    <img className="w-96 lg:w-[500px] mt-5 rounded" src="https://i.ibb.co/DD0XTcK/404-error.jpg" alt="Error" />
                </div>
            </section>
        </div>
    );
};

export default ErrorPage;