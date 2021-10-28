import FooterSidebar from "./FooterSidebar";
import Profile from "./Profile";
import MenuItem from "./MenuItem";

export default function Sidebar() {
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem active title="Overview" icon="ic-menu-overview" />
          <MenuItem title="Transactions" icon="ic-menu-transaction" />
          <MenuItem title="Messages" icon="ic-menu-message" />
          <MenuItem title="Card" icon="ic-menu-card" />
          <MenuItem title="Rewards" icon="ic-menu-reward" />
          <MenuItem title="Settings" icon="ic-menu-setting" />
          <MenuItem title="Log Out" icon="ic-menu-logout" />
        </div>
        <FooterSidebar />
      </div>
    </section>
  );
}
