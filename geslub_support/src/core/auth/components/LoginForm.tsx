import React, { FC } from 'react';
import Button from '@/ui/button/Button';
import Card from '@/ui/card/Card';
import CardContent from '@/ui/card/CardContent';
import CardHeader from '@/ui/card/CardHeader';
import CardTitle from '@/ui/card/CardTitle';
import Input from '@/ui/input/Input';


interface LoginFormProps {
  username: string;
  password: string;
  setUsername: (value: string) => void;
  setPassword: (value: string) => void;
  handleLogin: () => void;
}

const LoginForm: FC<LoginFormProps> = ({ username, password, setUsername, setPassword, handleLogin }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleLogin();
            }}
          >
            <div className="grid w-full items-center gap-4">
              <Input
                id="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Input
                id="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type="submit">Login</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginForm;
