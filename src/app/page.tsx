import { list } from "@vercel/blob";
import Image from "next/image";

export default async function Home() {
    const response = await list();

    return (
        <>
            {response.blobs.map((blob) => (
                <Image key={blob.pathname} src={blob.downloadUrl} alt='' width={100} height={100} />
            ))}
        </>
    );
}