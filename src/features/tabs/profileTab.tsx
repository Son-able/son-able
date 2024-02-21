import Image from "next/image";
import { api } from "~/utils/api";
import { ScrollArea, ScrollBar } from "~/components/ui/scroll-area"
import postCard from "../post/postCard";
import userCard from "../userCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import mockData from "~/lib/mockData";

const profileTab = () => {
    const hello = api.post.hello.useQuery({ text: "from tRPC" });
    return (
        <div className="container w-[100%] flex flex-col items-center justify-center justify-items-center gap-4 px-4 py-0 h-screen">
    
            <ScrollArea className="w-[100%] h-[100%] whitespace-nowrap rounded-xl justify-items-center h-screen" style={{marginTop: "0px", marginBottom: "0px", bottom: "10px"}}>
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
                    <TabsList className="grid w-[100%] grid-cols-5 bg-foreground fg-foreground items-center z-40">
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
                        {postCard(mockData.mockPosts[0])}
                        {postCard(mockData.mockPosts[1])}
                    </TabsContent>
                </Tabs>
            </ScrollArea>
        </div>
    )
}

export default profileTab;