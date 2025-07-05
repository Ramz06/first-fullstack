import { Button } from "@/components/ui/button"
import { ArrowRight, Quote } from "lucide-react"

export const AuthSplash = () => {
    return (
        <div className="relative flex h-full flex-col justify-between rounded-lg">
            <div>
                <h2 className="text-3xl font-bold">Whats our job seeker said</h2>
                <Quote className="w-12 h-12 text-zinc-700 my-6" strokeWidth={1} />
                <blockquote className="text-zinc-400">
                    "Search and find your dream jobs"
                </blockquote>
                <div className="mt-6">
                    <p className="font-semibold">Mas parjono</p>
                    <p className="text-sm text-zinc-500">UI Designer google</p>
                </div>
                <div className="flex justify-between items-end">
                    <div className="text-8xl text-zinc-700">*</div>
                    <Button variant={"secondary"} size={"icon"} className="rounded-full h-14 w-14">
                        <ArrowRight />
                    </Button>
                </div>
            </div>
        </div>
    )
}