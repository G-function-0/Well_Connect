import React, { useState } from 'react';

// --- Reusable Modern Components ---

const FeatureItem = ({ text }) => (
    <li style={styles.featureItem}>
        <div style={styles.featureIconWrapper}>
            <svg style={styles.featureIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
        </div>
        <span style={styles.featureText}>{text}</span>
    </li>
);

const InputField = ({ type, name, placeholder, iconPath }) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div style={styles.inputContainer}>
            <div style={{
                ...styles.inputWrapper,
                borderColor: isFocused ? '#10b981' : '#e2e8f0',
                boxShadow: isFocused ? '0 0 0 4px rgba(16, 185, 129, 0.1)' : 'none'
            }}>
                <svg style={{ ...styles.inputIcon, color: isFocused ? '#10b981' : '#94a3b8' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={iconPath} />
                </svg>
                <input
                    type={type}
                    name={name}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder={placeholder}
                    style={styles.input}
                />
            </div>
        </div>
    );
};

export default function RegisterPage() {
    return (
        <div style={styles.pageContainer}>
            <main style={styles.layout}>

                {/* Visual Branding Section */}
                <section style={styles.visualSide}>
                    <div style={styles.imageOverlay} />
                    <img
                        src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?auto=format&fit=crop&q=80"
                        alt="Gym"
                        style={styles.heroImage}
                    />

                    <div style={styles.visualContent}>
                        <div style={styles.badge}>NEW: VERSION 2.0</div>
                        <h1 style={styles.heroTitle}>
                            Elevate your <br />
                            <span style={styles.accentText}>Fitness Journey.</span>
                        </h1>
                        <p style={styles.heroSubtitle}>
                            Join over 10,000+ athletes achieving their peak performance with data-driven coaching.
                        </p>

                        <ul style={styles.featureList}>
                            <FeatureItem text="Biometric Progress Tracking" />
                            <FeatureItem text="Elite Trainer Marketplace" />
                            <FeatureItem text="Smart Meal Intelligence" />
                        </ul>
                    </div>
                </section>

                {/* Interaction/Form Section */}
                <section style={styles.formSide}>
                    <div style={styles.glassCard}>
                        <header style={styles.header}>
                            <h2 style={styles.title}>Create Account</h2>
                            <p style={styles.subtitle}>Start your 14-day free trial today.</p>
                        </header>

                        <form style={styles.form}>
                            <div style={styles.rolePicker}>
                                <label style={styles.roleOptionActive}>
                                    <input type="radio" name="role" defaultChecked style={{ display: 'none' }} />
                                    <span style={styles.roleLabel}>Learner</span>
                                </label>
                                <label style={styles.roleOption}>
                                    <input type="radio" name="role" style={{ display: 'none' }} />
                                    <span style={styles.roleLabel}>Trainer</span>
                                </label>
                            </div>

                            <div style={styles.fieldGrid}>
                                <InputField
                                    type="text" name="name" placeholder="Full Name"
                                    iconPath="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                                />
                                <InputField
                                    type="email" name="email" placeholder="Email Address"
                                    iconPath="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                                <InputField
                                    type="password" name="password" placeholder="Password"
                                    iconPath="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                                />
                            </div>

                            <button type="submit" style={styles.submitButton}>
                                Get Started
                                <svg style={{ width: '1.25rem', height: '1.25rem' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </form>

                        <p style={styles.loginLink}>
                            Already a member? <a href="/login" style={styles.anchor}>Sign In</a>
                        </p>
                    </div>
                </section>
            </main>
        </div>
    );
}

// --- Next Level Styles ---

const styles = {
    pageContainer: {
        minHeight: '100vh',
        backgroundColor: '#0f172a',
        fontFamily: '"Inter", sans-serif',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    layout: {
        width: '100%',
        maxWidth: '1200px',
        height: '850px',
        display: 'flex',
        backgroundColor: '#ffffff',
        borderRadius: '2rem',
        overflow: 'hidden',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
    },
    visualSide: {
        width: '45%',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        padding: '4rem',
        color: '#ffffff',
    },
    heroImage: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    },
    imageOverlay: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, #0f172a 30%, rgba(15, 23, 42, 0.6) 100%)',
        zIndex: 1,
    },
    visualContent: {
        position: 'relative',
        zIndex: 2,
    },
    badge: {
        display: 'inline-block',
        padding: '0.5rem 1rem',
        backgroundColor: 'rgba(52, 211, 153, 0.1)',
        border: '1px solid rgba(52, 211, 153, 0.3)',
        borderRadius: '2rem',
        color: '#34d399',
        fontSize: '0.75rem',
        fontWeight: 700,
        marginBottom: '2rem',
    },
    heroTitle: {
        fontSize: '3.5rem',
        lineHeight: 1.1,
        fontWeight: 800,
        marginBottom: '1.5rem',
    },
    accentText: {
        color: '#10b981',
    },
    heroSubtitle: {
        fontSize: '1.125rem',
        color: '#94a3b8',
        marginBottom: '3rem',
        lineHeight: 1.6,
    },
    featureList: {
        listStyle: 'none',
        padding: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
    },
    featureItem: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
    },
    featureIconWrapper: {
        width: '2rem',
        height: '2rem',
        backgroundColor: 'rgba(16, 185, 129, 0.2)',
        borderRadius: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    featureIcon: {
        width: '1.25rem',
        height: '1.25rem',
        color: '#10b981',
    },
    formSide: {
        flex: 1,
        backgroundColor: '#f8fafc',
        padding: '4rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    glassCard: {
        width: '100%',
        maxWidth: '400px',
    },
    header: {
        marginBottom: '2.5rem',
    },
    title: {
        fontSize: '2rem',
        fontWeight: 800,
        color: '#1e293b',
        margin: 0,
    },
    subtitle: {
        color: '#64748b',
        marginTop: '0.5rem',
    },
    rolePicker: {
        display: 'flex',
        backgroundColor: '#f1f5f9',
        padding: '0.35rem',
        borderRadius: '0.75rem',
        marginBottom: '2rem',
    },
    roleOptionActive: {
        flex: 1,
        textAlign: 'center',
        padding: '0.75rem',
        backgroundColor: '#ffffff',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
        cursor: 'pointer',
        fontWeight: 600,
        color: '#0f172a',
    },
    roleOption: {
        flex: 1,
        textAlign: 'center',
        padding: '0.75rem',
        cursor: 'pointer',
        fontWeight: 600,
        color: '#64748b',
    },
    fieldGrid: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1.25rem',
        marginBottom: '2rem',
    },
    inputWrapper: {
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#ffffff',
        border: '2px solid #e2e8f0',
        borderRadius: '0.875rem',
        padding: '0 1rem',
        transition: 'all 0.2s ease',
    },
    inputIcon: {
        width: '1.25rem',
        height: '1.25rem',
        marginRight: '0.75rem',
    },
    input: {
        flex: 1,
        border: 'none',
        padding: '1rem 0',
        outline: 'none',
        fontSize: '0.95rem',
        color: '#1e293b',
    },
    submitButton: {
        width: '100%',
        padding: '1.125rem',
        backgroundColor: '#0f172a',
        color: '#ffffff',
        border: 'none',
        borderRadius: '0.875rem',
        fontWeight: 700,
        fontSize: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        cursor: 'pointer',
        transition: 'transform 0.2s ease, background-color 0.2s ease',
    },
    loginLink: {
        textAlign: 'center',
        marginTop: '2rem',
        color: '#64748b',
        fontSize: '0.875rem',
    },
    anchor: {
        color: '#10b981',
        fontWeight: 700,
        textDecoration: 'none',
    },
};