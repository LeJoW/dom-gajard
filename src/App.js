import "./App.css";
import Table from "./Table";

function App() {
    return (
        <>
            <section className="mx-5 md:mx-20 lg:mx-56 my-20">
                <header>
                    <h1 className="text-4xl">
                        Index cantuum a patre dom Joseph Gajard rectorum
                    </h1>
                    <h4 className="text-slate-500">Edit. {new Date("09/11/2023").toLocaleDateString()}</h4>
                </header>
                <Table />
                <footer className="text-slate-600 text-center">
                    <small className="shadow-lg p-4 px-8 transition-all hover:shadow">
                        @LeJoW{" • "}
                        <a href="mailto:elle.git.wilke@gmail.com" className="text-orange-700">
                            elle.git.wilke@gmail.com
                        </a>
                    </small>
                </footer>
            </section>
        </>
    );
}

export default App;
