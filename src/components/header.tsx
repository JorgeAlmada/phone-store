import Image from "next/image";
import { ShoppingCart } from "@phosphor-icons/react/dist/ssr/ShoppingCart";
import { User } from "@phosphor-icons/react/dist/ssr/User";

function HeaderComponent() {

    const headerElems = ["Headphones", "Earbuds", "Gaming", "Speakers", "Crusher Bass", "Explore"]

    return ( <header className="w-full bg-black flex px-8 py-4 h-18">
        <Image
              src="/skdylogosvg.svg"
              alt="Vercel Logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{width: '200px', height: 'auto'}}
            />
        <div className="flex justify-center w-full">
            {headerElems.map((elem, index) => <p className="px-2 text-white my-auto hover:text-gray hover:font-bold cursor-pointer" key={elem + index}>{elem}</p>)}
        </div>
        <div className="flex h-100">
            <ShoppingCart color="white" size={"1.5em"} className="mx-2 cursor-pointer hover:scale-105" />
            <User color="white" size={"1.5em"} className="mx-2 cursor-pointer hover:scale-105"/>
        </div>
    </header> );
}

export default HeaderComponent;