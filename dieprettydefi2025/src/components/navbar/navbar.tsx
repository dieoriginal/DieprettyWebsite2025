import { LanguageSwitcher } from './language-switcher';

import { auth } from '@/app/api/auth/[...nextauth]/auth-options';
import { SignInButton } from '@/components/navbar/sign-in-button';
import { UserDropdown } from '@/components/navbar/user-dropdown';
import { Link } from '@/lib/i18n';
import * as m from '@/paraglide/messages';

export const Navbar = async () => {
  const session = await auth();

  return (
    <header className="w-full border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-mono text-lg font-bold">
          {m.app_name()}
        </Link>

        <div>
          <nav className="flex space-x-4">
            <Link href="/6videos" className="hover:text-gray-600">
              VIDEOS
            </Link>

            <Link href="/5player" className="hover:text-gray-600">
              MUSIC
            </Link>

            <Link href="/2merch" className="hover:text-gray-600">
              MERCH
            </Link>
            <Link href="/3bilheteira" className="hover:text-gray-600">
              BILHETEIRA
            </Link>
            <a
              href="https://www.twitch.tv/dieprettymercedes"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-600"
            >
              TWITCH
            </a>
            <Link href="/4press" className="hover:text-gray-600">
              EVENTOS
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          {session ? <UserDropdown session={session} /> : <SignInButton />}
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};
