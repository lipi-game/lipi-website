export type ContentItem =
  | { type: "text"; value: string }
  | { type: "list"; items: string[] };