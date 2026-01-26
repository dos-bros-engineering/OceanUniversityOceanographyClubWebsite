import { useEffect } from "react";

const UseTitleName = (title) => {
  useEffect(() => {
    document.title = title === "" ? "OCU Oceanography Club" : title + " | OCU Oceanography Club";
  }, [title])
}

export default UseTitleName;