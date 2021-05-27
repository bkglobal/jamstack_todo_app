
// basic usage
const React = require('react');
const { ThemeProvider } = require('theme-ui')
const {dark} = require('@theme-ui/presets')


const currTheme = {
    ...dark,
    sizes: {container: 1024},
}

module.exports = ({element}) => (
  <ThemeProvider theme={currTheme}>{element}</ThemeProvider>
)