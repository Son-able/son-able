import { MenubarMenu } from "@radix-ui/react-menubar";
import { Button } from "~/components/ui/button"
import { Menubar, MenubarContent, MenubarItem, MenubarTrigger } from "~/components/ui/menubar"
import {Avatar, AvatarImage, AvatarFallback} from "~/components/ui/avatar";
import Script from "next/script";

const fabBar = () => {
    return (
        <div className="flex">
            <Menubar className="bottom-0 sticky items-end justify-items-end z-50 border-none bg-transparent objects-contain text-white h-[100px] mr-8" dir="rtl" style={{position: "fixed", width: "100%", placeContent: "end"}}>
                <MenubarMenu>
                    <MenubarTrigger dir="rtl" className="objects-contain rounded-full bg-primary items-center text-center justify-items-center mr-5 mb-5" style={{display: "block", height: "42px", width: "42px"}}>
                        <i data-feather="plus" style={{height: "32px", width: "32px", marginRight: "-7px"}} />
                    </MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            test
                        </MenubarItem>
                    </MenubarContent>
                    <MenubarTrigger dir="rtl" className="objects-contain rounded-full bg-primary items-center text-center justify-items-center mr-8 mb-5" style={{display: "block", height: "42px", width: "42px", marginRight: "16px"}}>
                        <i data-feather="search" style={{height: "32px", width: "32px", marginRight: "-7px"}} />
                    </MenubarTrigger>
                </MenubarMenu>
            </Menubar>
            <Script>
                feather.replace();
            </Script>
        </div>
    )
}

export default fabBar;