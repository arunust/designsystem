import React, { useState } from 'react';
import Input from '../src/componets/atom/input/Input';
import Button from '../src/componets/atom/button/button';
import { FaUser, FaLock } from 'react-icons/fa';
import users from '../src/users.json';
import policies from '../src/theme-policies.json';

const evaluatePolicyRule = (userAttributes: any, rule: string): boolean => {
  try {
    const fn = new Function('user', `return ${rule};`);
    return fn(userAttributes);
  } catch (err) {
    console.error('Error evaluating rule:', err);
    return false;
  }
};

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const foundUser = users.find(
      (user) => user.username === username && user.password === password
    );

    if (foundUser) {
      // Determine theme based on policies
      let theme = 'light'; // default
      for (const policy of policies) {
        if (evaluatePolicyRule(foundUser.attributes, policy.rule)) {
          if (policy.policy === 'set dark theme') {
            theme = 'dark';
          }
          break;
        }
      }

      // Apply theme
      // document.documentElement.classList.remove('light', 'dark');
      // document.documentElement.classList.add(theme);

      // Save session with attributes
      const sessionData = {
        username: foundUser.username,
        attributes: foundUser.attributes,
        theme:theme
      };
      localStorage.setItem('userSession', JSON.stringify(sessionData));

      window.location.reload(); // To trigger re-render
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-background px-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
        className="w-full max-w-md flex flex-col gap-6 bg-white dark:bg-background p-8 rounded-md shadow-md"
      >
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">Login</h2>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <Input
          placeholder="Username"
          leftIcon={<FaUser />}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Input
          type="password"
          placeholder="Password"
          leftIcon={<FaLock />}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit" variant="primary" variantType="solid">
          Login
        </Button>
      </form>
    </div>
  );
};

export default Login;
