import * as React from "react"
 
import { Button } from "~/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"

const postCard = (postId: number) => {
    return (
        <Card className="text-white bg-black border-none">
            <CardHeader>
                <CardTitle>Post Title</CardTitle>
                <CardDescription>Post Description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Post Content</p>
            </CardContent>
            <CardFooter>
                <p>Post Footer</p>
            </CardFooter>
        </Card>
    )
}

export default postCard;