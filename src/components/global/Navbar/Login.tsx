import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignupForm from "./SignupForm";

const Login = () => {
  return (
    <Sheet>
      <SheetTrigger className="rounded-xl w-20 h-10 bg-rose-500 text-white text-sm font-medium flex justify-center items-center">
        Login
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sign Up or Login to your account</SheetTitle>
          <SheetDescription>
            <Tabs defaultValue="account" className="w-[400px]">
              <TabsList className="w-[85%]">
                <TabsTrigger className="w-full" value="sign-up">
                  Sign Up
                </TabsTrigger>
                <TabsTrigger className="w-full" value="login">
                  Login
                </TabsTrigger>
              </TabsList>
              <TabsContent value="sign-up">
                <SignupForm />
              </TabsContent>
              <TabsContent value="login">
                {/* <AuthForm /> */}
              </TabsContent>
            </Tabs>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Login;
