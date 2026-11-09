
"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./login.module.css";
import {
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  ArrowLeft,
  ShieldCheck,
} from "lucide-react";

export default function ControlPanelLogin() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className={styles["login-page"]}>
      {/* BACKGROUND OVERLAY */}
      <div className={styles["login-overlay"]} />

      {/* BACK TO HOMEPAGE */}
      <Link href="/" className={styles["login-back"]}>
        <ArrowLeft size={16} />
        <span>Back to Homepage</span>
      </Link>

      {/* BRAND */}
      <div className={styles["login-brand"]}>
        RedCorp<span>.</span>
      </div>

      {/* LOGIN CONTENT */}
      <div className={styles["login-container"]}>

        {/* ALYA DECORATION */}
        <div className={styles["login-character"]}>
          <img
            src="/images/alya.png"
            alt="Alya decoration"
          />
        </div>

        {/* GLASS LOGIN CARD */}
        <section className={styles["login-card"]}>

          <div className={styles["login-security-icon"]}>
            <ShieldCheck size={23} />
          </div>

          <p className={styles["login-eyebrow"]}>
            PRIVATE ACCESS · ADMIN ONLY
          </p>

          <h1>
            Welcome <span>Back.</span>
          </h1>

          <p className={styles["login-description"]}>
            Sign in to access your RedCorp control panel
            and manage your personal website.
          </p>

          {/* LOGIN FORM */}
          <form className={styles["login-form"]}>

            <div className={styles["login-field"]}>
              <label htmlFor="email">Email Address</label>

              <div className={styles["login-input-wrapper"]}>
                <Mail size={18} />

                <input
                  id="email"
                  type="email"
                  placeholder="admin@example.com"
                  autoComplete="username"
                />
              </div>
            </div>

            <div className={styles["login-field"]}>
              <label htmlFor="password">Password</label>

              <div className={styles["login-input-wrapper"]}>
                <LockKeyhole size={18} />

                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                />

                <button
                  type="button"
                  className={styles["login-password-toggle"]}
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={
                    showPassword ? "Hide password" : "Show password"
                  }
                >
                  {showPassword ? (
                    <EyeOff size={18} />
                  ) : (
                    <Eye size={18} />
                  )}
                </button>
              </div>
            </div>

            <button type="button" className={styles["login-submit"]}>
              Sign In
            </button>

          </form>

          <div className={styles["login-card-footer"]}>
            <LockKeyhole size={13} />
            <span>Protected by RedCorp Security</span>
          </div>

        </section>
      </div>

      {/* FOOTER */}
      <footer className={styles["login-footer"]}>
        © 2026 RedCorp. All rights reserved.
      </footer>
    </main>
  );
}
