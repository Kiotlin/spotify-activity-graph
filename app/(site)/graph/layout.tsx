import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Graph",
  description: "Import your personal streaming data.",
}

interface GraphLayoutProps {
  children: React.ReactNode
}

export default function GraphLayout({ children }: GraphLayoutProps) {
  return <>{children}</>
}
