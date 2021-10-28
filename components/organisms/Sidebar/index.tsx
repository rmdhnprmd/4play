import FooterSidebar from "./FooterSidebar";
import Profile from "./Profile";
import MenuItem from "./MenuItem";

interface SidebarProps {
  activeMenu: "overview" | "transactions" | "settings";
}
export default function Sidebar(props: SidebarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            active={activeMenu === "overview"}
            title="Overview"
            icon="ic-menu-overview"
            href="/member"
          />
          <MenuItem
            active={activeMenu === "transactions"}
            title="Transactions"
            icon="ic-menu-transaction"
            href="/member/transactions"
          />
          <MenuItem title="Messages" icon="ic-menu-message" href="/member" />
          <MenuItem title="Card" icon="ic-menu-card" href="/member" />
          <MenuItem title="Rewards" icon="ic-menu-reward" href="/member" />
          <MenuItem
            active={activeMenu === "settings"}
            title="Settings"
            icon="ic-menu-setting"
            href="/member/edit-profile"
          />
          <MenuItem title="Log Out" icon="ic-menu-logout" href="/sign-in" />
        </div>
        <FooterSidebar />
      </div>
    </section>
  );
}
