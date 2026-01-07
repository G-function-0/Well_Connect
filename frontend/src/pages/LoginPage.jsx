import React, { useState } from 'react';

// --- Sub-component: Next-Gen Input ---
const SmartInput = ({ type, label, placeholder, icon, rightAction }) => {
    const [focused, setFocused] = useState(false);

    return (
        <div style={styles.inputGroup}>
            <label style={{
                ...styles.label,
                color: focused ? '#10b981' : '#64748b',
                transform: focused ? 'translateX(4px)' : 'none'
            }}>{label}</label>
            <div style={{
                ...styles.inputWrapper,
                borderColor: focused ? '#10b981' : '#e2e8f0',
                backgroundColor: focused ? '#ffffff' : '#f8fafc',
                boxShadow: focused ? '0 12px 24px -8px rgba(16, 185, 129, 0.15)' : 'none'
            }}>
                <div style={styles.iconBox}>{icon}</div>
                <input
                    type={type}
                    placeholder={placeholder}
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(false)}
                    style={styles.input}
                />
                {rightAction && <div style={styles.rightAction}>{rightAction}</div>}
            </div>
        </div>
    );
};

export default function LoginPage() {
    return (
        <div style={styles.viewport}>
            {/* Dynamic Background Elements */}
            <div style={styles.meshGradient} />
            <div style={styles.floatingOrb1} />
            <div style={styles.floatingOrb2} />

            <main style={styles.mainContainer}>
                {/* Left Side: Brand Context (Hidden on Mobile) */}
                <div style={styles.brandContext}>
                    <div style={styles.logoMark}>
                        <svg style={styles.logoIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>
                    <h1 style={styles.brandTitle}>Fit<span style={{ color: '#10b981' }}>Guide</span></h1>
                    <p style={styles.brandTagline}>Your personal performance operating system.</p>

                    <div style={styles.statsCard}>
                        <div style={styles.statItem}>
                            <span style={styles.statValue}>12k+</span>
                            <span style={styles.statLabel}>Active Athletes</span>
                        </div>
                        <div style={styles.divider} />
                        <div style={styles.statItem}>
                            <span style={styles.statValue}>4.9/5</span>
                            <span style={styles.statLabel}>User Rating</span>
                        </div>
                    </div>
                </div>

                {/* Right Side: The Login Card */}
                <div style={styles.loginCard}>
                    <header style={styles.header}>
                        <h2 style={styles.cardTitle}>Welcome Back</h2>
                        <p style={styles.cardSubtitle}>
                            New here? <a href="/register" style={styles.textLink}>Start your journey</a>
                        </p>
                    </header>

                    <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
                        <SmartInput
                            label="Email Address"
                            type="email"
                            placeholder="name@energy.com"
                            icon={<svg style={styles.fieldIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" /></svg>}
                        />

                        <SmartInput
                            label="Password"
                            type="password"
                            placeholder="••••••••"
                            icon={<svg style={styles.fieldIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>}
                            rightAction={<a href="#" style={styles.forgotLink}>Forgot?</a>}
                        />

                        <div style={styles.footerActions}>
                            <label style={styles.checkboxLabel}>
                                <input type="checkbox" style={styles.checkbox} />
                                <span>Remember me</span>
                            </label>
                        </div>

                        <button type="submit" style={styles.loginButton}>
                            <span>Enter Dashboard</span>
                            <svg style={styles.btnIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </form>

                    <div style={styles.securityNote}>
                        <svg style={styles.lockIcon} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                        </svg>
                        SECURE END-TO-END ENCRYPTION
                    </div>
                </div>
            </main>
        </div>
    );
}

// --- Next Level Styles ---
const styles = {
    viewport: {
        minHeight: '100vh',
        backgroundColor: '#0a0f1a', // Deep midnight
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '"Plus Jakarta Sans", sans-serif',
        padding: '2rem',
        position: 'relative',
        overflow: 'hidden'
    },
    meshGradient: {
        position: 'absolute',
        inset: 0,
        background: `radial-gradient(at 0% 0%, rgba(16, 185, 129, 0.15) 0px, transparent 50%), 
                 radial-gradient(at 100% 100%, rgba(59, 130, 246, 0.15) 0px, transparent 50%)`,
        zIndex: 1
    },
    floatingOrb1: {
        position: 'absolute',
        width: '40vw',
        height: '40vw',
        top: '-10%',
        left: '-10%',
        background: 'rgba(16, 185, 129, 0.08)',
        filter: 'blur(120px)',
        borderRadius: '50%',
        zIndex: 1
    },
    mainContainer: {
        display: 'flex',
        width: '100%',
        maxWidth: '1100px',
        gap: '4rem',
        alignItems: 'center',
        position: 'relative',
        zIndex: 2
    },
    brandContext: {
        flex: 1,
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
    },
    logoMark: {
        width: '3.5rem',
        height: '3.5rem',
        backgroundColor: '#10b981',
        borderRadius: '1.25rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 0 30px rgba(16, 185, 129, 0.4)',
        marginBottom: '1rem'
    },
    logoIcon: { color: 'white', width: '2rem' },
    brandTitle: { fontSize: '3.5rem', fontWeight: 800, margin: 0, letterSpacing: '-0.04em' },
    brandTagline: { fontSize: '1.25rem', color: '#94a3b8', maxWidth: '320px', lineHeight: 1.5 },
    statsCard: {
        marginTop: '2rem',
        backgroundColor: 'rgba(255, 255, 255, 0.03)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.05)',
        borderRadius: '1.5rem',
        padding: '1.5rem',
        display: 'flex',
        gap: '2rem',
        width: 'fit-content'
    },
    statItem: { display: 'flex', flexDirection: 'column' },
    statValue: { fontSize: '1.5rem', fontWeight: 800, color: '#10b981' },
    statLabel: { fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.1em' },
    divider: { width: '1px', backgroundColor: 'rgba(255, 255, 255, 0.1)' },

    loginCard: {
        width: '100%',
        maxWidth: '460px',
        backgroundColor: '#ffffff',
        borderRadius: '2.5rem',
        padding: '3.5rem',
        boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.25)',
    },
    header: { marginBottom: '2.5rem' },
    cardTitle: { fontSize: '2.25rem', fontWeight: 800, color: '#0f172a', margin: 0, letterSpacing: '-0.02em' },
    cardSubtitle: { color: '#64748b', marginTop: '0.75rem', fontSize: '1rem' },
    textLink: { color: '#10b981', fontWeight: 700, textDecoration: 'none' },

    form: { display: 'flex', flexDirection: 'column', gap: '1.5rem' },
    inputGroup: { display: 'flex', flexDirection: 'column', gap: '0.5rem' },
    label: { fontSize: '0.85rem', fontWeight: 700, transition: 'all 0.2s ease' },
    inputWrapper: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 1.25rem',
        borderRadius: '1.25rem',
        border: '2px solid #e2e8f0',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
    },
    iconBox: { display: 'flex', alignItems: 'center', marginRight: '1rem' },
    fieldIcon: { width: '1.25rem', height: '1.25rem', color: '#94a3b8' },
    input: {
        flex: 1,
        padding: '1.1rem 0',
        border: 'none',
        backgroundColor: 'transparent',
        outline: 'none',
        fontSize: '1rem',
        fontWeight: 500,
        color: '#0f172a'
    },
    forgotLink: { fontSize: '0.75rem', fontWeight: 700, color: '#10b981', textDecoration: 'none' },

    footerActions: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 0.5rem' },
    checkboxLabel: { display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.875rem', color: '#64748b', cursor: 'pointer' },
    checkbox: { width: '1.1rem', height: '1.1rem', accentColor: '#10b981' },

    loginButton: {
        marginTop: '1rem',
        backgroundColor: '#0f172a',
        color: 'white',
        border: 'none',
        padding: '1.25rem',
        borderRadius: '1.25rem',
        fontSize: '1.1rem',
        fontWeight: 700,
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.75rem',
        transition: 'all 0.2s ease',
        boxShadow: '0 20px 40px -10px rgba(15, 23, 42, 0.3)'
    },
    btnIcon: { width: '1.25rem' },
    securityNote: {
        marginTop: '2.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.5rem',
        fontSize: '0.65rem',
        fontWeight: 800,
        color: '#cbd5e1',
        letterSpacing: '0.15em'
    },
    lockIcon: { width: '0.875rem', height: '0.875rem' }
};