'use client'

import Link from "next/link";
import { api } from "~/utils/api";

import mockData from "~/lib/mockData";
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table"
import postCard from "../post/postCard";

const feedTab = () => {
    const hello = api.post.hello.useQuery({ text: "from tRPC" });
    return (
        <div className="container w-[100%] flex flex-col items-center justify-center justify-items-center gap-0 p-0 h-screen object-contain overscroll-x-none">
            <ScrollArea className="h-[100%] w-[100%] whitespace-nowrap rounded-xl justify-items-center h-screen object-contain overscroll-x-none m-0" style={{marginTop: "0px", marginBottom: "0px", bottom: "10px", overflowX: "hidden"}}>
                <ScrollBar orientation="vertical" className="z-30" />
                <Table className="overscroll-x-none" style={{marginTop: "40px", width: "100%", overflowX: "hidden"}}>
                    <TableHeader style={{marginTop: "40px"}}>
                    </TableHeader>
                    <TableBody className="accent-primary" style={{overflowX:"hidden", width: "100%"}}>
                        {
                            mockData["mockPosts"].map(function(post) {
                                return (
                                    <TableRow style={{border: "none", padding: "none", margin: "none", overscrollBehaviorX: "none", overflowX: "hidden", width: "100%"}}>
                                        <TableCell style={{padding: "none", margin: "none", width: "100%"}}>
                                            {
                                                postCard(post)
                                            }
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </ScrollArea>
        </div>
    )
}

export default feedTab;