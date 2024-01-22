import { authOptions } from "@/lib/auth"
import { Metadata } from "next"
import { getServerSession } from "next-auth"

export const metadata: Metadata = {
  title: "Graph",
  description: "Graph your music activity",
}

export default async function GraphPage() {
  const session = await getServerSession(authOptions)
  return (
    <div className="flex items-center justify-center">
      {JSON.stringify(session, null, 2)}
    </div>
  )
}
