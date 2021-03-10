import nodeResolve from "@rollup/plugin-node-resolve";
import cjs from "@rollup/plugin-commonjs";
import sourcemaps from "rollup-plugin-sourcemaps";

const inputs = [{
  input: "dist-esm/index.js",
  output: {
    file: "dist/index.js",
    format: "umd",
    sourcemap: true,
    name: "wrapper-lib"
  },
  preserveSymlinks: false,
  plugins: [
    sourcemaps(),
    nodeResolve({
      mainFields: ["module", "browser"],
      preferBuiltins: false,
      browser: true
    }),
    cjs({
      namedExports: {
        "@microsoft/teams-js": ["initialize", "authentication"]
      }
    })
  ]
}];

export default inputs;
