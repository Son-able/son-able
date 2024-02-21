import * as React from "react"
import { useAuth, useUser } from "@clerk/nextjs";


import { Button } from "~/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"

const userCard = (userId: number) => {
    const user = useUser()
    return (
        <Card className="text-center justify-items-center justify-center items-center z-10 relative">
            <Avatar style={{height: "124px", width: "124px", display: "block", left: "41%", top: "-32px"}}>
                <AvatarImage src={user.user?.imageUrl}/>
                <AvatarFallback>{userId}</AvatarFallback>
            </Avatar>
            <CardHeader>
                <CardTitle>{user.user?.username}</CardTitle>
                <CardDescription>Bio</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Profile Content</p>
            </CardContent>
            <CardFooter>
                <p>Profile Footer</p>
            </CardFooter>
        </Card>
    )
}

export default userCard;