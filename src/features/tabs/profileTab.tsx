import Link from "next/link";
import Image from "next/image";
import { api } from "~/utils/api";
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area"
import postCard from "../post/postCard";
import userCard from "../userCard";

const profileTab = () => {
    const hello = api.post.hello.useQuery({ text: "from tRPC" });
    return (
        <div className="container flex flex-col items-center justify-center justify-items-center gap-12 px-4 py-16 ">
            <ScrollArea className="w-[100%] h-dvh whitespace-nowrap rounded-xl justify-items-center" style={{marginTop: "0px", marginBottom: "0px", bottom: "10px"}}>

                <ScrollBar orientation="vertical" />
                <div className="w-[100%] h-[10%] rounded-xl z-0" style={{maxHeight: "300px", display: "inline-block", marginBottom: "-30px", position: "relative"}}>
                    <Image
                        src="/sonable_logo.png"
                        width={600}
                        
                        height={600}
                        alt="Cover"
                        style={{maxHeight: "10%", width: "100%"}}
                        className="rounded-xl z-0"
                    />
                </div>
                {userCard(1)}
                {postCard(10)}
                {postCard(20)}
            </ScrollArea>
        </div>
    )
}

export default profileTab;