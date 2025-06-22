import { Outlet } from "react-router-dom"

const Auth = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Card Container */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Auth