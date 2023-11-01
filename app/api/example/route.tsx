import { Todo } from "@/type/type";

export async function GET() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data: Todo = await res.json();
    return new Response(JSON.stringify(data), {
        status: 200,
        headers: { referer: "referer" },
    });
}
