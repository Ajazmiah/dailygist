import { notFound } from "next/navigation";

const key = process.env.NEWSDATA_IO_KEY;

export const fetchSinglePost = async (id: string) => {
    // const URL = `https://newsdata.io/api/1/latest?country=us,gb,ca&prioritydomain=medium&image=1&apikey=${key}&id=${id}`
    const perigonURL = `https://newsdata.io/api/1/latest?apikey=${key}&id=${id}`;
    const res = await fetch(perigonURL);

    const data = await res.json();

    if (!res.ok) {
        notFound();
    }

    return data.results[0];
};