import "./App.css";
import Table from "./Table";
import { getCount } from "./lib/bdd";

function App() {
    const count = getCount();

    return (
        <>
            <section className="mx-5 md:mx-20 lg:mx-56 my-20">
                <header>
                    <h1 className="text-4xl">
                        Index cantuum a patre dom Joseph Gajard rectorum
                    </h1>
                    <h4 className="text-slate-500">
                        Edit. {new Date("09/11/2023").toLocaleDateString()}
                        {", "}
                        <span className="text-orange-700">{count}</span> cantus.
                    </h4>
                </header>
                <div className="overflow-auto drop-shadow-2xl flex-none md:flex items-start gap-10">
                    <Table />
                </div>
                <footer className="text-slate-600 text-center">
                    <small className="shadow-lg p-4 px-8 transition-all hover:shadow bg-slate-200/30">
                        @LeJoW{" • "}
                        <a
                            href="mailto:elle.git.wilke@gmail.com"
                            className="text-orange-700"
                        >
                            elle.git.wilke@gmail.com
                        </a>
                    </small>
                </footer>
            </section>
        </>
    );
}

export default App;
