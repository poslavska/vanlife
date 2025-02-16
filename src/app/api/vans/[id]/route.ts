import { NextResponse } from "next/server"
import { getVanById } from "@/actions/van.action"
import { auth, currentUser } from "@clerk/nextjs/server"

export async function GET(req: Request, props: { params: Promise<{ id: string }> }) {
  const { userId } = await auth()
  const user = await currentUser()
  const params = await props.params;

  if (!userId || !user) return
  const van = await getVanById(Number(params.id))
  if (!van) return NextResponse.json({ error: "Not Found" }, { status: 404 })

  return NextResponse.json(van)
}