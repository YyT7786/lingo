import { Button } from "@/components/ui/button";
import Image from "next/image";

export const Footer = () => {
    return (
        <>
            <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
                <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
                    <Button variant="ghost">
                        <Image
                            src="hr.svg"
                            alt="Croatian"
                            height={32}
                            width={40}
                            className="mr-4 rounded-md"
                        />
                        Croatian
                    </Button>
                    <Button className="border-4" variant="ghost">
                        <Image
                            src="es.svg"
                            alt="Spain"
                            height={32}
                            width={40}
                            className="mr-4 rounded-md"
                        />
                        Spanish
                    </Button>
                    <Button variant="ghost">
                        <Image
                            src="fr.svg"
                            alt="Franch"
                            height={32}
                            width={40}
                            className="mr-4 rounded-md"
                        />
                        French
                    </Button>
                    <Button variant="ghost">
                        <Image
                            src="it.svg"
                            alt="Italy"
                            height={32}
                            width={40}
                            className="mr-4 rounded-md"
                        />
                        Italy
                    </Button>
                    <Button variant="ghost">
                        <Image
                            src="jp.svg"
                            alt="Japan"
                            height={32}
                            width={40}
                            className="mr-4 rounded-md"
                        />
                        Japan
                    </Button>
                </div>
            </footer>
            <div className="absolute right-0 bottom-0 text-xs font-bold text-neutral-500">
                JS-US-2024
            </div>
        </>
    );
};