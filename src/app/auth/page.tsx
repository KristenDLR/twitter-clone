import { AuthForm } from "@/components/forms/AuthForm";

const AuthPage: React.FunctionComponent = () => {

    //TODO: Remove 
    return(
    <div className="flex flex-col items-center justify-center h-screen gap-4">
        <h1 className="text-4xl font-bond">NOT AUTHENTICATED</h1>
        <AuthForm />
    </div>
)
}

export default AuthPage;