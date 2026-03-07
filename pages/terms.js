"use client";

import Link from "next/link";
import Head from "next/head";

export default function TermsOfService() {
    return (
        <>
            <Head>
                <title>OTU Attendance Tracker - Terms of Service</title>
                <meta name="description" content="Terms of Service for OTU Attendance Tracker" />
                <link rel="icon" href="favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <div className="layout-wrapper">
                <header className="app-header">
                    <div className="header-content">
                        <div className="logo-group">
                            <Link href="/" style={{ textDecoration: "none", color: "inherit", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                <svg className="icon-logo" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                <h1>OTU Attendance</h1>
                            </Link>
                        </div>
                    </div>
                </header>

                <main className="main-content" style={{ alignItems: "flex-start" }}>
                    <div className="glass-card" style={{ maxWidth: "800px", padding: "2.5rem" }}>
                        <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem", color: "var(--primary)" }}>Terms of Service</h2>
                        <p className="subtitle">Last updated: March 7, 2026</p>

                        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", lineHeight: "1.6", color: "var(--text-main)" }}>
                            <section>
                                <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>1. Acceptance of Terms</h3>
                                <p>By accessing and using the OTU Exam Attendance Tracker, you agree to be bound by these Terms of Service. If you do not agree, please do not use this application.</p>
                            </section>

                            <section>
                                <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>2. Use of the Application</h3>
                                <p>This application is designed strictly for authorized faculty and staff to track student attendance during examinations. You agree to:</p>
                                <ul style={{ paddingLeft: "1.5rem" }}>
                                    <li>Use the application only for its intended academic purposes.</li>
                                    <li>Ensure you have the proper authorization to access and modify the Google Sheets you connect to this app.</li>
                                    <li>Not attempt to exploit, hack, or reverse-engineer the application.</li>
                                </ul>
                            </section>

                            <section>
                                <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>3. Third-Party Services</h3>
                                <p>Our application integrates with Google Drive and Google Sheets APIs. Your use of these services is also governed by Google&quot;s respective Terms of Service. We are not responsible for the availability or reliability of Google&quot;s API services.</p>
                            </section>

                            <section>
                                <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>4. Disclaimer of Warranties</h3>
                                <p>This application is provided &quot;as is&quot; without any warranties, express or implied. We do not guarantee that the application will be error-free or uninterrupted. Users should verify that attendance data has synced correctly to their spreadsheets.</p>
                            </section>

                            <section>
                                <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>5. Changes to Terms</h3>
                                <p>We reserve the right to modify these terms at any time. Continued use of the application following any changes constitutes your acceptance of the new terms.</p>
                            </section>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}