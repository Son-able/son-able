import Head from "next/head";
import Script from "next/script"

import feedTab from "../features/tabs/feedTab"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "~/components/ui/tabs"

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "~/components/ui/menubar"

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar"

export default function Home() {

  return (
    <>
      <Head>
        <title>Sonable</title>
        <meta name="description" content="Sonable" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js" async />
      </Head>

      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]">
        <Menubar className="items-end objects-contain" dir="rtl" style={{
          position: "absolute", 
          top: "0px", 
          width: "100%", 
          borderRadius: "0px", 
          alignContent: "flex-end", 
          alignItems: "flex-end", 
          float: "right",
        }}>
          <MenubarMenu>
            <MenubarTrigger dir="rtl" className="objects-contain">
              <Avatar style={{marginBottom: "-7px"}}>
                <AvatarImage src="https://github.com/shadcn.png" style={{marginTop: "0px"}} />
                <AvatarFallback>Settings</AvatarFallback>
              </Avatar>
            </MenubarTrigger>
            <MenubarTrigger dir="rtl">
              <Avatar style={{marginBottom: "-7px"}}>
                <AvatarImage src="./settings.svg" style={{marginTop: "0px"}} />
                <AvatarFallback>
                    <i data-feather="settings"></i>
                </AvatarFallback>
              </Avatar>
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                View Profile
              </MenubarItem>
              <MenubarItem>
                Friends
              </MenubarItem>
              <MenubarItem>
                Messages
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                Settings
              </MenubarItem>
              <MenubarItem>
                Logout
              </MenubarItem>
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        <Tabs defaultValue="feed" className="w-[33%]" style={{position: "absolute", top: "3px", width: "60%", minWidth: "240px"}}>
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="feed">
              <i data-feather="home"></i>
            </TabsTrigger>
            <TabsTrigger value="events">
              <i data-feather="calendar"></i>
            </TabsTrigger>
            <TabsTrigger value="map">
              <i data-feather="map-pin"></i>
            </TabsTrigger>
            <TabsTrigger value="communities">
              <i data-feather="users"></i>
            </TabsTrigger>
            <TabsTrigger value="merch">
              <i data-feather="shopping-bag"></i>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="feed">
            { feedTab() }
          </TabsContent>
          <TabsContent value="events">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
              <span className="text-[hsl(280,100%,70%)]">Events</span> View
            </h1>
          </TabsContent>
          <TabsContent value="map">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
              <span className="text-[hsl(280,100%,70%)]">Map</span> View
            </h1>
          </TabsContent>
          <TabsContent value="communities">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
              <span className="text-[hsl(280,100%,70%)]">Communities</span> View
            </h1>
          </TabsContent>
          <TabsContent value="merch">
            <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
              <span className="text-[hsl(280,100%,70%)]">Merch</span> View
            </h1>
          </TabsContent>
        </Tabs>
      </main>
      <Script>
        feather.replace();
      </Script>
    </>
  );
}
