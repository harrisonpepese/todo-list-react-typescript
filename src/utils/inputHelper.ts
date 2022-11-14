import React from "react";

export default class InputHelper {
  static submitOnEnter(
    key: React.KeyboardEvent<HTMLDivElement>,
    callback: any
  ) {
    if (key.code === "Enter") {
      callback();
    }
  }
}
