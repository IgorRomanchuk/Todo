import React, { lazy } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "src/components/Layout";
import { PublicRoute } from "../PublicRoute";
import { PrivateRoute } from "../PrivateRoute";

import {
  URL_HOME,
  URL_CREATE_TODO,
  URL_TODO_LIST,
  URL_NOT_FOUND,
  URL_REGISTER,
  URL_LOGIN,
  URL_SCHEDULE,
  URL_CREATE_APPOINTMENT,
} from "src/constants/clientUrl";

const HomePage = lazy(() => import("src/features/HomePage"));
const CreateTodo = lazy(() => import("src/features/CreateTodo"));
const NotFound = lazy(() => import("src/features/NotFound"));
const TodoList = lazy(() => import("src/features/TodoList"));
const Registration = lazy(() => import("src/features/Registration"));
const Login = lazy(() => import("src/features/Login"));
const Schedule = lazy(() => import("src/features/Schedule"));
const CreateAppointment = lazy(() => import("src/features/CreateAppointment"));

export const router = createBrowserRouter([
  {
    element: <PublicRoute />,
    children: [
      {
        path: URL_REGISTER,
        element: <Registration />,
      },
      {
        path: URL_LOGIN,
        element: <Login />,
      },
    ],
  },
  {
    element: <PrivateRoute />,
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
      {
        path: URL_SCHEDULE,
        element: (
          <Layout>
            <Schedule />
          </Layout>
        ),
      },
      {
        path: URL_CREATE_APPOINTMENT,
        element: (
          <Layout>
            <CreateAppointment />
          </Layout>
        ),
      },
    ],
  },
]);
