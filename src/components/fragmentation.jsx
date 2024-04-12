//https://youtu.be/dgUgggu8VEc
//slow_homecoming_full.png
import * as React from "react"
import '../app/style.css';
import 'tailwindcss/tailwind.css';
import { Button } from "@/components/ui/button";






import { cn } from "@/lib/utils";
import Image from "next/image"
import { useRouter } from "next/navigation"



export function FileMind() {
    const router = useRouter();

    const toHome = () => {
        router.push('/');
    }


    return (
        <main className="px-10 py-2" style={{ color: 'rgb(3, 8, 22)', backgroundColor: 'babyblue' }}>

            {/* page */}
            
            <Image src="./fragmentation/10.png" alt="f-1" width={1200} />
            <Image src="./fragmentation/11.png" alt="f-2" width={1200} />
            <Image src="./fragmentation/12.png" alt="f-3" width={1200} />
            <Image src="./fragmentation/13.png" alt="f-4" width={1200} />
            
            




        </main>
    );
};

export default FileMind;
