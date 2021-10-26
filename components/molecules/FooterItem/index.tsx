import Link from "next/link";

interface FooterItemProps {
  title: string;
  href: string;
  target: string;
}
export default function FooterItem(props: Partial<FooterItemProps>) {
  const { title, href = "", target } = props;
  return (
    <li className="mb-6">
      <Link href={href}>
        <a
          className="text-lg color-palette-1 text-decoration-none"
          target={target}
        >
          {title}
        </a>
      </Link>
    </li>
  );
}
