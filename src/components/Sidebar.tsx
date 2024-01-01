/** @format */
"use client";

import React from "react";
import youtubeLogo from "@/assets/youtube_logo.png";
import Image from "next/image";
import HoverDiv from "./HoverDiv";
import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { usePathname } from "next/navigation";

import { cn } from "@/utils/cn";

import { ytSidebarDataset } from "./sidebarData";
import Link from "next/link";

type Props = {};

export default function Sidebar({}: Props) {
  const [isSidebarOpen, setSidebar] = useState(true);

  function toggleSidebar() {
    setSidebar(!isSidebarOpen);
  }

  return (
    <div className={cn("  h-full flex-col  flex  bg-black text-slate-50  ")}>
      <section className="px-5 py-4 flex items-center gap-4">
        <HoverDiv
          className={cn("rounded-full py-2 px-2", {
            "mx-2": !isSidebarOpen
          })}
          onClick={toggleSidebar}
        >
          <IoIosMenu className="text-3xl " />
        </HoverDiv>
        <Image
          className="w-[90px] h-[20px]"
          src={youtubeLogo}
          alt="youtube-logo"
        />
        {/* )} */}
      </section>
      <main
        className={cn("flex  flex-col items-start w-[240px]  h-full  ", {
          "w-[100px] ": !isSidebarOpen
        })}
      >
        {ytSidebarDataset.map((d, i: number) => (
          <>
            {d.title && (
              <section className="px-4  w-full">
                <SidebarItem
                  path={d.path}
                  key={i}
                  activeIcon={d.activeIcon}
                  defaultIcon={d.defaultIcon}
                  title={d.title}
                  isSidebarOpen={isSidebarOpen}
                />
              </section>
            )}

            {/* nested section */}
            {d.nestedItems && isSidebarOpen && d.nestedItems?.length > 0 && (
              <section className="px-4 w-full border-t border-zinc-600 mt-4 pt-4">
                <p className="px-3 mb-2">{d.sectionTitle}</p>
                {d.nestedItems?.map((n, i) => (
                  <SidebarItem
                    path={n.path}
                    key={i}
                    activeIcon={n.activeIcon}
                    defaultIcon={n.defaultIcon}
                    title={n.title}
                    isSidebarOpen={isSidebarOpen}
                  />
                ))}
              </section>
            )}
          </>
        ))}
        {isSidebarOpen && (
          <section className="px-4 flex flex-col text-zinc-400 gap-3  w-full border-t border-zinc-600 mt-4 pt-4 text-sm font-semibold">
            <p>About Press Copyright Contact us Creator Advertise Developers</p>
            <p>
              Terms Privacy Policy & Safety How YouTube works
              <br />
              Test new features
            </p>
            <p className="text-xs font-normal text-zinc-600">
              © 2024 Google LLC <br />
              
              @TradeMark AK-DEMON18
            </p>
          </section>
        )}
      </main>
    </div>
  );
}

type SidebarItemProps = {
  title: string | undefined;
  defaultIcon: React.ReactNode;
  activeIcon: React.ReactNode;
  path?: string;
  isSidebarOpen: boolean;
};

function SidebarItem(props: SidebarItemProps) {
  const pathname = usePathname();

  return (
    <Link href={props.path ?? "#"}>
      <HoverDiv
        isActive={pathname === props.path}
        className={cn("w-full flex items-center gap-5 ", {
          "flex-col gap-2": !props.isSidebarOpen
        })}
      >
        <section className="text-2xl  h-7 w-7 flex items-center">
          {props.isSidebarOpen ? props.defaultIcon : props.activeIcon}
        </section>
        <p
          className={cn("text-sm font-semibold", {
            "text-[10px]": !props.isSidebarOpen
          })}
        >
          {props.title}
        </p>
      </HoverDiv>
    </Link>
  );
}

// home
//  <GoHome />
// <GoHomeFill />

// shorts
// YtShortsIcon
// <SiYoutubeshorts />

// Subscriptions
// Subscriptions
// SubscriptionsFill

// You
// You
// YouFill
