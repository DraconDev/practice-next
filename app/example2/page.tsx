import React from "react";

type Props = {};

export async function getServerSideProps() {
    // Fetch data from the API
    const res = await fetch("/api/example");
    const data = await res.json();

    // Pass the fetched data as props to the server component
    return {
        props: {
            data,
        },
    };
}

const ex2 = async ({ data }: { data: any }) => {
    return (
        <div>
            ex2
            <h2>{data?.json()}</h2>
        </div>
    );
};

export default ex2;
