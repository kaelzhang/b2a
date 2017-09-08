import resolve from 'rollup-plugin-node-resolve'
import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.js',
  output: {
    file: 'lib/index.js',
    format: 'cjs'
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**', // only transpile our source code
      plugins: [
        "transform-class-properties",
        "transform-object-rest-spread",
        "transform-exponentiation-operator",
        "transform-async-to-generator",
        "syntax-trailing-function-commas",
        "transform-inline-environment-variables", [
          "transform-runtime", {
            "regenerator": true
          }
        ]
      ]
    })
  ]
}
