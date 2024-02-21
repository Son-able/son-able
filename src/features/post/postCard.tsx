import * as React from "react"
import { Avatar, AvatarImage, AvatarFallback } from "~/components/ui/avatar"
 
import { Button } from "~/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { Separator } from "~/components/ui/separator"

const postCard = (postId: number) => {
    return (
        <Card className="text-white bg-[#2f272a] bg-opacity-40 border-none z-20" style={{margin: "10px", padding: "10px", paddingBottom: "-30px", height: "200px"}}>
            <Button className="grid grid-cols-2 justify-items-left object-contain h-[64px] w-[160px] bg-transparent hover:bg-transparent z-20" style={{boxShadow: "none"}}>
                <Avatar className="z-30" style={{marginLeft: "-8px"}}>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>Username</AvatarFallback>
                </Avatar>
                <div className="grid grid-rows=2 justify-items-left text-left z-30" style={{maxWidth: "50px", marginLeft: "-16px"}}>
                    <CardTitle>Username</CardTitle>
                    <CardDescription>Post Date</CardDescription>
                </div>
            </Button>
            <CardContent style={{marginTop: "24px", marginLeft: "-16px"}}>
                <p>Post Content</p>
            </CardContent>
            <CardFooter className="rounded-none" style={{borderRadius: "0px", marginLeft: "-16px", marginRight: "-32px"}}>
                <div className="grid grid-cols-3 w-[100%]">
                    <Button className="bg-transparent rounded-none box-shadow-none">Like</Button>
                    <Button className="bg-transparent rounded-none box-shadow-none">Comment</Button>
                    <Button className="bg-transparent rounded-none box-shadow-none">Share</Button>
                </div>
            </CardFooter>
        </Card>
    )
}

export default postCard;