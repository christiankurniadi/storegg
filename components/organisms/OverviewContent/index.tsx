import TableRow from "./TableRow"
import TopUpCategory from "./TopUpCategory"

export default function OverviewContent() {
  return (
    <>
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Overview</h2>
          <div className="top-up-categories mb-30">
            <p className="text-lg fw-medium color-palette-1 mb-14">
              Top Up Categories
            </p>
            <div className="main-content">
              <div className="row">
                <TopUpCategory src="game-desktop-ic" totalSpent={18000500}>
                  Game
                  <br />
                  Desktop
                </TopUpCategory>{" "}
                <TopUpCategory src="game-mobile-ic" totalSpent={8455000}>
                  Game
                  <br />
                  Mobile
                </TopUpCategory>{" "}
                <TopUpCategory src="other-categories-ic" totalSpent={5000000}>
                  Other
                  <br />
                  Categories
                </TopUpCategory>
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
                    src="overview-1"
                    title="Mobile Legends: The New Battle 2021"
                    category="Mobile"
                    item="200 Gold"
                    price={290000}
                    status="Pending"
                  />
                  <TableRow
                    src="overview-2"
                    title="Call of Duty:Modern"
                    category="Desktop"
                    item="550 Gold"
                    price={740000}
                    status="Success"
                  />
                  <TableRow
                    src="overview-3"
                    title="Clash of Clans"
                    category="Mobile"
                    item="100 Gold"
                    price={120000}
                    status="Failed"
                  />
                  <TableRow
                    src="overview-4"
                    title="The Royal Game"
                    category="Mobile"
                    item="225 Gold"
                    price={200000}
                    status="Pending"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
