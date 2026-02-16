import { Tag } from "antd";
export type tagsType = "Pending" | "Approved" | "Rejected";
// export type tagsType = "success" | "warning" | "error";
// import { GoDotFill } from "react-icons/go";

interface props {
  type: tagsType;
}
const StatusTags = ({ type }: props) => {
  return (
    <Tag
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.1rem",
        padding: "0.2rem 0.5rem",
        whiteSpace: "nowrap",
      }}
      bordered={false}
      color={
        type === "Approved"
          ? "success"
          : type === "Rejected"
          ? "error"
          : type === "Pending"
          ? "warning"
          : ""
      }
    >
      {type}
    </Tag>
  );
};

export default StatusTags;
