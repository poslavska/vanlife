import HostNavbar from '@/app/host/components/HostNavbar'

export default function HostLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <>
      <HostNavbar />
      {children}
    </>
  )
}