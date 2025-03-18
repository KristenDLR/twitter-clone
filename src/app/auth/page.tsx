import AuthForm from "@/components/forms/AuthForm"

const AuthPage: React.FunctionComponent = () => {
    return (
        <div className="flex flex-col items-center-justify-center h-screen gap-4">
            <h1 className="text-4xl font-bold">Not Authenticated</h1>
            <AuthForm />
        </div>
    )
}
export default AuthPage