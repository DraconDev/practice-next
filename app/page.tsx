import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-betweean p-6 gap-2">
            <button className="custom_button">custom1</button>
            <button className="custom-button2">custom2</button>
            <Link href="/example">Hello</Link>
            <Link href="/example2">example2</Link>
        </main>
    );
}
