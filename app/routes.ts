import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("crosswords", "routes/crosswords.tsx")
] satisfies RouteConfig;
