import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../common/Header";
import { Footer  } from  "../common/Footer";
      // adjust paths

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Page content goes here */}
      <main className="flex-1 bg-slate-100">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
