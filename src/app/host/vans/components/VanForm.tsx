"use client"
import { deleteVan, newVan, updateVan } from "@/actions/van.action";
import { Van, VanType } from "@prisma/client";
import defaultVanPic from '../../../../../public/default-van.jpg'
import Image, { StaticImageData } from "next/image"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { TriangleAlert } from "lucide-react";
import ImageUpload from "./ImageUpload";

interface VanFormProps {
  van?: Van | null
  isCreateVan?: boolean
}

export default function VanForm({van, isCreateVan}:VanFormProps) {
  const router = useRouter()
  const [selectedImage, setSelectedImage] = useState<string>(
    van?.image ?? (defaultVanPic as StaticImageData).src
  ) 
  const [deleteModal, setDeleteModal] = useState(false)
  let borderColor = ""
  let bgColor = ""
  
  switch (van?.type){
    case "simple":
      borderColor = 'border-[#E17654]'
      bgColor = 'bg-[#E17654]'
      break
    case "luxury":
      borderColor = 'border-[#161616]'
      bgColor = 'bg-[#161616]'
      break
    case "rugged":
      borderColor = 'border-[#115E59]'
      bgColor = 'bg-[#115E59]'
      break
  }
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    try {
      if (selectedImage) {
        formData.append("image", selectedImage)
      }

      const data = Object.fromEntries(formData)
      let image = (defaultVanPic as StaticImageData).src

      if (selectedImage) {
        image = selectedImage
      } else if (typeof data.image === "string") {
        image = data.image
      }

      const formattedData = {
        name: data.name as string,
        description: data.description as string,
        image: image,
        contact: data.contact as string,
        type: data.type as VanType,
        price: Number(data.price),
      }

      if (isCreateVan) {
        await newVan(formattedData)
        router.replace("/host/vans")
      } else {
        await updateVan({ id: van?.id ?? 0, ...formattedData })
        router.replace("/host/vans")
      }
    } catch (error) {
      console.error("Error creating or updating van:", error)
    }
  }

  const handleDeleteVan = () => {
    if (!van?.id) return
    setDeleteModal(true)
  }

  const handleDeleteModal = async () => {
    if (!van?.id) return
    await deleteVan(van.id)
    router.replace("/host/vans")
  }

  return (
    <>
      <section className='flex flex-col bg-[#FFFFFF] w-full sm:mx-auto max-w-[920px] px-[1.625em] pt-[1.4375em] pb-[1.625em] rounded-[6px]'>
        <div className='flex flex-col min-[470px]:flex-row min-[470px]:items-center gap-5 min-[470px]:gap-6 mb-[1.5em]'>
          {/* Image with upload button */}
          <div className='relative w-[155px] h-[155px]'>
            <Image
              src={selectedImage ?? (defaultVanPic as StaticImageData).src}
              className='rounded-[5px]'
              width={155}
              height={155}
              alt={`Image of the '${van?.name}' van`}
            />
            <ImageUpload 
            onChange={(url) => {
              setSelectedImage(url)}}
            endpoint="vanImage"/>
          </div>
          <div className='flex flex-col mb-[1em]'>
            <p className={`self-start px-[0.8125em] py-[0.25em] mb-[1.125em] text-[1rem] rounded-[5px] font-semibold text-[#FFEAD0] ${bgColor || 'bg-[#E17654]'}`}>
              {van?.type ? van.type.charAt(0).toUpperCase() + van.type.slice(1) : "Simple"}</p>
            <p className='text-[1.375rem] break-all font-bold mb-[0.4em]'>{van?.name ? van.name : "Name of the van"}</p>
            <p className='text-[1.15rem] font-bold leading-[1.15rem]'>${van?.price ? van.price : 0}<span className='text-[1rem] font-medium'>/day</span></p>
          </div>
        </div>
        <span className='after:block after:content-[" "] after:h-[1px] after:bg-[#858585] mb-6'></span>
        <form onSubmit={handleSubmit} className='flex flex-col w-full'>
          <label className='flex items-center gap-2 mb-5'>Name:  
            <input type="text" required
            name="name"
            maxLength={40}
            className={`w-full max-w-[440px] border-[2px] focus:outline-[#932424] ${borderColor || 'border-[#E17654]'} rounded-[4px] p-1`}
            defaultValue={van?.name ? van.name : "Amazing Van"} />
          </label>
          <fieldset className="mb-5">
            <legend className="mb-1">Type: </legend>
            <div className="flex flex-col gap-2 sm:flex-row pl-3 sm:justify-between sm:max-w-[420px]">
              <label>
                <input type="radio"
                name="type"
                className="mr-1"
                defaultChecked={van?.type === "simple" || !van}
                value="simple" />
                Simple
              </label>
              <label>
                <input type="radio"
                name="type"
                className="mr-1"
                defaultChecked={van?.type === "rugged"}
                value="rugged" />
                Rugged
              </label>
              <label>
                <input type="radio"
                name="type"
                className="mr-1"
                defaultChecked={van?.type === "luxury"}
                value="luxury" />
                Luxury
              </label>
            </div>
          </fieldset>
          <label className='flex items-center gap-2 mb-5'>Price:  
            <input type="text" required
            min={0}
            max={9999999}
            name="price" 
            placeholder="100"
            className={`w-full border-[2px] focus:outline-[#932424] ${borderColor || 'border-[#E17654]'} max-w-[200px] rounded-[4px] p-1`}
            defaultValue={van?.price ? van.price : 70} />
          </label>
          <label className="mb-2">Description:</label>  
          <textarea required
          minLength={40}
          maxLength={350}
          name="description" 
          className={`w-full border-[2px] focus:outline-[#932424] ${borderColor || 'border-[#E17654]'} mb-5 rounded-[4px] p-1`}
          rows={5}
          defaultValue={van?.description ? van.description : "Describe your van and put all the necessary details"} />
          <label className="mb-2">Contacts:</label>  
          <textarea required
          minLength={10}
          maxLength={130}
          name="contact" 
          className={`w-full border-[2px] mb-12 focus:outline-[#932424] ${borderColor || 'border-[#E17654]'} rounded-[4px] p-1`}
          rows={3}
          defaultValue={van?.contact ? van.contact : "Write your contacts"} />
          <div className="flex flex-col gap-6 sm:flex-row sm:gap-0 sm:justify-between">
            <button type="button" 
            onClick={handleDeleteVan}
            disabled={isCreateVan}
            className='px-6 py-[0.5em] font-bold text-[1.15rem]  bg-[#bf2525] text-[#f1f1f1] rounded-[5px]'>
              Delete van
            </button>
            <button type="submit"
            className={`px-6 py-[0.5em] font-bold text-[1.15rem] ${bgColor || 'bg-[#E17654]'} text-[#f1f1f1] rounded-[5px]`}>
              Submit changes
            </button>
          </div>
        </form>
      </section>
      
      {deleteModal && (
        <div className="fixed inset-0 bg-black px-[1em] sm:px-0 bg-opacity-50 flex justify-center items-center"
        onClick={(e) => e.stopPropagation()}>
          <div className="flex flex-col rounded-[4px] bg-white max-w-[550px] max-h-fit p-5">
            <div className="flex gap-5 mb-5">
              <TriangleAlert strokeWidth={1.5} color="#4d4d4d" size={42} />
              <div className="flex flex-col gap-1">
                <p className="font-medium text-[1.125rem] sm:text-[1.25rem]">Delete Van</p>
                <p className="text-[1rem] sm:text-[1.0625rem] text-gray-400">{`Are you sure you want to delete your '${van?.name}' van?`}</p>
              </div>
            </div>
            <hr />
            <div className="flex justify-end mt-4">
              <div className="flex gap-4">
                <button className="bg-gray-300 px-[0.875em] py-2 rounded-[4px]" type="button" onClick={() => setDeleteModal(false)}>Cancel</button>
                <button className="bg-red-700 text-white px-[0.875em] py-2 rounded-[4px]" type="button" onClick={handleDeleteModal}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}