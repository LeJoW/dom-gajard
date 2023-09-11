import { useState } from "react";
import { getNotStdContent, getStdContentBy } from "./lib/bdd";

export default function Table() {
    const kyriale = getNotStdContent();

    const [sorting, setSorting] = useState({
        key: "Incipit",
        direction: 1,
    });

    let content = getStdContentBy(sorting.key, sorting.direction);

    return (
        <>
            <table className="my-20 border-collapse">
                <thead>
                    <tr>
                        {["Incipit", "Type", "Album"].map(function (title, id) {
                            return (
                                <th key={`head-${id}`} className="p-4">
                                    {title}{" "}
                                    <button
                                        className="text-orange-400"
                                        onClick={function () {
                                            setSorting({
                                                key: title,
                                                direction:
                                                    sorting.key === title
                                                        ? -1 * sorting.direction
                                                        : 1,
                                            });
                                        }}
                                    >
                                        {sorting.key === title
                                            ? sorting.direction === 1
                                                ? "▲"
                                                : "▼"
                                            : "◆"}
                                    </button>
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {content.map(function ({ Album, Type, Incipit }, id) {
                        return (
                            <tr key={`body-${id}`} className="divide-x">
                                {[Incipit, Type, Album].map(function (
                                    title,
                                    i
                                ) {
                                    return (
                                        <td
                                            key={id * 10 + i}
                                            className="p-2 px-4 border-black border-opacity-20"
                                        >
                                            {title}
                                        </td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>

            <table className="my-20 border-collapse">
                <h2 className="text-3xl p-10">Kyriale</h2>
                <tbody>
                    {kyriale.map(function ({ Incipit }, id) {
                        return (
                            <tr key={`body-${id}`}>
                                <td className="p-2 px-4">{Incipit}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
}
