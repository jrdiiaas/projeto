import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cliente from "./pages/Cliente";
import AddCliente from "./pages/AddCliente";
import EditCliente from "./pages/EditCliente";
import ViewCliente from "./pages/ViewCliente";
import NoMatch from "./pages/NoMatch";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Login from "./pages/Login";
import "./App.css";

function App() {
    return (
        <>
            <Routes>
                <Route index element={<Home />} />
                <Route path="cliente" element={<Cliente />}>
                    <Route index element={<AddCliente />} />
                    <Route
                        path="edit/:id"
                        element={
                            <PrivateRoute>
                                <EditCliente />
                            </PrivateRoute>
                        }
                    />
                    <Route
                        path="view"
                        element={
                            <PrivateRoute>
                                <ViewCliente />
                            </PrivateRoute>
                        }
                    />
                </Route>
                <Route
                    path="*"
                    element={
                        <PrivateRoute>
                            <NoMatch />
                        </PrivateRoute>
                    }
                />
                <Route path="/login" element={<Login />} />{" "}
                {/* Rota para o Login */}
                <Route path="*" element={<NoMatch />} />
            </Routes>
        </>
    );
}

export default App;
