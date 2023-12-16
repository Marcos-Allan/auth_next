import { getCurrentUser } from "@/lib/sesssion"

export default async function Home() {
  const user = getCurrentUser()
  return (
    <div className='m-12'>
      {JSON.stringify(user)}
    </div>
  )
}
