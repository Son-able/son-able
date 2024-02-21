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
import profileTab from "~/features/tabs/profileTab";
import { useEffect, useReducer, useState } from "react";
import React from "react";
import fabBar from "~/features/navigation/fabBar";

export default function Home() {
  const [tab, setActiveTab] = useState("feed");

  return (
    <>
      <Head>
        <title>Sonable</title>
        <meta name="description" content="Sonable" />
        <link rel="icon" href="/sonable_icon.png" />
        <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js" async />

      </Head>

      <main className="relative flex min-h-screen h-screen flex-col items-center justify-center align-items-center bg-gradient-to-b from-[#000000] to-[#111111]" style={{bottom: "-5px", paddingBottom: "0px"}}>
        <Menubar className="top-0 sticky items-end objects-contain bg-foreground border-none" dir="rtl" style={{
          position: "fixed",
          width: "100%", 
          height: "44px",
          borderRadius: "0px", 
          placeContent: "end",
          zIndex: 40
        }}>
          <img className="md:hidden sticky top-0" src={"./sonable_icon.png"} style={{left: "16px", top: "3px", height: "37px", zIndex: 51, position: "fixed"}} />
          <a href="/" className="hidden md:flex sticky top-0">
            <img className="hidden md:flex sticky top-0" src={"./sonable_logo_transparent.png"} style={{left: "16px", height: "37px", top: "3px", zIndex: 51, position: "fixed"}} />
          </a>
          <MenubarMenu>
            <MenubarTrigger dir="rtl" className="objects-contain sticky top-0" style={{color: "black", backgroundColor: "black", alignItems: "end", alignContent: "end"}}>
              <Avatar style={{marginBottom: "-7px"}}>
                <AvatarImage src="https://github.com/shadcn.png" style={{display: "block", zIndex: 51}} />
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
              <MenubarItem onSelect = {() => {setActiveTab("profile");}}>
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
        <Tabs 
          value={tab}
          className="flex justify-center md:w-[60%] w-[100%] border-border rounded-lg accent-primary items-center" 
          style={{
            position: "absolute", 
            top: "47px", 
            height: "90%",
            minWidth: "240px",
          }}
          onValueChange={setActiveTab}
          activationMode="automatic"
        >
          <TabsList className="absolute accent-primary fg-primary bg-transparent grid md:ml-0 w-[60%] top-0 sticky grid-cols-5 items-center justify-items-center" style={{stroke: "red", zIndex: 50, position: "fixed"}}>
            <TabsTrigger value="feed" className="hover:bg-secondary">
              <i data-feather="home"></i>
            </TabsTrigger>
            <TabsTrigger value="events" className="hover:bg-secondary">
              <i data-feather="calendar"></i>
            </TabsTrigger>
            <TabsTrigger value="map" className="hover:bg-secondary">
              <i data-feather="map-pin"></i>
            </TabsTrigger>
            <TabsTrigger value="communities" className="hover:bg-secondary">
              <i data-feather="users"></i>
            </TabsTrigger>
            <TabsTrigger value="merch" className="hover:bg-secondary">
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
          <TabsContent className="h-screen" value="profile">
            { profileTab() }
          </TabsContent>
        </Tabs>
        <div className="w-screen">
          {
            fabBar()
          }
        </div>
      </main>
      <Script>
        feather.replace();
      </Script>
    </>
  );
}
