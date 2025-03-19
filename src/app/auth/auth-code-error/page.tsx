export default function AuthCodeErrorPage() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-3xl font-bold mb-4">Authentication Error</h1>
        <p className="text-lg text-gray-600 mb-6">
          Something went wrong during authentication. Please try again.
        </p>
        <a
          href="/"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Go Back Home
        </a>
      </div>
    )
  }
  