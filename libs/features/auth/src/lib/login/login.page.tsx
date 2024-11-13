import { zodResolver } from '@hookform/resolvers/zod';
import { useLoginMutation } from '@vendor-master/api';
import { useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { z } from 'zod';

const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type LoginFormData = z.infer<typeof LoginSchema>;

export const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(LoginSchema),
  });

  const [login, loginResult] = useLoginMutation();

  const onSubmit = (data: LoginFormData) => {
    login(data);
  };

  if (loginResult.isSuccess) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex items-center justify-center content-container prose min-h-screen">
      <div className="w-full max-w-sm p-6">
        <h1 className="">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register('email', { required: 'Email is required' })}
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register('password', { required: 'Password is required' })}
              className="input input-bordered w-full"
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full mt-4"
            disabled={loginResult.isLoading}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
