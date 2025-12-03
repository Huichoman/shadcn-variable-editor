import { useI18n } from '@/hooks/useI18n';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

export function Layout() {
  useI18n();

  return (
    <div className='relative flex min-h-screen flex-col'>
      <Navbar />
      <main className='flex-1 container mx-auto py-8'>{<Outlet />}</main>
    </div>
  );
}
