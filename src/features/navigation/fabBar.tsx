'use client'

import {Avatar, AvatarImage, AvatarFallback} from "~/components/ui/avatar";
import Script from "next/script";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog"
import { Textarea } from "~/components/ui/textarea";
import { CardTitle, CardDescription } from "~/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu"
import newPostFab from "./fabs/newPostFab";
import newPostDialog from "../dialog/newPostDialog";

const fabBar = () => {


    return (
        <div className="sticky flex top-0" style={{placeContent: "end"}}>
            <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js" async />
            <Dialog>
                {newPostFab()}
                {newPostDialog()}
            </Dialog>
            <Script>
                feather.replace();
            </Script>
        </div>
    )
}

export default fabBar;