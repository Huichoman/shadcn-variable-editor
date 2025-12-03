import { useTheme } from '@/components/theme-provider';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Moon, Sun } from 'lucide-react';
import { useIntlayer, useLocale } from 'react-intlayer';
import { Link } from 'react-router-dom';

export function Navbar() {
  const { setLocale, locale } = useLocale();
  const { setTheme, theme } = useTheme();
  const { home, about, toggleTheme, changeLanguage } = useIntlayer('navbar');

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-14 items-center'>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to='/' className={navigationMenuTriggerStyle()}>
                {home}
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to='/about' className={navigationMenuTriggerStyle()}>
                {about}
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className='flex flex-1 items-center justify-end space-x-4'>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='ghost' size='sm' title={changeLanguage.value}>
                {locale.toUpperCase()}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => setLocale('en')}>
                English
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLocale('es')}>
                Español
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant='ghost'
            size='icon'
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            title={toggleTheme.value}
          >
            <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
            <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
            <span className='sr-only'>{toggleTheme}</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
