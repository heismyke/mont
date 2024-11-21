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

  const validatePassword = (password: string) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    return regex.test(password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-black">
      <Card className="w-full max-w-md mx-auto shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-xl md:text-2xl">
            {isSignUp ? 'Create your account' : 'Sign in to your account'}
          </CardTitle>
          <CardDescription className="text-sm md:text-base">
            Choose your preferred sign in method
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            {/* Social Auth Buttons */}
            <div className="grid grid-cols-1 gap-3">
              {[
                { 
                  provider: 'Google', 
                  icon: '/assets/protocols/google.svg', 
                  onClick: signInWithGoogle 
                },
                { 
                  provider: 'GitHub', 
                  icon: '/assets/protocols/github.svg', 
                  onClick: signInWithGithub 
                },
                { 
                  provider: 'Discord', 
                  icon: '/assets/protocols/discord.svg', 
                  onClick: signInWithDiscord 
                }
              ].map(({ provider, icon, onClick }) => (
                <Button
                  key={provider}
                  variant="outline"
                  size={'lg'}
                  onClick={onClick}
                  className="w-full flex items-center justify-center space-x-2"
                >
                  <img 
                    src={icon} 
                    alt={provider} 
                    className='w-5 h-5' 
                  />
                  <span>{provider}</span>
                </Button>
              ))}
            </div>

            {/* Separator */}
            <div className="relative my-4">
              <Separator className="w-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-white px-2 text-xs text-gray-500 uppercase">
                  Or continue with
                </span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full"
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
                  className="w-full"
                />
                {passwordError && (
                  <p className='text-xs text-red-500 mt-1'>
                    {passwordError}
                  </p>
                )}
              </div>
              <Button 
                type="submit"
                size={'lg'}
                className="w-full"
                disabled={isLoading}
              >
                {isLoading 
                  ? (isSignUp ? "Signing up..." : "Signing in...") 
                  : (isSignUp ? "Sign Up" : "Sign In")
                }
              </Button>
            </form>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button 
            variant="link" 
            className="text-sm text-gray-600 hover:text-gray-900"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp 
              ? 'Already have an account? Sign in' 
              : "Don't have an account? Sign up"
            }
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthForm;