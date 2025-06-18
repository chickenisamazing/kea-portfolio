import NavbarContainer from "@/component/layout/Navbar/NavbarContainer";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <NavbarContainer />
      <main>{children}</main>
    </>
  );
}
