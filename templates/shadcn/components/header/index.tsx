import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Header, Item } from "@/types/landing";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function ({ header }: { header: Header }) {
  if (header.disabled) {
    return null;
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* 桌面版 LOGO 和导航 */}
        <div className="hidden md:flex items-center">
          <Link
            href={header.brand?.url || ""}
            className="text-lg font-medium mr-16"
          >
            {header.brand && header.brand.avatar ? (
              <div className="flex items-center gap-x-2 cursor-pointer">
                <img
                  src={header.brand.avatar.src}
                  alt={header.brand.avatar.title}
                  className="h-8"
                />
                <h1 className="text-xl font-bold">{header.brand.title}</h1>
              </div>
            ) : (
              <h1 className="text-xl font-bold cursor-pointer">
                {header.brand?.title}
              </h1>
            )}
          </Link>

          <nav className="flex items-center space-x-6 text-sm">
            {header.nav?.items?.map((v: Item, idx: number) => (
              <Link key={idx} href={v.url || ""} target={v.target || "_self"}>
                {v.title}
              </Link>
            ))}
          </nav>
        </div>

        {/* 移动端 LOGO */}
        <div className="md:hidden flex items-center">
          <Link
            href={header.brand?.url || ""}
            className="text-lg font-medium"
          >
            {header.brand && header.brand.avatar ? (
              <div className="flex items-center gap-x-2 cursor-pointer">
                <img
                  src={header.brand.avatar.src}
                  alt={header.brand.avatar.title}
                  className="h-8"
                />
                <h1 className="text-xl font-bold">{header.brand.title}</h1>
              </div>
            ) : (
              <h1 className="text-xl font-bold cursor-pointer">
                {header.brand?.title}
              </h1>
            )}
          </Link>
        </div>

        {/* 桌面版按钮和主题切换 */}
        <div className="hidden md:flex items-center space-x-4">
          <ModeToggle />
          {header.buttons?.map((v, idx) => (
            <Link key={idx} href={v.url || ""} target={v.target || "_self"}>
              <Button
                size="sm"
                variant={v.theme === "outline" ? "outline" : "default"}
              >
                {v.title}
              </Button>
            </Link>
          ))}
        </div>

        {/* 移动端菜单 */}
        <div className="md:hidden flex items-center">
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="ml-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">打开菜单</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {header.nav?.items?.map((v: Item, idx: number) => (
                <DropdownMenuItem key={idx}>
                  <Link href={v.url || ""} target={v.target || "_self"} className="w-full">
                    {v.title}
                  </Link>
                </DropdownMenuItem>
              ))}
              {header.buttons?.map((v, idx) => (
                <DropdownMenuItem key={idx}>
                  <Link href={v.url || ""} target={v.target || "_self"} className="w-full">
                    {v.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
