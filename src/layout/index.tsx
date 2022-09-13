import Head from 'next/head';

type LayoutProps = {
  title: string;
  description: string;
  children: JSX.Element[];
};

export function Layout({
  title = 'Calorcito',
  description = 'Calorcito, your calories tracker',
  children,
}: LayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <nav className='bg-sky-300 h-[60px]'>test</nav>

      <main className='container mx-auto flex flex-col items-center justify-center min-h-screen p-4'>
        {children}
      </main>
    </>
  );
}
