import Head from "next/head";
import ToggleThemeButton from "@/components/ToggleThemeButton";
import LoginButton from "@/components/LoginButton";

type LayoutProps = {
  title: string;
  description: string;
  children: JSX.Element[];
};

export function Layout({
  title = "Calor",
  description = "Calor, your calories tracker",
  children,
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav
        className="border-b-4 dark:bg-black bg-hard-orange h-[60px]
      flex items-center justify-end sm:px-16 px-4 sm:gap-8 gap-4"
      >
        <LoginButton />
        <ToggleThemeButton />
      </nav>
      <main className="container mx-auto flex flex-col items-center justify-center min-h-[calc(100vh-60px)] p-4">
        {children}
      </main>
    </>
  );
}
