<<<<<<< HEAD
import { redirect } from 'next/navigation';
import { routing } from '../i18n/routing';

export default function RootPage() {
  redirect(`/${routing.defaultLocale}`);
=======
import LocaleRedirect from "./LocaleRedirect";

export default function RootPage() {
  return <LocaleRedirect />;
>>>>>>> e5ef5b6b706a18aca6a849943993395dbf747f10
}
