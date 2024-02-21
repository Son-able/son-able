'use client'

import { MenubarMenu } from "@radix-ui/react-menubar";
import { Button } from "~/components/ui/button"
import { Menubar, MenubarContent, MenubarItem, MenubarTrigger } from "~/components/ui/menubar"
import {Avatar, AvatarImage, AvatarFallback} from "~/components/ui/avatar";
import Script from "next/script";
import { Input } from "~/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog"
import { Textarea } from "~/components/ui/textarea";
import { CardTitle, CardDescription } from "~/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"

const fabBar = () => {
    return (
        <div className="sticky flex top-0" style={{placeContent: "end"}}>
            <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js" async />
            <Dialog>
                <DialogTrigger className="rounded-full text-secondary bg-primary items-center text-center justify-items-center" style={{display: "block", height: "44px", width: "44px"}}>
                        <i data-feather="plus" style={{height: "44px", width: "44px", marginRight: "-7px"}} />
                </DialogTrigger>
                <DialogContent className="bg-[#2f272a] border-none">
                    <DialogTitle className="text-secondary">
                        New Post
                    </DialogTitle>
                    <DialogDescription className="grid grid-cols-2 justify-items-left object-contain h-[32px] w-[160px] text-center"> 
                        <Avatar className="z-30">
                            <AvatarImage src="/placeholder_avatar_3.png" />
                            <AvatarFallback>Username</AvatarFallback>
                        </Avatar>
                        <div className="grid grid-rows=2 justify-items-left text-left z-30" style={{maxWidth: "50px", marginLeft: "-24px"}}>
                            <CardTitle className="text-secondary">@Username</CardTitle>
                            <DropdownMenu>
                                <DropdownMenuTrigger className="text-secondary bg-transparent" style={{maxWidth: "64px"}}>
                                    <i data-feather="settings" color="white" style={{zIndex: 51}}></i>
                                </DropdownMenuTrigger>
                            </DropdownMenu>
                        </div>
                    </DialogDescription>
                    <Textarea className="text-white" placeholder="What's on your mind?" style={{border: "1px solid #2f272a", outline: "1px solid #2f272a", outlineOffset: "0px"}} />
                </DialogContent>
            </Dialog>
            <Script>
                feather.replace();
            </Script>
        </div>
    )
}

export default fabBar;