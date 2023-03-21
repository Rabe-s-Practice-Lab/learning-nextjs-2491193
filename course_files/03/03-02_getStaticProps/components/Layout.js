import Link from "next/link";

// export default function Layout({ children }) {
//     return(
//         <>
//          <Link href="/"><a>Home</a></Link>
//           {children}
//         </>
//     )
// }

export default function Layout({ children }) {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Top Stories",
      path: "/news1/top-stories",
    },
    {
      title: "Popular",
      path: "/news1/popular",
    },
  ];
  return (
    <>
      {links.map((link) => {
        return (
          <Link href={link.path}>
            <a>{link.title} </a>
          </Link>
        );
      })}
      {children}
    </>
  );
}
