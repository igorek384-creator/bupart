'use client';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    await signInWithEmailAndPassword(auth, email, password);
    alert('Вход выполнен');
  };

  return (
    <div className="max-w-md mx-auto bg-[#161A22] p-6 rounded-xl">
      <h1 className="text-xl mb-4">Вход</h1>

      <input
        className="w-full p-3 mb-3 rounded"
        placeholder="Email"
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="w-full p-3 mb-4 rounded"
        placeholder="Пароль"
        onChange={e => setPassword(e.target.value)}
      />

      <button
        onClick={login}
        className="w-full bg-[#F5C542] text-black p-3 rounded font-medium"
      >
        Войти
      </button>
    </div>
  );
}