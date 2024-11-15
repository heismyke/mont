import React, { useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const AuthForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [passwordError, setPasswordError] = useState('');
  const { signIn, signUp, signInWithGoogle, signInWithDiscord, signInWithGithub} = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const passwordValid = validatePassword(password);
    if (!passwordValid) {
      setPasswordError("Password must be at least 8 characters long, contain an uppercase letter, a lowercase letter, and a number.");
      setIsLoading(false);
      return;
    }

    try {
      if (isSignUp) {
        await signUp(email, password);
      } else {
        await signIn(email, password);
      }
    } catch (error) {
      console.error('Authentication error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Password validation function
  const validatePassword = (password: string) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
        <CardTitle>Sign in to your account</CardTitle>
          <CardDescription>
            Choose your preferred sign in method below
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {/* Social Auth Buttons */}
            <div className="grid grid-cols-1 gap-3">
              <Button
                variant="outline"
                size={'lg'}
                onClick={signInWithGoogle}
                className="w-full"
              >
                <img src='/src/assets/protocols/google.svg' alt='Google' className='w-5 h-5 mr-1' />
                Google
              </Button>
              <Button
                variant="outline"
                size={'lg'}
                onClick={signInWithGithub}
                className="w-full"
              >
                <img src='/src/assets/protocols/github.svg' alt='GitHub' className='w-5 h-5 mr-1' />
                GitHub
              </Button>
              <Button
                variant="outline"
                size={'lg'}
                onClick={signInWithDiscord}
                className="w-full"
              >
                <img src='/src/assets/protocols/discord.svg' alt='Discord' className='w-5 h-5 mr-1' />
                Discord
              </Button>
            </div>

            {/* Separator */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <Separator className="w-full" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-white px-2 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <p className='text-xs text-red-500'>{passwordError}</p>
              </div>
              <Button 
                type="submit"
                size={'lg'}
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (isSignUp ? "Signing up..." : "Signing in...") : (isSignUp ? "Sign Up" : "Sign In")}
              </Button>
            </form>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button 
            variant="link" 
            className="text-sm text-gray-600 hover:text-gray-900"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthForm;
