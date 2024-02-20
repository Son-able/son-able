import * as React from "react"
 
import { Badge } from "~/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"

const userCard = (userId: number) => {
    return (
        <Card className="text-center justify-items-center justify-center items-center z-10 relative bg-black border-none text-white" style={{maxHeight: "200px", marginTop: "40px", borderTopLeftRadius: "0px", borderTopRightRadius: "0px"}}>
            <Avatar style={{height: "124px", width: "124px", display: "inline-block", top: "-64px", marginBottom: "-80px", outline: "5px solid white"}}>
                <AvatarImage src="/placeholder_avatar.png" />
                <AvatarFallback>{userId}</AvatarFallback>
            </Avatar>
            <CardHeader>
                <CardTitle>Username</CardTitle>
                <CardDescription>1,269 followers&nbsp;&nbsp;&nbsp;&nbsp; 420 following</CardDescription>
                <CardDescription>
                    <Badge style={{width: "60px"}}>Follow</Badge>
                </CardDescription>
            </CardHeader>
            <CardContent style={{marginTop: "-16px"}}>
                <p>Profile Content</p>
            </CardContent>
        </Card>
    )
}

export default userCard;