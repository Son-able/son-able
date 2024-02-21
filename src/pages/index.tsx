'use client'
import Head from "next/head";
import Script from "next/script"
import Image from 'next/image'
import Link from "next/link";
import { useAuth, useUser } from "@clerk/nextjs";
import { UserButton } from "@clerk/nextjs";

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

export default function Home() {
  const [tab, setActiveTab] = useState("feed");

  const { isLoaded, userId, sessionId, getToken } = useAuth();
  const user = useUser()
  return (
    <>
      <Head>
        <title>Sonable</title>
        <meta name="description" content="Sonable" />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://cdn.jsdelivr.net/npm/feather-icons/dist/feather.min.js" async />

      </Head>
      <main className="relative flex min-h-screen h-screen flex-col items-center justify-center bg-gradient-to-b from-[#000000] to-[#111111]" style={{bottom: "-5px", paddingBottom: "0px"}}>
        <Menubar className="top-0 sticky items-end objects-contain bg-foreground border-none" dir="rtl" style={{
          position: "fixed",
          width: "100%", 
          height: "44px",
          borderRadius: "0px", 
          placeContent: "end",
        }}>
          <img className="md:hidden sticky top-0" src={"./sonable_icon.png"} style={{left: "0px", height: "37px", zIndex: 51, position: "fixed"}} />
          <a href="/" className="hidden md:flex sticky top-0">
            <img className="hidden md:flex sticky top-0" src={"./sonable_logo_transparent.png"} style={{left: "2px", height: "37px", zIndex: 51, position: "fixed"}} />
          </a>
          <MenubarMenu>
            <MenubarTrigger dir="rtl" className="objects-contain sticky top-0" style={{color: "black", backgroundColor: "black"}}>
              <Avatar style={{marginBottom: "-7px"}}>
                <AvatarImage src={user.user?.imageUrl} style={{display: "block", zIndex: 51}} />
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
          className="w-[33%] h-screen border-border rounded-lg" 
          style={{
            position: "absolute", 
            top: "3px", 
            width: "60%", 
            minWidth: "240px",
          }}
          onValueChange={setActiveTab}
          activationMode="automatic"
        >
          <TabsList className="grid w-[60%] top-0 sticky grid-cols-5 bg-foreground fg-foreground items-center" style={{stroke: "red", zIndex: 50, position: "fixed"}}>
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
          <TabsContent value="profile">
            { profileTab() }
          </TabsContent>
        </Tabs>
      </main>
      <Script>
        feather.replace();
      </Script>
    </>
  );
}
