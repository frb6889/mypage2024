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
            
            <Image src="./huuu/20.png" alt="huuu-1" width={1200} />
            <Image src="./huuu/21.png" alt="huuu-2" width={1200} />
            <Image src="./huuu/22.png" alt="huuu-3" width={1200} />
            <Image src="./huuu/23.png" alt="huuu-4" width={1200} />
            

        </main>
    );
};

export default FileMind;
