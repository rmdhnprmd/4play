interface FooterItemSmallProps {
  title: string;
}
export default function FooterItemSmall(props: FooterItemSmallProps) {
  const { title } = props;
  return (
    <div>
      <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
    </div>
  );
}
