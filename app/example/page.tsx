import { Todo } from "@/type/type";
import React from "react";

type Props = {};

async function getPlaceholder(): Promise<Todo> {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data: Todo = await res.json();
    return data;
}

const Prac = async (props: Props) => {
    const data = await getPlaceholder();

    // console.log(data);
    return (
        <div>
            Prac
            <h2>{data?.title}</h2>
        </div>
    );
};

export default Prac;
