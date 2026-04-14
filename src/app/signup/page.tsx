import SignupForm from '@/src/features/auth/components/SignupForm'

const Page = () => {
  return (
    <div className='h-screen w-full'>
        <div className="w-full h-full flex items-center justify-center bg-gray-200/80">
            <div className="mx-4 w-full md:w-1/4 p-8 bg-white rounded-lg ">
                <SignupForm />
            </div>
        </div>
    </div>
  )
}

export default Page