import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar"
import { DropdownMenu, DropdownMenuTrigger } from "~/components/ui/dropdown-menu"
import { CardTitle } from "~/components/ui/card"
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "~/components/ui/dialog"
import { Textarea } from "~/components/ui/textarea"

const newPostDialog = () => {            
    return (
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
    )
}

export default newPostDialog;