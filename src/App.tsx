import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"
import { GlobalStyle } from "./styles/global"

import { BrowserRouter } from "react-router-dom"
import { AppRoutes } from "./routes/app.routes"

import { SimulationProvider } from "./context/SimulationContext"

export function App() {
  return (
    <SimulationProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ThemeProvider>
    </SimulationProvider>
  )
}