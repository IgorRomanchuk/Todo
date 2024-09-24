import React, { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { PublicRoute } from "../../components/Routes/PublicRoute";

import {
  URL_HOME,
  URL_CREATE_TODO,
  URL_TODO_LIST,
  URL_NOT_FOUND,
} from "../../constants/clientUrl";

const HomePage = lazy(() => import("../../features/HomePage/HomePage"));
const CreateTodo = lazy(() => import("../../features/CreateTodo/CreateTodo"));
const NotFound = lazy(() => import("../../features/NotFound/NotFound"));
const TodoList = lazy(() => import("../../features/TodoList"));

export const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        path: "*",
        element: <Navigate to={URL_NOT_FOUND} />,
      },
      {
        path: URL_NOT_FOUND,
        element: (
          <Layout>
            <NotFound />
          </Layout>
        ),
      },
      {
        path: URL_HOME,
        element: (
          <Layout>
            <HomePage />
          </Layout>
        ),
      },
      {
        path: URL_TODO_LIST,
        element: (
          <Layout>
            <TodoList />
          </Layout>
        ),
      },
      {
        path: URL_CREATE_TODO,
        element: (
          <Layout>
            <CreateTodo />
          </Layout>
        ),
      },
    ],
  },
]);
