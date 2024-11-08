import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useAuthStore } from '@/hooks/useAuthStore'
import { Menu } from 'lucide-react'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import logoJuegosFlorales from '../assets/logo-juegosflorales.png'

export default function Component() {
  const navigate = useNavigate()
  const { isAuthenticated, startLogout } = useAuthStore()
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  console.log({ isAuthenticated })

  const isActive = (path: string) =>
    location.pathname === path || location.pathname.includes(path)

  const handleLogout = () => {
    startLogout()
  }
  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-16 items-center'>
        <Link to='/' className='flex items-center space-x-2 ml-10'>
          <img
            src={logoJuegosFlorales}
            alt='UPT Logo'
            width={40}
            height={40}
            className='rounded-full'
          />

          <span className='hidden text-xl font-bold sm:inline-block ml-10 transition duration-150 transform hover:text-purple-600 hover:scale-110'>
            Juegos Florales 2024
          </span>
        </Link>
        {/* Desktop Navigation */}
        <NavigationMenu className='hidden ml-auto lg:flex'>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink
                href='/about'
                className={`${
                  isActive('/about')
                    ? 'border-[1px] border-black/50 bg-accent'
                    : ''
                } group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50`}
              >
                Acerca de
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              {isAuthenticated ? (
                <NavigationMenuLink
                  href='/eventos'
                  className={`${
                    isActive('/eventos')
                      ? 'border-[1px] border-black/50 bg-accent '
                      : ''
                  } group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50`}
                >
                  Eventos
                </NavigationMenuLink>
              ) : (
                <>
                  <NavigationMenuTrigger>
                    <Link
                      to='/eventos'
                      className={`${
                        isActive('/eventos') ? '' : ''
                      } group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50`}
                    >
                      Eventos
                    </Link>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className='grid gap-3 p-4 w-[200px]'>
                      <Link
                        to='/eventos/agregar'
                        className='block p-2 hover:bg-accent rounded-md'
                      >
                        Agregar
                      </Link>

                      <Link
                        to='/eventos/editar'
                        className='block p-2 hover:bg-accent rounded-md'
                      >
                        Editar
                      </Link>
                      <Link
                        to='/eventos/cuento'
                        className='block p-2 hover:bg-accent rounded-md'
                      >
                        Eliminar
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </>
              )}
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href='/equipos'
                className={`${
                  isActive('/equipos')
                    ? 'border-[1px] border-black/50 bg-accent'
                    : ''
                } group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50`}
              >
                Equipos
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href='/participantes'
                className={`${
                  isActive('/participantes')
                    ? 'border-[1px] border-black/50 bg-accent'
                    : ''
                }   group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50`}
              >
                Participantes
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                href='/lugares'
                className={`${
                  isActive('/lugares')
                    ? 'border-[1px] border-black/50 bg-accent'
                    : ''
                } group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50`}
              >
                Lugares
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className='lg:hidden ml-auto'>
            <Button variant='ghost' size='icon'>
              <Menu className='h-5 w-5' />
              <span className='sr-only'>Toggle navigation menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent side='right'>
            <SheetTitle>Menú Principal</SheetTitle>
            <SheetHeader>
              <SheetDescription>
                Selecciona una opción para continuar
              </SheetDescription>
            </SheetHeader>
            <nav className='flex flex-col gap-4'>
              <Link
                to='/about'
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive('/about') ? 'bg-accent' : ''
                } block py-2 text-lg`}
              >
                Acerca de
              </Link>
              <Link
                to='/eventos'
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive('/eventos') ? 'bg-accent' : ''
                } block py-2 text-lg`}
              >
                Eventos
              </Link>
              <Link
                to='/equipos'
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive('/equipos') ? 'bg-accent' : ''
                } block py-2 text-lg`}
              >
                Equipos
              </Link>
              <Link
                to='/participantes'
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive('/participantes') ? 'bg-accent' : ''
                } block py-2 text-lg`}
              >
                Participantes
              </Link>
              <Link
                to='/lugares'
                onClick={() => setIsOpen(false)}
                className={`${
                  isActive('/lugares') ? 'bg-accent' : ''
                } block py-2 text-lg`}
              >
                Lugares
              </Link>
              {isAuthenticated ? (
                <Button onClick={handleLogout}>Logout</Button>
              ) : (
                <Link to='/login'>Login</Link>
              )}
            </nav>
          </SheetContent>
        </Sheet>
        {isAuthenticated ? (
          <Button className='ml-2' onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <Button className='ml-2' onClick={() => navigate('/login')}>
            Login
          </Button>
        )}
      </div>
    </header>
  )
}
