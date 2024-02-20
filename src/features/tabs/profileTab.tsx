import Link from "next/link";
import Image from "next/image";
import { api } from "~/utils/api";
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area"
import postCard from "../post/postCard";
import userCard from "../userCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import { Separator } from "~/components/ui/separator";

const profileTab = () => {
    const hello = api.post.hello.useQuery({ text: "from tRPC" });
    return (
        <div className="container flex flex-col items-center justify-center justify-items-center gap-12 px-4 py-16 ">
            <ScrollArea className="w-[100%] h-dvh whitespace-nowrap rounded-xl justify-items-center" style={{marginTop: "0px", marginBottom: "0px", bottom: "10px"}}>

                <ScrollBar orientation="vertical" className="z-30" />
                <div className="w-[100%] h-[10%] rounded-xl z-0" style={{maxHeight: "300px", display: "inline-block", marginBottom: "-30px", position: "relative"}}>
                    <Image
                        src="/sonable_logo.png"
                        width={600}
                        
                        height={600}
                        alt="Cover"
                        style={{maxHeight: "10%", width: "100%", marginBottom: "-40px"}}
                        className="rounded-xl z-0"
                    />
                </div>
                {userCard(1)}
                <Tabs
                    defaultValue="profileFeed"
                    className="w-[100%] rounded-lg"
                    style={{
                        height: "44px"
                    }}
                >
                    <TabsList className="grid w-[100%] grid-cols-5 bg-foreground fg-foreground items-center z-20">
                        <TabsTrigger value="profileFeed">
                            Feed
                        </TabsTrigger>
                        <TabsTrigger value="profileMedia">
                            Media
                        </TabsTrigger>
                        <TabsTrigger value="profileEvents">
                            Events
                        </TabsTrigger>
                        <TabsTrigger value="profileFollowing">
                            Following
                        </TabsTrigger>
                        <TabsTrigger value="profileOther">
                            Info
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="profileFeed">
                        <Separator />
                        {postCard(10)}
                        <Separator />
                        {postCard(20)}
                    </TabsContent>
                </Tabs>
            </ScrollArea>
        </div>
    )
}

export default profileTab;