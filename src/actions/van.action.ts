"use server"

import { prisma } from "@/lib/prisma"
import { auth, currentUser } from "@clerk/nextjs/server"
import { Van } from "@prisma/client"
import { notFound } from "next/navigation"
type VanType = 'simple' | 'luxury' | 'rugged'

export async function getAllVans() {
  const vans = prisma.van.findMany()
  return vans
}

export async function filterVansByType(name: string) {
  const filteredVans = prisma.van.findMany({
    where: {
      type: name as VanType
    }
  })
  return filteredVans
}

export async function getVanById(id: number) {
  try {
    const van = await prisma.van.findUnique({
      where: { id: id }
    }) 
    return van
  } catch (error) {
    notFound()
  }    
}

export async function getUserVans() {
  const { userId } = await auth()
  const user = await currentUser()

  if (!userId || !user) return []
  const userDb = await prisma.user.findUnique({
    where: {
      clerkId: userId
    }
  })
  
  if (!userDb) return []
  const vans = await prisma.van.findMany({
    where: {
      hostId: userDb.id
    }
  })
  return vans
}

export async function newVan(van: Omit<Van, "id" | "hostId">) {
  const { userId } = await auth()
  const user = await currentUser()

  if (!userId || !user) return null
  // get hostId from logged user
  const userDb = await prisma.user.findUnique({
    select: {
      id: true
    },
    where: {
      clerkId: userId
    }
  })
  if (!userDb) return null
  // create new van with the found hostId
  const newVan = await prisma.van.create({
    data: {
      name: van.name,
      description: van.description,
      price: van.price,
      type: van.type,
      contact: van.contact,
      image: van.image,
      hostId: userDb.id
    }
  })
}

export async function updateVan(van: { id: number } & Partial<Omit<Van, "id" | "hostId">>) {
  const { userId } = await auth()
  const user = await currentUser()

  if (!userId || !user) return null
  const userDb = await prisma.user.findUnique({
    select: {
      id: true
    },
    where: {
      clerkId: userId
    }
  })
  if (!userDb) return null

  const vanDb = await prisma.van.findUnique({
    select: {
      id: true
    },
    where: {
      hostId: userDb.id, // ensures user can only update their own van
      id: van.id
    }
  })
  if (!vanDb) return

  const updatedVan = await prisma.van.update({
    where: {
      id: vanDb.id
    },
    data: { ...van }
  })
}

export async function deleteVan(id: number) {
  const { userId } = await auth()
  const user = await currentUser()

  if (!userId || !user) return null
  const userDb = await prisma.user.findUnique({
    select: {
      id: true
    },
    where: {
      clerkId: userId
    }
  })
  if (!userDb) return null

  const deletedVan = await prisma.van.delete({
    where: {
      hostId: userDb.id,
      id: id
    }
  })
}