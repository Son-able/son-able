'use client'
import Head from "next/head";
import Script from "next/script"
import Image from 'next/image'

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
        <Menubar className="items-end objects-contain bg-foreground border-none" dir="rtl" style={{
          position: "absolute", 
          top: "0px", 
          width: "100%", 
          height: "44px",
          borderRadius: "0px", 
          alignContent: "flex-end", 
          alignItems: "flex-end", 
          placeContent: "end",
          float: "right",
        }}>
          <img className="md:hidden" src={"./sonable_icon.png"} style={{position: "absolute", top: "2px", left: "0px", height: "37px"}} />
          <a href="/" className="hidden md:flex">
            <img src={"./sonable_logo_transparent.png"} style={{position: "absolute", top: "2px", left: "0px", height: "37px"}} />
          </a>
          <MenubarMenu>
            <MenubarTrigger dir="rtl" className="objects-contain">
              <Avatar style={{marginBottom: "-7px"}}>
                <AvatarImage src="https://github.com/shadcn.png" style={{marginTop: "0px"}} />
                <AvatarFallback>Settings</AvatarFallback>
              </Avatar>
            </MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                Messages
              </MenubarItem>
              <MenubarItem>
                Friends
              </MenubarItem>
              <MenubarItem>
                View Profile
              </MenubarItem>
              <MenubarItem>
                Edit Profile
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                Create New Profile
              </MenubarItem>
              <MenubarSeparator />
              <MenubarItem>
                Settings
              </MenubarItem>
              <MenubarItem>
                Logout
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        <Tabs defaultValue="feed" className="w-[33%] h-[100%] border-border" style={{position: "absolute", top: "3px", width: "60%", minWidth: "240px"}}>
          <TabsList className="grid w-full grid-cols-5 bg-foreground fg-foreground" style={{stroke: "red"}}>
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
            <div style={{all: "unset"}}>
              { feedTab() }
            </div>
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
