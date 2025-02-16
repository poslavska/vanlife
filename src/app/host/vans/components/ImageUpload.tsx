"use client"
import { UploadButton } from '@/lib/uploadthing'

interface ImageUploadProps {
  onChange: (url:string) => void
  endpoint: "vanImage"
}

export default function ImageUpload({onChange, endpoint}: ImageUploadProps) {
  return (
    <UploadButton
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].ufsUrl);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
      content={{
        button: "Add image",
        allowedContent: " ",
      }}
      appearance={{
        button: "bg-blue-900 bg-opacity-60 hover:bg-opacity-80 font-semibold text-white rounded-full",
      }}
      className="absolute top-1 right-0 left-0"
    />
  );
}