import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';
import { Button } from './ui/Button';
import { Input } from './ui/Input';
import { Card, CardContent } from './ui/Card';

const loginSchema = z.object({
  email: z
    .string()
    .min(1, { message: 'Email address is required' })
    .email({ message: 'Please enter a valid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters long' }),
  rememberMe: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

interface SuperAdminLoginProps {
  onLoginSuccess: () => void;
}

export const SuperAdminLogin: React.FC<SuperAdminLoginProps> = ({ onLoginSuccess }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    setIsSubmitting(true);
    setLoginError(null);

    // Simulate network latency
    await new Promise((resolve) => setTimeout(resolve, 1200));

    if (data.email === 'admin@schoolerp.com' && data.password === 'admin123') {
      setIsSubmitting(false);
      onLoginSuccess();
    } else {
      setIsSubmitting(false);
      setLoginError('Invalid email or password. Try the demo credentials below.');
    }
  };

  return (
    <Card className="shadow-xl border-gray-100/60 bg-white/90 backdrop-blur-md">
      <CardContent className="p-8 md:p-10 text-left">
        <div className="mb-8">
          <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight leading-[1.33]">
            Super Admin Login
          </h2>
          <p className="text-sm text-gray-500 mt-2 leading-[1.43]">
            Access the organization-wide centralized management portal.
          </p>
        </div>

        {loginError && (
          <div className="mb-6 p-4 rounded-lg bg-red-50 border border-red-100 text-red-700 text-xs font-semibold flex items-start space-x-2">
            <span className="mt-0.5">⚠️</span>
            <span>{loginError}</span>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
          <Input
            id="email"
            label="Email Address"
            type="email"
            placeholder="admin@schoolerp.com"
            leftIcon={<Mail className="w-4 h-4" />}
            error={errors.email?.message}
            required
            {...register('email')}
          />

          <div className="space-y-1">
            <Input
              id="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              leftIcon={<Lock className="w-4 h-4" />}
              error={errors.password?.message}
              required
              rightIcon={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400 hover:text-gray-600 transition-colors p-1"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              }
              {...register('password')}
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center space-x-2.5 cursor-pointer">
              <input
                type="checkbox"
                className="h-4.5 w-4.5 rounded border-gray-300 text-primary-700 focus:ring-primary-700/30 accent-primary-700 transition-all cursor-pointer"
                {...register('rememberMe')}
              />
              <span className="text-sm font-semibold text-gray-600 select-none">Remember Me</span>
            </label>
            <a
              href="#forgot-password"
              onClick={(e) => {
                e.preventDefault();
                alert('In a real application, this would trigger a password reset link email.');
              }}
              className="text-sm font-bold text-primary-700 hover:text-primary-800 hover:underline transition-all"
            >
              Forgot Password?
            </a>
          </div>

          <Button
            type="submit"
            fullWidth
            isLoading={isSubmitting}
            className="py-3 shadow-teal-700/10 shadow-md font-semibold text-sm hover:shadow-lg transition-all"
          >
            Authenticate & Login
          </Button>
        </form>

        <div className="mt-6 p-5 bg-gray-50 border border-gray-100/80 rounded-lg">
          <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-3 leading-[1.43]">
            Demo Access Credentials
          </h4>
          <div className="flex flex-col sm:flex-row sm:justify-between text-xs text-gray-600 gap-2 sm:gap-0 mt-3">
            <div className="leading-[1.43]">
              <span className="font-medium text-gray-500">Email: </span>
              <code className="bg-white px-1.5 py-0.5 border border-gray-200 rounded text-primary-700 select-all font-semibold font-mono">
                admin@schoolerp.com
              </code>
            </div>
            <div className="leading-[1.43]">
              <span className="font-medium text-gray-500">Password: </span>
              <code className="bg-white px-1.5 py-0.5 border border-gray-200 rounded text-primary-700 select-all font-semibold font-mono">
                admin123
              </code>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
