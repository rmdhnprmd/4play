import Category from "./Category";
import TableRow from "./TableRow";

export default function OverviewContent() {
  return (
    <main className="main-wrapper">
      <div className="ps-lg-0">
        <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
        <div className="top-up-categories mb-30">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Top Up Categories
          </p>
          <div className="main-content">
            <div className="row">
              <Category nominal={18000500} icon="ic-desktop">
                Game <br /> Desktop
              </Category>
              <Category nominal={8455000} icon="ic-mobile">
                Game <br /> Mobile
              </Category>
              <Category nominal={5000000} icon="ic-desktop">
                Other <br />
                Categories
              </Category>
            </div>
          </div>
        </div>
        <div className="latest-transaction">
          <p className="text-lg fw-medium color-palette-1 mb-14">
            Latest Transactions
          </p>
          <div className="main-content main-content-table overflow-auto">
            <table className="table table-borderless">
              <thead>
                <tr className="color-palette-1">
                  <th className="text-start" scope="col">
                    Game
                  </th>
                  <th scope="col">Item</th>
                  <th scope="col">Price</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <TableRow
                  image="overview-1"
                  title="Mobile Legend: Bang Bang"
                  category="Mobile"
                  quantity={200}
                  item="Diamond"
                  price={290000}
                  status="Pending"
                />
                <TableRow
                  image="overview-2"
                  title="Call of Duty: Modern"
                  category="Mobile"
                  quantity={550}
                  item="Gold"
                  price={740000}
                  status="Success"
                />
                <TableRow
                  image="overview-3"
                  title="Clash of Clans"
                  category="Mobile"
                  quantity={100}
                  item="Gems"
                  price={120000}
                  status="Failed"
                />
                <TableRow
                  image="overview-4"
                  title="Valorant"
                  category="Desktop"
                  quantity={225}
                  item="Gold"
                  price={120000}
                  status="Pending"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
