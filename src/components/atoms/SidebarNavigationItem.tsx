import Link from 'next/link';

type Props = {
  ItemName: string;
  URL: string;
};

const SidebarNavigationItem: React.VFC<Props> = ({ ItemName, URL }: Props) => {
  return (
    <div className="sm:pt-12">
      <Link href={URL}>
        <a>{ItemName}</a>
      </Link>
    </div>
  );
};
export default SidebarNavigationItem;
