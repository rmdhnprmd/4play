import cx from "classnames";

interface TableRowProps {
  image: string;
  title: string;
  category: string;
  quantity: number;
  item: string;
  price: number;
  status: "Pending" | "Success" | "Failed";
}

export default function TableRow(props: TableRowProps) {
  const { image, title, category, quantity, item, price, status } = props;
  const statusClass = cx({
    "float-start icon-status pending": true,
    pending: status === "Pending",
    success: status === "Success",
    failed: status === "Failed",
  });

  return (
    <tr className="align-middle">
      <th scope="row">
        <img
          className="float-start me-3 mb-lg-0 mb-3"
          src={`/img/${image}.png`}
          width="80"
          height="60"
          alt="game thumb"
        />
        <div className="game-title-header">
          <p className="game-title fw-medium text-start color-palette-1 m-0">
            {title}
          </p>
          <p className="text-xs fw-normal text-start color-palette-2 m-0">
            {category}
          </p>
        </div>
      </th>
      <td>
        <p className="fw-medium color-palette-1 m-0">
          {quantity} {item}
        </p>
      </td>
      <td>
        <p className="fw-medium text-start color-palette-1 m-0">{price}</p>
      </td>
      <td>
        <div>
          <span className={statusClass}></span>
          <p className="fw-medium text-start color-palette-1 m-0 position-relative">
            {status}
          </p>
        </div>
      </td>
    </tr>
  );
}
