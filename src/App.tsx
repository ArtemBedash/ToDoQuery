import { Provider } from "react-redux"
import { setupStore } from "./store/store"
import { RouterProvider } from "react-router-dom"
import { router } from "./router/router"

export const App = () => {
  return (
    <>
      <Provider store={setupStore()}>
        <RouterProvider router={router} />
      </Provider>
    </>
  );
}
